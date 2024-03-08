import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConnectorService } from '../connector.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialog } from './../common/common-error';
import { Router } from '@angular/router';

@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.css']
})
export class OrgComponent implements OnInit {

  headers = {};
  cookies = {};
  host = '';
  self = {};
  search = "";
  orgs = [];
  org_sites = {};
  sites = [];
  orgMode: boolean = false;
  selected_org_obj = {
    id: "",
    name: ""
  };
  org_id: string = "";
  site_id: string = "";
  me: string = "";
  adminMode: boolean = false;
  map = {
    options: {
      scrollwheel: false,
      disableDefaultUI: true,
      draggable: false,
      draggableCursor: "pointer",
      clickableIcons: false
    },
    zoom: 12
  }

  apiLoaded: Observable<boolean>;
  claimDisabled: boolean = true;
  topBarLoading = false;
  noSiteToDisplay = false;
  constructor(private _http: HttpClient, private _appService: ConnectorService, public _dialog: MatDialog, private _router: Router) { }


  ngOnInit() {

    this._appService.headers.subscribe(headers => this.headers = headers);
    this._appService.cookies.subscribe(cookies => this.cookies = cookies);
    this._appService.host.subscribe(host => this.host = host);
    this._appService.self.subscribe(self => this.self = self || {});
    this._appService.org_id.subscribe(org_id => this.org_id = org_id);
    this.me = this.self["email"] || null;
    this.check_auth_status();
    var tmp_orgs: string[] = [];

    // parsing all the orgs/sites from the privileges
    // only orgs with admin/write/installer roles are used
    if (Object.keys(this.self).length > 0 && this.self["privileges"]) {
      this.self["privileges"].forEach(element => {
        const org_id:string = element["org_id"];
        const role:string = element["role"];

        if (role == "admin" || role == "write") {

          if (element["scope"] == "org") {
            if (tmp_orgs.indexOf(org_id) < 0) {
              this.orgs.push({ id: org_id, name: element["name"], role: role })
              tmp_orgs.push(org_id)
            }
            
          } else if (element["scope"] == "site") {
            const site_id = element["site_id"]
            if (tmp_orgs.indexOf(org_id) < 0) {
              this.orgs.push({ id: org_id, name: element["org_name"], role: role })
              tmp_orgs.push(org_id)
              this.org_sites[org_id] = [site_id]
            } else if (!this.org_sites[org_id].sites.includes(site_id)) {this.org_sites[org_id].push(site_id)}
          }
        }
      });
      this.orgs = this.sortList(this.orgs, "name");
    }

    // if only one, using it by default
    if (!this.org_id && this.orgs.length == 1) {
      this.org_id = this.orgs[1]["id"]
    }
    // if back button used, retrieving previously selected org
    // or if only one org, loading it automatically
    if (this.org_id) {
      this.orgs.forEach(element => {
        if (element.id == this.org_id) {
          this.selected_org_obj = element;
          this.changeOrg();
        }
      })
    }
  }

  private check_auth_status(){"api.mist.com"
    if (Object.keys(this.self).length == 0){
      this._router.navigate(['/login']);
    }
  }

  // when the user selects a new org
  // disabling the admin mode
  // and loading the sites
  changeOrg() {
    this.org_id = this.selected_org_obj.id
    if (this.org_sites.hasOwnProperty(this.org_id)) this.loadSiteList();
    else this.loadSites();
  }


  // loads the org sites for site privilege
  private loadSiteList() {
    this.topBarLoading = true;
    this.claimDisabled = true;
    this.sites = [];
    const site_ids = this.org_sites[this.org_id];
    this._http.post<any>('/api/sites/', { host: this.host, cookies: this.cookies, headers: this.headers, org_id: this.org_id, site_ids:site_ids}).subscribe({
      next: data => this.parseSites(data),
      error: error => {
        var message: string = "There was an error... "
        if ("error" in error) {
          message += error["error"]["message"]
        }
        this.topBarLoading = false;
        this.openError(message)
      }
    })
  }

  // loads the org sites for org privilege
  private loadSites() {
    this.topBarLoading = true;
    this.claimDisabled = true;
    this.sites = [];
    this._http.post<any>('/api/sites/', { host: this.host, cookies: this.cookies, headers: this.headers, org_id: this.org_id}).subscribe({
      next: data => this.parseSites(data),
      error: error => {
        var message: string = "There was an error... "
        if ("error" in error) {
          message += error["error"]["message"]
        }
        this.topBarLoading = false;
        this.openError(message)
      }
    })
  }

  // parse the org sites from HTTP response
  private parseSites(data) {
    if (data.sites.length > 0) {
      this.noSiteToDisplay = false;
      this.sites = this.sortList(data.sites, "name");
      this.claimDisabled = false;
    } else {
      this.noSiteToDisplay = true;
    }
    this.topBarLoading = false;
  }




  // ROUTING FUNCTION
  // used when user wants to claim devices to org
  setOrg(): void {
    this.orgMode = true;
    this.gotoDash();    
  }
  // used when user wants to claim devices to site
  setSite(site): void {
    if (site != null) {
      this.site_id = site.id;
    } else {
      this.site_id = "";
    }
    this.orgMode = true;
    this._appService.siteIdSet(this.site_id);
    this.gotoDash();
  }
  // publish variables and go to the dashboard
  gotoDash(): void {    
    this._appService.orgModeSet(this.orgMode)
    this._appService.orgIdSet(this.org_id);
    this._router.navigate(["/dashboard"]);
  }


  // COMMON
  private sortList(data, attribute) {
    return data.sort(function (a, b) {
      var nameA = a[attribute].toUpperCase(); // ignore upper and lowercase
      var nameB = b[attribute].toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
  }

  // DIALOG BOXES
  // ERROR
  openError(message: string): void {
    const dialogRef = this._dialog.open(ErrorDialog, {
      data: message
    });
  }
}
