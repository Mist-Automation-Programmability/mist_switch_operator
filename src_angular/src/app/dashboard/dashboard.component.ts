import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { UntypedFormBuilder, Validators, UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { MatPaginator } from '@angular/material/paginator';

import { ErrorDialog } from '../common/common-error';


import { ConnectorService } from '../connector.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { interval, Subscription } from 'rxjs';


// Configuration element from Devices Details
export interface DeviceDetailsElement {
  managed: boolean,
  role: string,
  notes: string,
  ip_config: IpConfigElement,
  oob_ip_config: IpConfigElement,
  disable_auto_config: boolean,
  networks: object,
  port_usages: object,
  additional_config_cmds: string[],
  id: string,
  name: string,
  site_id: string,
  org_id: string,
  created_time: number,
  modified_time: number,
  map_id: string | null,
  mac: string,
  serial: string,
  model: string,
  hw_rev: string,
  type: string,
  tag_uuid: string | null,
  tag_id: number | null,
  deviceprofile_id: string | null
}

export interface IpConfigElement {
  type: string,
  ip: string | null,
  netmask: string | null,
  gateway: string | null,
  dns: string[] | null,
  dns_suffix: string | null,
  network: string
}

export interface PortElement {
  mode: string,
  all_networks: boolean,
  networks: string[],
  port_network: string,
  port_auth: string,
  enable_mac_auth: string,
  guest_network: string,
  bypass_auth_when_server_down: boolean,
  speed: string,
  duplex: string,
  disable_autoneg: boolean,
  mac_limit: number,
  stp_edge: boolean,
  mtu: number,
  disabled: boolean,
  poe_disabled: boolean,
  description: string,
  voip_network: string,
  storm_control: {}
}


// Configuration Elements derived from the site
export interface DerivedElement {
  additional_config_cmds: string[],
  network: object,
  port_usages: object,
  switch_matching: SwitchMatchingElement,
  vars: object

}
export interface SwitchMatchingElement {
  element: boolean,
  riles: object[]
}

// Device Elements for the list
export interface DeviceElement {
  id: string,
  site_id: string,
  org_id: string,
  mac: string,
  vc_mac: string,
  model: string,
  type: string,
  serial: string,
  status: string,
  members: object[]
}

export interface MistDevices {
  results: DeviceElement[];
  total: number;
  limit: number;
  page: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  frmPort = this._formBuilder.group({
    mode: "access",
    all_networks: false,
    networks: [],
    port_network: "default",
    port_auth: "",
    enable_mac_auth: "",
    guest_network: "",
    bypass_auth_when_server_down: false,
    speed: ["auto"],
    duplex: ["auto"],
    autoneg: true,
    mac_limit: 0,
    stp_edge: true,
    mtu: 1514,
    enabled: true,
    poe: true,
    description: "",
    voip_network: "",
    storm_control: {}
  })

  defaultConfig = {
    mode: "access",
    all_networks: false,
    networks: [],
    port_network: "",
    port_auth: "",
    enable_mac_auth: "",
    guest_network: "",
    bypass_auth_when_server_down: false,
    speed: "auto",
    duplex: "auto",
    disable_autoneg: false,
    mac_limit: 0,
    stp_edge: true,
    mtu: 1514,
    disabled: false,
    poe_disabled: false,
    description: "",
    voip_network: "",
    storm_control: {}
  }

  headers = {};
  cookies = {};
  host = '';
  self = {};
  search = "";
  orgs = [];
  sites = [];
  maps = [];
  org_id: string = "";
  orgMode: boolean = false;
  site_id: string = "__any__";
  me: string = "";

  topBarLoading = false;
  deviceLoading = false;

  editingDevice = null;
  editingDeviceSettings = null;
  selectedPorts = [];
  editingPortNames = [];
  editingPortsStatus = {};
  displayedPorts = {};
  availablePorts = [];
  readonlyPorts = [];
  lacpPorts = {};
  portsInAe = [];

  filteredDevicesDatabase: MatTableDataSource<DeviceElement> | null;
  selectedPortsStats: MatTableDataSource<DeviceElement> | null;
  devices: DeviceElement[] = []

  resultsLength = 0;
  displayedColumns: string[] = ["device"];
  displayedStatsColumns: string[] = ['port_id', 'up', 'media_type', 'neighbor_system_name', 'neighbor_mac', 'neighbor_port_desc'];
  private _subscription: Subscription

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _router: Router, private _http: HttpClient, private _appService: ConnectorService, public _dialog: MatDialog, private _formBuilder: UntypedFormBuilder, private _snackBar: MatSnackBar) { }

  //////////////////////////////////////////////////////////////////////////////
  /////           INIT
  //////////////////////////////////////////////////////////////////////////////

  ngOnInit() {
    const source = interval(180000);

    this._appService.headers.subscribe(headers => this.headers = headers)
    this._appService.cookies.subscribe(cookies => this.cookies = cookies)
    this._appService.host.subscribe(host => this.host = host)
    this._appService.self.subscribe(self => this.self = self || {})
    this._appService.org_id.subscribe(org_id => this.org_id = org_id)
    this._appService.site_id.subscribe(site_id => this.site_id = site_id)
    this._appService.orgMode.subscribe(orgMode => this.orgMode = orgMode)

    if (!this.host) {
      this._router.navigate(["/"]);
    } else {
      this.getDevices();
      this._subscription = source.subscribe(s => this.getDevices());
    }

  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }


  //////////////////////////////////////////////////////////////////////////////
  /////           LOAD DEVICE LIST
  //////////////////////////////////////////////////////////////////////////////

  getDevices() {
    var body = null
    body = { host: this.host, cookies: this.cookies, headers: this.headers, site_id: this.site_id, full: true }

    if (body) {
      this.topBarLoading = true;
      this._http.post<DeviceElement[]>('/api/devices/', body).subscribe({
        next: data => {
          data["results"].forEach(element => {
            if (this.editingDevice && this.editingDevice.mac == element.mac) {
              this.editingDevice = element;
            }
          });
          this.filteredDevicesDatabase = new MatTableDataSource(data["results"]);

          this.filteredDevicesDatabase.paginator = this.paginator;
          this.topBarLoading = false;
        },
        error: error => {
          var message: string = "There was an error... "
          if ("error" in error) { message += error["error"]["message"] }
          this.openError(message)
        }
      })

    }
  }

  //////////////////////////////////////////////////////////////////////////////
  /////           EDIT DEVICE
  //////////////////////////////////////////////////////////////////////////////
  editDevice(device: DeviceElement): void {
    if (device == this.editingDevice) {
      this.discardDevice();
    }
    else {
      this.discardDevice();
      this.editingDevice = device;
      this.getDeviceSettings()
      this.getPortStatus()
    }
  }

  private getDeviceSettings(): void {
    this.deviceLoading = true
    this._http.post<any>('/api/devices/settings/', {
      host: this.host,
      cookies: this.cookies,
      headers: this.headers,
      site_id: this.site_id,
      device_id: this.editingDevice.id
    }).subscribe({
      next: data => {
        this.editingDeviceSettings = data;
        this.displayedPorts = data.ports;
        this.deviceLoading = false;
        this.selectedPorts = [];
        this.correlate_ports();
      },
      error: error => {
        this.deviceLoading = false
        var message: string = "Unable to load settings for the Device " + this.editingDevice.mac + "... "
        if ("error" in error) { message += error["error"]["message"] }
        this.openError(message)
      }
    })
  }


  discardDevice(): void {
    this.editingDevice = null;
    this.editingDeviceSettings = null;
    this.selectedPorts = [];
    this.editingPortNames = [];
    this.displayedPorts = {};
    this.discardPorts();
  }

  // Reset the ports selection and form
  private discardPorts(): void {
    this.selectedPorts = []
    this.editingPortNames = []
    this.frmPort.reset()
  }

  powerDraw(member) {
    var percentage = (member.poe.power_draw / member.poe.max_power) * 100
    return percentage
  }


  private sort_available_ports(): void {
    this.availablePorts.sort((port_a, port_b) => {
      if (port_a.includes("-")) port_a = port_a.split("-")[1]
      if (port_b.includes("-")) port_b = port_b.split("-")[1]
      if (!port_a < port_b) {
        return -1
      } else if (port_a > port_b) {
        return 1
      }
      return 0
    })
  }

  private mark_readonly_ports(): void {
    this.availablePorts.forEach(port => {
      if (this.displayedPorts.hasOwnProperty(port)) {
        if (Object.keys(this.displayedPorts[port].device).length > 0) {
          if (this.displayedPorts[port].device.hasOwnProperty("no_local_overwrite") && this.displayedPorts[port].device.no_local_overwrite == true) this.readonlyPorts.push(port);
        } else if (this.displayedPorts[port].site.hasOwnProperty("no_local_overwrite") && this.displayedPorts[port].site.no_local_overwrite == true) this.readonlyPorts.push(port);
      }
    })
  }
  private mark_lacp_ports(): void {
    for (var [port, port_config] of Object.entries(this.displayedPorts)) {
      if (port_config["device"].hasOwnProperty("ae_uuid")) this.lacpPorts[port] = port_config["device"]["ae_uuid"];
      else if (port_config["site"].hasOwnProperty("ae_uuid")) this.lacpPorts[port] = port_config["site"]["ae_uuid"];
    }
  }

  private mark_available_ports(interface_mapping: {}): void {
    this.availablePorts = [];
    this.readonlyPorts = [];
    this.editingDeviceSettings["members"].forEach(member => {
      for (var i = 0; i < member.ports.length; i++) {
        var port = member.ports[i];
        if (member.ports[i].includes("-") && interface_mapping.hasOwnProperty(member.ports[i].split("-")[1])) {
          port = interface_mapping[member.ports[i].split("-")[1]];
        }
        member.ports[i] = port;
        if (port.indexOf("vcp") < 0) {
          this.availablePorts.push(port);
        } else {
          this.readonlyPorts.push(port);
        }
        if (!this.editingDeviceSettings.ports.hasOwnProperty(port)) {
          this.editingDeviceSettings.ports[port] = {
            "port": port,
            "site": {},
            "device": {}
          }
          if (this.editingDeviceSettings.ports[port].hasOwnProperty("aggregated") && this.editingDeviceSettings.ports[port].port_parent != "") {
            this.lacpPorts[port] = this.editingDeviceSettings.ports[port].port_parent;
          }
        }
      }
    })
  }


  private correlate_ports(): void {
    if (Object.keys(this.displayedPorts).length > 0 && Object.keys(this.editingPortsStatus).length > 0) {
      //example { "0/0/0": "ge-0/0/0", "0/0/1": "xe-0/0/1"}
      var interface_mapping = {};
      Object.keys(this.editingPortsStatus).forEach(status_port => {
        if (status_port.includes("-")) {
          interface_mapping[status_port.split("-")[1]] = status_port;
        }
      })
      this.mark_available_ports(interface_mapping);
      this.mark_readonly_ports();
      this.mark_lacp_ports();
      this.sort_available_ports();
      this.editingPortNames.forEach(element => {
        this.selectedPorts.push(this.editingDeviceSettings.ports[element])
      })
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  /////           Ports Status
  //////////////////////////////////////////////////////////////////////////////

  private getPortStatus(): void {
    this._http.post<any>('/api/devices/portstatus/', {
      host: this.host,
      cookies: this.cookies,
      headers: this.headers,
      site_id: this.site_id,
      device_mac: this.editingDevice.mac
    }).subscribe({
      next: data => {
        this.editingPortsStatus = data.result;
        this.correlate_ports();
      },
      error: error => {
        this.deviceLoading = false
        var message: string = "Unable to load ports status for the Device " + this.editingDevice.mac + "... "
        if ("error" in error) { message += error["error"]["message"] }
        this.openError(message)
      }
    })
  }

  display_status(port: string): boolean {
    if (port.includes("-")) {
      port = port.split("-")[1];
    }
    for (let [interface_name, value] of Object.entries(this.editingPortsStatus)) {
      if (interface_name.includes("-")) {
        interface_name = interface_name.split("-")[1];
      }
      if (port == interface_name && value.hasOwnProperty("up")) {
        return value["up"];
      }
    }
    return false;
  }

  display_pic(member, pic_number: number): boolean {
    return member.ports.filter(port => port.includes('/' + pic_number + '/')).length > 0
  }
  //////////////////////////////////////////////////////////////////////////////
  /////           EDIT Port
  //////////////////////////////////////////////////////////////////////////////
  selectPort(port_name): void {
    if (this.readonlyPorts.indexOf(port_name) < 0) {
      let port = this.editingDeviceSettings.ports[port_name];
      let port_names = [];
      let selected_ports = 0;
      if (this.lacpPorts.hasOwnProperty(port_name)) {
        const ae_uuid = this.lacpPorts[port_name];
        for (let [tmp_port, tmp_ae_uuid] of Object.entries(this.lacpPorts)) {
          if (ae_uuid == tmp_ae_uuid) port_names.push(tmp_port);
        }
      } else {
        port_names.push(port_name);
      }
      selected_ports = port_names.length;

      // DELETE
      if (this.selectedPorts.includes(port)) {
        port_names.forEach(tmp_port => {
          let port = this.editingDeviceSettings.ports[tmp_port];
          this.deletePort(port);
        });
        if (this.selectedPorts.length == 1) {
          this.setPortFields(this.selectedPorts[0]);
        } else {
          let ae_uuids = [];
          this.selectedPorts.forEach(port=>{
            port_name = port["port"];            
            if (this.lacpPorts.hasOwnProperty(port_name) && !ae_uuids.includes(this.lacpPorts[port_name])){
              ae_uuids.push(this.lacpPorts[port_name]);
            }
          })
          if (ae_uuids.length == 1){
            this.setPortFields(this.selectedPorts[0]);
          }
        }
      }
      // ADD
      else {
        port_names.forEach(tmp_port => {
          let port = this.editingDeviceSettings.ports[tmp_port];
          this.addPort(port);
        });
        if (this.selectedPorts.length == selected_ports) {
          this.setPortFields(this.selectedPorts[0]);
        } else if (this.selectedPorts.length > 0) {
          this.setDefaultPortFielts();
        }
      }
      this.updateSelectedPortsStatus();
    }
  }

  private updateSelectedPortsStatus(): void {
    let tmp = [];
    this.editingPortNames.forEach(port => {
      if (this.editingPortsStatus.hasOwnProperty(port)) tmp.push(this.editingPortsStatus[port])
      else tmp.push({ port_id: port, up: false, media_type: "", neighbor_system_name: "", neighbor_mac: "", neighbor_port_desc: "" })
    })
    this.selectedPortsStats = new MatTableDataSource(tmp);
  }
  // ADD or REMOVE ports from the editing list
  private addPort(port): void {
    this.selectedPorts.push(port);
    this.editingPortNames.push(port.port);
  }
  private deletePort(port): void {
    let index = this.selectedPorts.indexOf(port)
    this.selectedPorts.splice(index, 1)
    let indexName = this.editingPortNames.indexOf(port.port)
    this.editingPortNames.splice(indexName, 1)
    if (this.selectedPorts.length == 0) {
      this.discardPorts()
    }
  }

  savePorts(): void {
    this.selectedPorts.forEach(element => {
      if (this.lacpPorts.hasOwnProperty(element["port"])){
        element["ae_uuid"] = this.lacpPorts[element["port"]];
      };
      element["new_conf"] = {
        "mode": this.frmPort.get("mode").value,
        "all_networks": this.frmPort.get("all_networks").value,
        "networks": this.frmPort.get("networks").value,
        "port_network": this.frmPort.get("port_network").value,
        "port_auth": this.frmPort.get("port_auth").value,
        "enable_mac_auth": this.frmPort.get("enable_mac_auth").value,
        "guest_network": this.frmPort.get("guest_network").value,
        "bypass_auth_when_server_down": this.frmPort.get("bypass_auth_when_server_down").value,
        "autoneg": this.frmPort.get("autoneg").value,
        "mac_limit": this.frmPort.get("mac_limit").value,
        "stp_edge": this.frmPort.get("stp_edge").value,
        "mtu": this.frmPort.get("mtu").value,
        "disabled": this.frmPort.get("enabled").value == false,
        "poe_disabled": this.frmPort.get("poe").value == false,
        "description": this.frmPort.get("description").value,
        "voip_network": this.frmPort.get("voip_network").value,
        "storm_control": this.frmPort.get("storm_control").value,
        "duplex": this.frmPort.get("duplex").value,
        "speed": this.frmPort.get("speed").value
      }
    })
    if (this.frmPort.valid) {
      this.topBarLoading = true
      var body = {
        host: this.host,
        cookies: this.cookies,
        headers: this.headers,
        site_id: this.site_id,
        org_id: this.org_id,
        port_config: this.selectedPorts,
        device_id: this.editingDevice.id
      }
      this._http.post<any>('/api/devices/update/', body).subscribe({
        next: data => {
          this.topBarLoading = false
          //this.updateFrmDeviceValues(data.result)
          this.getDeviceSettings()
          this.openSnackBar("Device " + this.editingDevice.mac + " successfully updated", "Done")
        },
        error: error => {
          this.topBarLoading = false
          var message: string = "Unable to save changes on Device " + this.editingDevice.mac + "... "
          if ("error" in error) { message += error["error"]["message"] }
          this.openError(message)
        }
      })
    }
  }

  // Set Port Form values
  private setDefaultPortFielts(): void {
    this.updateFrmDeviceValues(this.defaultConfig)
  }

  private setPortFields(port): void {
    var port_usage = ""
    // copy default values
    var config = { ...this.defaultConfig }
    // getting the port_usage profile name at the switch level, and, if none, at the site level
    if (port.device.hasOwnProperty("usage")) {
      port_usage = port.device["usage"]
    } else if (port.site.hasOwnProperty("usage")) {
      port_usage = port.site.usage
    }
    // if there is a configured port_usage, retrieving its configuration at the switch level, and
    // if none, at the site level
    if (port_usage) {
      var port_config = {}
      if (port_usage in this.editingDeviceSettings.device.port_usages) {
        port_config = this.editingDeviceSettings.device.port_usages[port_usage]
      }
      else if (port_usage in this.editingDeviceSettings.site.port_usages) {
        port_config = this.editingDeviceSettings.site.port_usages[port_usage]
      }
      // setting the config object with the port_usage settings
      for (var key in port_config) {
        config[key] = port_config[key]
      }
    }
    this.updateFrmDeviceValues(config)
  }

  canbeChecked(portName): boolean {
    return this.editingPortNames.includes(portName);
  }
  //////////////////////////////////////////////////////////////////////////////
  /////           COMMON
  //////////////////////////////////////////////////////////////////////////////
  port_tooltip(portName: string): string {
    let tooltip = portName;
    if (this.display_status(portName)){
      tooltip += " - UP";
    } else {
      tooltip += " - DOWN";
    }
    if (this.readonlyPorts.includes(portName)) {
      tooltip += " (locked by Adiministrator)";
    }
    return tooltip;
  }

  updateFrmDeviceValues(config: PortElement): void {
    this.frmPort.reset()
    this.frmPort.controls["port_network"].setValue(config.port_network)
    this.frmPort.controls["autoneg"].setValue(config.disable_autoneg == false)
    this.frmPort.controls["enabled"].setValue(config.disabled == false)
    this.frmPort.controls["poe"].setValue(config.poe_disabled == false)
    if (config.disable_autoneg == true) {
      this.frmPort.controls["duplex"] = new UntypedFormControl({ value: config.duplex, disabled: true })
      this.frmPort.controls["speed"] = new UntypedFormControl({ value: config.speed, disabled: true })
    } else {
      this.frmPort.controls["speed"].setValue(config.speed)
      this.frmPort.controls["duplex"].setValue(config.duplex)
    }
  }


  sortList(data, attribute) {
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredDevicesDatabase.filter = filterValue.trim().toLowerCase();

    if (this.filteredDevicesDatabase.paginator) {
      this.filteredDevicesDatabase.paginator.firstPage();
    }
  }

  applyPortFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.displayedPorts = {}
    if (filterValue) {
      for (var key in this.editingDeviceSettings.ports) {
        if (key.includes(filterValue)) {
          this.displayedPorts[key] = this.editingDeviceSettings.ports[key]
        }
      }
    } else {
      this.displayedPorts = this.editingDeviceSettings.ports
    }
  }

  back(): void {
    this._router.navigate(["/select"]);
  }

  //////////////////////////////////////////////////////////////////////////////
  /////           DIALOG BOXES
  //////////////////////////////////////////////////////////////////////////////
  // ERROR
  openError(message: string): void {
    const dialogRef = this._dialog.open(ErrorDialog, {
      data: message
    });
  }

  // SNACK BAR
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }
}


