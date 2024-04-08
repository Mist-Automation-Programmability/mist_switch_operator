"use strict";
(self["webpackChunkmso"] = self["webpackChunkmso"] || []).push([["main"],{

/***/ 484:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 2080);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 3436);
/* harmony import */ var _org_org_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./org/org.component */ 564);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4280);






const routes = [{
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'select',
  component: _org_org_component__WEBPACK_IMPORTED_MODULE_2__.OrgComponent
}, {
  path: 'dashboard',
  component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent
}, {
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
},
// redirect to `first-component`
{
  path: '**',
  redirectTo: '/login'
} // redirect to `first-component`
];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 6108:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ 2492);



class AppComponent {
  constructor() {
    this.title = 'Mist Switch Operator';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 5,
    vars: 0,
    consts: [[1, "flex", "row", 2, "background-color", "rgb(236 236 236)", "color", "gray", "justify-content", "flex-start", "align-items", "center", "align-content", "center"], ["height", "100%", "alt", "Mist Logo", "src", "data:image/png;base64,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"], [2, "margin-left", "1em", "font-weight", "lighter"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mist Switch Operator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbar],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5204:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 168);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ 1332);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/google-maps */ 6792);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ 3648);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ 9400);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 4672);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ 7872);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/input */ 2307);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/stepper */ 8680);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/divider */ 5180);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/card */ 8512);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/chips */ 9864);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ 1232);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/checkbox */ 8539);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/grid-list */ 6832);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4204);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/progress-bar */ 5220);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/paginator */ 4872);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 381);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/slide-toggle */ 3424);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/table */ 1200);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tooltip */ 7000);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/dialog */ 6144);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/icon */ 2328);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/sidenav */ 8200);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/snack-bar */ 4648);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/toolbar */ 2492);
/* harmony import */ var _src_app_common_common_pipes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/app/common/common-pipes */ 7140);
/* harmony import */ var _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/app/app-routing.module */ 484);
/* harmony import */ var _src_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/app.component */ 6108);
/* harmony import */ var _src_app_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/login/login.component */ 2080);
/* harmony import */ var _src_app_login_login_2FA__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/login/login-2FA */ 2828);
/* harmony import */ var _src_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/dashboard/dashboard.component */ 3436);
/* harmony import */ var _src_app_common_common_claim__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/common/common-claim */ 8420);
/* harmony import */ var _src_app_common_common_unclaim__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/common/common-unclaim */ 8432);
/* harmony import */ var _src_app_common_common_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/common/common-error */ 1060);
/* harmony import */ var _src_app_common_common_warning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/common/common-warning */ 5456);
/* harmony import */ var _src_app_common_common_claim_details__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/common/common-claim-details */ 8772);
/* harmony import */ var _src_app_org_org_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/app/org/org.component */ 564);
/* harmony import */ var _src_app_common_common_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @src/app/common/common.component */ 3185);
/* harmony import */ var _src_app_auto_generated_auto_generated_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @src/app/auto-generated/auto-generated.component */ 1312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 4040);













































class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => typeof value === 'function' ? value.name : value;
  }
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router));
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioModule,
      useValue: {
        color: 'accent'
      }
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_21__.GoogleMapsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientJsonpModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButtonModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__.MatChipsModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_27__.MatInputModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__.MatStepperModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_29__.MatDividerModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_30__.MatCardModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__.MatGridListModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__.MatSlideToggleModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_34__.MatTableModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_35__.MatCheckboxModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__.MatProgressBarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__.MatTooltipModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_39__.MatPaginatorModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_40__.MatDialogModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_41__.MatSidenavModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__.MatIconModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_43__.MatSnackBarModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _src_app_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _src_app_login_login_2FA__WEBPACK_IMPORTED_MODULE_4__.TwoFactorDialog, _src_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__.DashboardComponent, _src_app_common_common_claim__WEBPACK_IMPORTED_MODULE_6__.ClaimDialog, _src_app_common_common_unclaim__WEBPACK_IMPORTED_MODULE_7__.UnclaimDialog, _src_app_common_common_error__WEBPACK_IMPORTED_MODULE_8__.ErrorDialog, _src_app_common_common_warning__WEBPACK_IMPORTED_MODULE_9__.WarningDialog, _src_app_common_common_claim_details__WEBPACK_IMPORTED_MODULE_10__.ClaimDetailsDialog, _src_app_org_org_component__WEBPACK_IMPORTED_MODULE_11__.OrgComponent, _src_app_common_common_component__WEBPACK_IMPORTED_MODULE_12__.CommonComponent, _src_app_common_common_pipes__WEBPACK_IMPORTED_MODULE_0__.StartsWithPipe, _src_app_common_common_pipes__WEBPACK_IMPORTED_MODULE_0__.MapToArrayPipe, _src_app_common_common_pipes__WEBPACK_IMPORTED_MODULE_0__.IncludesPipe, _src_app_common_common_pipes__WEBPACK_IMPORTED_MODULE_0__.UptimePipe, _src_app_common_common_pipes__WEBPACK_IMPORTED_MODULE_0__.SplitPipe, _src_app_auto_generated_auto_generated_component__WEBPACK_IMPORTED_MODULE_13__.AutoGeneratedComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_21__.GoogleMapsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientJsonpModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButtonModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__.MatChipsModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_27__.MatInputModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__.MatStepperModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_29__.MatDividerModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_30__.MatCardModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__.MatGridListModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__.MatSlideToggleModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_34__.MatTableModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_35__.MatCheckboxModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__.MatProgressBarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__.MatTooltipModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_39__.MatPaginatorModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_40__.MatDialogModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_41__.MatSidenavModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__.MatIconModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_43__.MatSnackBarModule]
  });
})();

/***/ }),

/***/ 1312:
/*!************************************************************!*\
  !*** ./src/app/auto-generated/auto-generated.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoGeneratedComponent: () => (/* binding */ AutoGeneratedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);

class AutoGeneratedComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function AutoGeneratedComponent_Factory(t) {
    return new (t || AutoGeneratedComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AutoGeneratedComponent,
    selectors: [["app-auto-generated"]],
    decls: 2,
    vars: 0,
    template: function AutoGeneratedComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "auto-generated works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8772:
/*!************************************************!*\
  !*** ./src/app/common/common-claim-details.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClaimDetailsDialog: () => (/* binding */ ClaimDetailsDialog)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 6144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4672);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 2676);





class ClaimDetailsDialog {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.details = this.data;
  }
  ngOnInit() {
    console.log(this.details);
  }
  cancel() {
    this.dialogRef.close();
  }
  static #_ = this.ɵfac = function ClaimDetailsDialog_Factory(t) {
    return new (t || ClaimDetailsDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ClaimDetailsDialog,
    selectors: [["common-claim-details"]],
    decls: 9,
    vars: 3,
    consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", 1, "flex", "row", 2, "justify-content", "space-around"], ["mat-raised-button", "", "color", "accent", "cdkFocusInitial", "", 3, "click"]],
    template: function ClaimDetailsDialog_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Claim Result Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2)(7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClaimDetailsDialog_Template_button_click_7_listener() {
          return ctx.cancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx.details));
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 8420:
/*!****************************************!*\
  !*** ./src/app/common/common-claim.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClaimDialog: () => (/* binding */ ClaimDialog)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 6144);
/* harmony import */ var _common_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-error */ 1060);
/* harmony import */ var _common_claim_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-claim-details */ 8772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1332);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4672);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 3648);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 2307);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 8512);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 7000);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 2328);














function ClaimDialog_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "mat-form-field")(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Claim Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.enter", function ClaimDialog_div_5_Template_input_keydown_enter_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.add());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ClaimDialog_div_5_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r9.inputClaimCodes, $event) || (ctx_r9.inputClaimCodes = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClaimDialog_div_5_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.add());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.inputClaimCodes);
  }
}
function ClaimDialog_div_7_mat_card_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25)(1, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ClaimDialog_div_7_mat_card_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27)(1, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const claimCode_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTooltip", claimCode_r12.reason)("aria-label", claimCode_r12.reason);
  }
}
function ClaimDialog_div_7_mat_card_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27)(1, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ClaimDialog_div_7_mat_card_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30)(1, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ClaimDialog_div_7_mat_card_1_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClaimDialog_div_7_mat_card_1_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);
      const claimCode_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.remove(claimCode_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ClaimDialog_div_7_mat_card_1_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClaimDialog_div_7_mat_card_1_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);
      const claimCode_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r23.edit(claimCode_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
const _c0 = (a0, a1) => ({
  error: a0,
  warning: a1
});
function ClaimDialog_div_7_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 16)(1, "mat-form-field", 17)(2, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ClaimDialog_div_7_mat_card_1_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);
      const claimCode_r12 = restoredCtx.$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](claimCode_r12.code, $event) || (claimCode_r12.code = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ClaimDialog_div_7_mat_card_1_div_4_Template, 3, 0, "div", 20)(5, ClaimDialog_div_7_mat_card_1_div_5_Template, 3, 2, "div", 21)(6, ClaimDialog_div_7_mat_card_1_div_6_Template, 3, 0, "div", 21)(7, ClaimDialog_div_7_mat_card_1_div_7_Template, 3, 0, "div", 22)(8, ClaimDialog_div_7_mat_card_1_button_8_Template, 3, 0, "button", 23)(9, ClaimDialog_div_7_mat_card_1_button_9_Template, 3, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const claimCode_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](9, _c0, !claimCode_r12.valid, claimCode_r12.duplicated));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", claimCode_r12.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", claimCode_r12.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", claimCode_r12.processed && claimCode_r12.success);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", claimCode_r12.processed && !claimCode_r12.success && claimCode_r12.reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !claimCode_r12.processed && !claimCode_r12.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !claimCode_r12.processed && claimCode_r12.duplicated);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !claimCode_r12.processed);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !claimCode_r12.processed);
  }
}
function ClaimDialog_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ClaimDialog_div_7_mat_card_1_Template, 10, 12, "mat-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.claimCodes);
  }
}
function ClaimDialog_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClaimDialog_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r28.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ClaimDialog_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClaimDialog_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r30.confirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Claim");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r3.claimButtonDisabled);
  }
}
function ClaimDialog_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClaimDialog_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r32.reset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r4.isWorking);
  }
}
function ClaimDialog_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClaimDialog_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r34.details());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r5.isWorking);
  }
}
function ClaimDialog_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClaimDialog_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r36.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r6.isWorking);
  }
}
class ClaimDialog {
  constructor(dialogRef, _http, _dialog, data) {
    this.dialogRef = dialogRef;
    this._http = _http;
    this._dialog = _dialog;
    this.data = data;
    this.claimCodes = [];
    this.claimButtonDisabled = true;
    this.inputClaimCodes = "";
    this.body = this.data.body;
    this.isDone = false;
    this.claimResult = {};
    this.isWorking = false;
  }
  add() {
    var regex = /^[0-9a-zA-Z]{5}-?[0-9a-zA-Z]{5}-?[0-9a-zA-Z]{5}$/i;
    this.inputClaimCodes.split(/[\s,; ]+/).forEach(element => {
      var claim = element.replace(";", "").replace(",", "").trim().toUpperCase();
      if (claim.length > 0) {
        var newClaim = {
          code: claim,
          success: null,
          reason: null,
          duplicated: false,
          valid: false,
          processed: false
        };
        if (newClaim.code.match(regex)) {
          newClaim.valid = true;
        }
        this.claimCodes.forEach(element => {
          if (element.code == newClaim.code) {
            element.duplicated = true;
            newClaim.duplicated = true;
          }
        });
        this.claimCodes.push(newClaim);
      }
    });
    this.check_issues();
    this.inputClaimCodes = "";
  }
  edit(claimCode) {
    this.inputClaimCodes = claimCode.code;
    var index = this.claimCodes.indexOf(claimCode);
    this.claimCodes.splice(index, 1);
  }
  check_issues() {
    var issues = {
      invalid: [],
      duplicated: []
    };
    this.claimCodes.forEach(element => {
      if (element.valid == false) {
        issues.invalid.push(element.code);
      }
      if (element.duplicated == true) {
        issues.duplicated.push(element.code);
      }
    });
    if (this.claimCodes.length > 0 && issues.duplicated.length == 0 && issues.invalid.length == 0) {
      this.claimButtonDisabled = false;
    } else {
      this.claimButtonDisabled = true;
    }
  }
  remove(claimCode) {
    var duplicated_codes = [];
    var index = -1;
    // remove the claim code
    index = this.claimCodes.indexOf(claimCode);
    if (index >= 0) {
      this.claimCodes.splice(index, 1);
    }
    // if the removed claim code has the duplicated flag
    if (claimCode.duplicated) {
      // find other same codes
      this.claimCodes.forEach(element => {
        if (element.code == claimCode.code) {
          duplicated_codes.push(element);
        }
      });
      // if only one other same code, remove the duplicated flash
      if (duplicated_codes.length == 1) {
        index = this.claimCodes.indexOf(duplicated_codes[0]);
        this.claimCodes[index].duplicated = false;
      }
    }
    // check issues for "claim" button
    this.check_issues();
  }
  // CLAIM NEW CODES
  confirm() {
    this.isWorking = true;
    this.isDone = true;
    // Add claim codes to request body
    this.body.claim_codes = [];
    this.claimCodes.forEach(element => {
      this.body.claim_codes.push(element.code);
    });
    // Send request to server
    this._http.post('/api/devices/claim/', this.body).subscribe({
      next: data => {
        // retrieve result data
        this.claimResult = data.results;
        this.claimCodes.forEach(element => {
          element.processed = true;
          var index = -1;
          // if code added to account
          if (this.claimResult["added"].indexOf(element.code) >= 0) {
            element.success = true;
            // if error when adding the code
          } else if (this.claimResult["error"].indexOf(element.code) >= 0) {
            index = this.claimResult["error"].indexOf(element.code);
            element.success = false;
            element.reason = this.claimResult["reason"][index];
            // if code already claimed somewhere
          } else if (this.claimResult["duplicated"].indexOf(element.code) >= 0) {
            element.success = false;
            element.reason = "Already Claimed";
          }
        });
        this.isWorking = false;
      },
      error: error => {
        var message = "Unable to create claim the devices... ";
        if ("error" in error) {
          message += error["error"]["message"];
        }
        this.openError(message);
        this.isWorking = false;
      }
    });
  }
  // EXIT
  cancel() {
    this.dialogRef.close();
  }
  // DIALOG BOXES
  // Restart Claim Process
  reset() {
    const dialogRef = this._dialog.open(ClaimDialog, {
      data: {
        body: this.body
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.dialogRef.close();
    });
  }
  // DETAILS
  details() {
    console.log(this.claimResult);
    const dialogRef = this._dialog.open(_common_claim_details__WEBPACK_IMPORTED_MODULE_1__.ClaimDetailsDialog, {
      data: this.claimResult
    });
  }
  // ERROR
  openError(message) {
    const dialogRef = this._dialog.open(_common_error__WEBPACK_IMPORTED_MODULE_0__.ErrorDialog, {
      data: message
    });
  }
  static #_ = this.ɵfac = function ClaimDialog_Factory(t) {
    return new (t || ClaimDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ClaimDialog,
    selectors: [["common-claim"]],
    decls: 14,
    vars: 7,
    consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", 1, "flex", "column"], [2, "margin", "0 1em 1em", "color", "gray", "font-size", "small"], ["class", "flex row", "style", "padding: 0 2em", 4, "ngIf"], [2, "max-width", "80em", "min-width", "20em"], ["fxFlex", "1 1 0", "style", "width: 100%; flex-flow: row wrap;", 4, "ngIf"], ["mat-dialog-actions", "", 1, "flex", "row", 2, "justify-content", "space-around"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", "cdkFocusInitial", "", 3, "disabled", "click", 4, "ngIf"], ["mat-button", "", 3, "disabled", "click", 4, "ngIf"], [1, "flex", "row", 2, "padding", "0 2em"], ["matInput", "", "placeholder", "ABCDE-12345-F6G7H", "cdkFocusInitial", "", 3, "ngModel", "keydown.enter", "ngModelChange"], ["mat-icon-button", "", 1, "add-icon", 2, "height", "100%", 3, "click"], ["matTooltip", "Add Claim Codes", "aria-label", "Add Claim Codes"], ["fxFlex", "1 1 0", 2, "width", "100%", "flex-flow", "row wrap"], ["class", "flex row", "style", "background-color: #eeeeee; margin:5px; border-radius: 1.7em; padding: 0; height: 4em;", 4, "ngFor", "ngForOf"], [1, "flex", "row", 2, "background-color", "#eeeeee", "margin", "5px", "border-radius", "1.7em", "padding", "0", "height", "4em"], [1, "claim-code", 2, "margin", "0 1em", "width", "11em", 3, "ngClass"], ["matInput", "", 3, "ngModel", "readonly", "ngModelChange"], [1, "flex", "row", 2, "padding-bottom", "0.5em", "margin-right", "1em"], ["style", "height: 100%;", "class", "success icon-text", 4, "ngIf"], ["style", "height: 100%;", "class", "error icon-text", 4, "ngIf"], ["style", "height: 100%;", "class", "warning icon-text", 4, "ngIf"], ["mat-icon-button", "", "style", "height: 100%;", "class", "delete-icon", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "style", "height: 100%;", "class", "add-icon", 3, "click", 4, "ngIf"], [1, "success", "icon-text", 2, "height", "100%"], ["matTooltip", "Claim Code Added", "aria-label", "Claim Code Added"], [1, "error", "icon-text", 2, "height", "100%"], [3, "matTooltip", "aria-label"], ["matTooltip", "Invalid Format", "aria-label", "Invalid Format"], [1, "warning", "icon-text", 2, "height", "100%"], ["matTooltip", "Duplicated Claim Code", "aria-label", "Duplicated Claim Code"], ["mat-icon-button", "", 1, "delete-icon", 2, "height", "100%", 3, "click"], ["matTooltip", "Delete Claim Code", "aria-label", "Delete Claim Code"], ["matTooltip", "Edit Claim Code", "aria-label", "Edit Claim Code"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "accent", "cdkFocusInitial", "", 3, "disabled", "click"], ["mat-button", "", 3, "disabled", "click"]],
    template: function ClaimDialog_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Claim new devices");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "HINT: you can paste mutliple claim codes separated by a SPACE, a COMMA or a SEMICOLUMN");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ClaimDialog_div_5_Template, 8, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ClaimDialog_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ClaimDialog_button_9_Template, 2, 0, "button", 7)(10, ClaimDialog_button_10_Template, 2, 1, "button", 8)(11, ClaimDialog_button_11_Template, 2, 1, "button", 9)(12, ClaimDialog_button_12_Template, 2, 1, "button", 8)(13, ClaimDialog_button_13_Template, 2, 1, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.claimCodes.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isDone);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon],
    styles: ["\n\n    \n    input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n    }\n    \n\n    \n    .icon-text[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: center;\n        cursor: default;\n    }\n    \n    input[type=number][_ngcontent-%COMP%] {\n        -moz-appearance: textfield;\n    }\n    \n    .delete-icon[_ngcontent-%COMP%] {\n        color: #333;\n        transition: color 250ms ease-in-out;\n    }\n    \n    .delete-icon[_ngcontent-%COMP%]:hover {\n        color: red;\n    }\n    \n    .add-icon[_ngcontent-%COMP%] {\n        color: #333;\n        transition: color 250ms ease-in-out;\n    }\n    \n    .add-icon[_ngcontent-%COMP%]:hover {\n        color: green;\n    }\n    \n    .claim-code-input[_ngcontent-%COMP%] {\n        background-color: white;\n        transition: color 250ms ease-in-out;\n    }\n    \n    .claim-code[_ngcontent-%COMP%] {\n        color: black;\n        transition: color 250ms ease-in-out;\n    }\n    \n    .success[_ngcontent-%COMP%] {\n        color: green;\n    }\n    \n    .warning[_ngcontent-%COMP%] {\n        color: coral;\n    }\n    \n    .error[_ngcontent-%COMP%] {\n        color: red;\n    }"]
  });
}

/***/ }),

/***/ 1060:
/*!****************************************!*\
  !*** ./src/app/common/common-error.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorDialog: () => (/* binding */ ErrorDialog)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 6144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4672);




class ErrorDialog {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  ok() {
    this.dialogRef.close();
  }
  static #_ = this.ɵfac = function ErrorDialog_Factory(t) {
    return new (t || ErrorDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ErrorDialog,
    selectors: [["common-error"]],
    decls: 8,
    vars: 1,
    consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", 1, "flex", "row", 2, "justify-content", "space-around"], ["mat-raised-button", "", "color", "accent", 3, "click"]],
    template: function ErrorDialog_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Oops...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorDialog_Template_button_click_6_listener() {
          return ctx.ok();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data, "");
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 7140:
/*!****************************************!*\
  !*** ./src/app/common/common-pipes.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IncludesPipe: () => (/* binding */ IncludesPipe),
/* harmony export */   MapToArrayPipe: () => (/* binding */ MapToArrayPipe),
/* harmony export */   SplitPipe: () => (/* binding */ SplitPipe),
/* harmony export */   StartsWithPipe: () => (/* binding */ StartsWithPipe),
/* harmony export */   UptimePipe: () => (/* binding */ UptimePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);

class StartsWithPipe {
  transform(fullText, textMatch) {
    return fullText.startsWith(textMatch);
  }
  static #_ = this.ɵfac = function StartsWithPipe_Factory(t) {
    return new (t || StartsWithPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "startsWith",
    type: StartsWithPipe,
    pure: true
  });
}
class MapToArrayPipe {
  transform(value, args) {
    let arr = [];
    for (let key in value) {
      arr.push({
        key: key,
        value: value[key]
      });
    }
    return arr;
  }
  static #_ = this.ɵfac = function MapToArrayPipe_Factory(t) {
    return new (t || MapToArrayPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "mapToArray",
    type: MapToArrayPipe,
    pure: true
  });
}
class IncludesPipe {
  transform(fullText, textMatch) {
    return fullText.includes(textMatch);
  }
  static #_ = this.ɵfac = function IncludesPipe_Factory(t) {
    return new (t || IncludesPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "includes",
    type: IncludesPipe,
    pure: true
  });
}
class UptimePipe {
  transform(value) {
    let hours_left = value % 86400;
    let minutes_left = hours_left % 3600;
    let seconds_left = minutes_left % 60;
    const days = (value - hours_left) / 86400;
    const hours = (hours_left - minutes_left) / 3600;
    const minutes = (minutes_left - seconds_left) / 60;
    return days + "d, " + hours + "h, " + minutes + "m";
  }
  static #_ = this.ɵfac = function UptimePipe_Factory(t) {
    return new (t || UptimePipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "uptime",
    type: UptimePipe,
    pure: true
  });
}
class SplitPipe {
  transform(value, split_entry, entry) {
    return value.split(split_entry)[entry];
  }
  static #_ = this.ɵfac = function SplitPipe_Factory(t) {
    return new (t || SplitPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "split",
    type: SplitPipe,
    pure: true
  });
}

/***/ }),

/***/ 8432:
/*!******************************************!*\
  !*** ./src/app/common/common-unclaim.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnclaimDialog: () => (/* binding */ UnclaimDialog)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 6144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4672);




class UnclaimDialog {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  confirm(device_mac) {
    this.dialogRef.close(device_mac);
  }
  cancel() {
    this.dialogRef.close();
  }
  static #_ = this.ɵfac = function UnclaimDialog_Factory(t) {
    return new (t || UnclaimDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: UnclaimDialog,
    selectors: [["common-unclaim"]],
    decls: 10,
    vars: 1,
    consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", 1, "flex", "row", 2, "justify-content", "space-around"], ["mat-raised-button", "", 3, "click"], ["mat-button", "", 2, "color", "red !important", 3, "click"]],
    template: function UnclaimDialog_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete Device");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnclaimDialog_Template_button_click_6_listener() {
          return ctx.cancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnclaimDialog_Template_button_click_8_listener() {
          return ctx.confirm(ctx.data.mac);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" This will delete the Device ", ctx.data.mac, ". Do you confirm?");
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 5456:
/*!******************************************!*\
  !*** ./src/app/common/common-warning.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WarningDialog: () => (/* binding */ WarningDialog)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 6144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4672);





function WarningDialog_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r2.reason);
  }
}
function WarningDialog_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Warning:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Changes may have impact on existing users, especially for users using PSK without VLAN. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class WarningDialog {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  ok() {
    this.dialogRef.close(true);
  }
  cancel() {
    this.dialogRef.close();
  }
  static #_ = this.ɵfac = function WarningDialog_Factory(t) {
    return new (t || WarningDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: WarningDialog,
    selectors: [["common-warning"]],
    decls: 16,
    vars: 3,
    consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [2, "margin", "2em 0em 0", "font-weight", "bold"], [2, "list-style", "none", "padding", "0"], [4, "ngFor", "ngForOf"], ["class", "flex column", "style", "color: red;justify-content: center;margin: 2em 0 0;", 4, "ngIf"], ["mat-dialog-actions", "", 1, "flex", "row", 2, "justify-content", "space-around"], ["mat-raised-button", "", 3, "click"], ["mat-button", "", "color", "accent", 3, "click"], [1, "flex", "column", 2, "color", "red", "justify-content", "center", "margin", "2em 0 0"], [2, "font-weight", "bold", "margin", "auto"], [2, "margin", "auto"]],
    template: function WarningDialog_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Be careful");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div")(6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Details:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WarningDialog_li_9_Template, 2, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WarningDialog_div_10_Template, 5, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6)(12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WarningDialog_Template_button_click_12_listener() {
          return ctx.cancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "I Don't Care");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WarningDialog_Template_button_click_14_listener() {
          return ctx.ok();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Fix It");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.vlan_check);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.bigWarning == true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 3185:
/*!********************************************!*\
  !*** ./src/app/common/common.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonComponent: () => (/* binding */ CommonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);

class CommonComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function CommonComponent_Factory(t) {
    return new (t || CommonComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CommonComponent,
    selectors: [["app-common"]],
    decls: 2,
    vars: 0,
    template: function CommonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "common works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8436:
/*!**************************************!*\
  !*** ./src/app/connector.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectorService: () => (/* binding */ ConnectorService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4844);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);


class ConnectorService {
  constructor() {
    this.headersSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    this.cookiesSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    this.hostSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject("");
    this.selfSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    this.orgIdSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject("");
    this.siteIdSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject("");
    this.orgModeSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.googleApiKey = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject("");
    this.headers = this.headersSource.asObservable();
    this.host = this.hostSource.asObservable();
    this.cookies = this.cookiesSource.asObservable();
    this.self = this.selfSource.asObservable();
    this.org_id = this.orgIdSource.asObservable();
    this.site_id = this.siteIdSource.asObservable();
    this.orgMode = this.orgModeSource.asObservable();
    this.google_api_key = this.googleApiKey.asObservable();
  }
  headersSet(data) {
    this.headersSource.next(data);
  }
  cookiesSet(data) {
    this.cookiesSource.next(data);
  }
  hostSet(data) {
    this.hostSource.next(data);
  }
  selfSet(data) {
    this.selfSource.next(data);
  }
  orgIdSet(data) {
    this.orgIdSource.next(data);
  }
  siteIdSet(data) {
    this.siteIdSource.next(data);
  }
  orgModeSet(data) {
    this.orgModeSource.next(data);
  }
  googleApiKeySet(data) {
    this.googleApiKey.next(data);
  }
  static #_ = this.ɵfac = function ConnectorService_Factory(t) {
    return new (t || ConnectorService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ConnectorService,
    factory: ConnectorService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3436:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 4872);
/* harmony import */ var _common_common_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common-error */ 1060);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 1200);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 1332);
/* harmony import */ var _connector_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../connector.service */ 8436);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 6144);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 4648);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 2544);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 4672);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 3648);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 7872);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 2307);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ 8512);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4204);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/slide-toggle */ 3424);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ 8539);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-bar */ 5220);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tooltip */ 7000);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ 8200);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 2328);
/* harmony import */ var _src_app_common_common_pipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/common/common-pipes */ 7140);





























function DashboardComponent_th_7_mat_progress_bar_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 27);
  }
}
function DashboardComponent_th_7_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 28);
  }
}
function DashboardComponent_th_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 18)(1, "div", 19)(2, "mat-form-field", 20)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function DashboardComponent_th_7_Template_input_keyup_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.applyFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_th_7_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.getDevices());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, DashboardComponent_th_7_mat_progress_bar_10_Template, 1, 0, "mat-progress-bar", 25)(11, DashboardComponent_th_7_div_11_Template, 1, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r0.topbar_loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.topbar_loading == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.topbar_loading == false);
  }
}
const _c0 = a0 => ({
  "color": a0
});
function DashboardComponent_td_8_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " check_box_outline_blank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, element_r13.status === "connected" ? "#6f9d2b" : "lightgray"));
  }
}
function DashboardComponent_td_8_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " filter_none");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, element_r13.status === "connected" ? "#6f9d2b" : "lightgray"));
  }
}
function DashboardComponent_td_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", element_r13.name, " ");
  }
}
function DashboardComponent_td_8_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", element_r13.mac, " ");
  }
}
const _c1 = a0 => ({
  selected: a0
});
function DashboardComponent_td_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 29)(1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_td_8_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23);
      const element_r13 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r22.editDevice(element_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DashboardComponent_td_8_mat_icon_3_Template, 2, 3, "mat-icon", 32)(4, DashboardComponent_td_8_mat_icon_4_Template, 2, 3, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, DashboardComponent_td_8_div_6_Template, 2, 1, "div", 34)(7, DashboardComponent_td_8_div_7_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c1, ctx_r1.editingDevice && element_r13.mac === ctx_r1.editingDevice.mac));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", element_r13.members.length <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", element_r13.members.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", element_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !element_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("MAC: ", element_r13.mac, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Model: ", element_r13.model, "");
  }
}
function DashboardComponent_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 37);
  }
}
function DashboardComponent_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 38);
  }
}
function DashboardComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please select a device... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-spinner", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_18_div_8_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " (LACP)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c2 = a0 => ({
  "selected": a0
});
function DashboardComponent_div_18_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 53)(1, "a", 54)(2, "div", 55)(3, "mat-checkbox", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function DashboardComponent_div_18_div_8_div_1_Template_mat_checkbox_change_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35);
      const switchport_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r33.selectPort(switchport_r30));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DashboardComponent_div_18_div_8_div_1_div_5_Template, 2, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const switchport_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c2, ctx_r31.canbeChecked(switchport_r30)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r31.canbeChecked(switchport_r30))("disabled", ctx_r31.readonlyPorts.includes(switchport_r30));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", switchport_r30, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r31.lacpPorts.hasOwnProperty(switchport_r30));
  }
}
function DashboardComponent_div_18_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DashboardComponent_div_18_div_8_div_1_Template, 6, 7, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const switchport_r30 = ctx.$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r26.readonlyPorts.includes(switchport_r30));
  }
}
function DashboardComponent_div_18_div_11_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "mat-icon", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const member_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("matTooltip", "", member_r37.cpu, "%");
  }
}
function DashboardComponent_div_18_div_11_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "mat-icon", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const member_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("matTooltip", "", member_r37.cpu, "%");
  }
}
function DashboardComponent_div_18_div_11_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const member_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("matTooltip", "", member_r37.cpu, "%");
  }
}
function DashboardComponent_div_18_div_11_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "mat-icon", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const member_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("matTooltip", "", member_r37.memory, "%");
  }
}
function DashboardComponent_div_18_div_11_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "mat-icon", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const member_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("matTooltip", "", member_r37.memory, "%");
  }
}
function DashboardComponent_div_18_div_11_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const member_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("matTooltip", "", member_r37.memory, "%");
  }
}
function DashboardComponent_div_18_div_11_div_24_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "mat-icon", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const member_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("matTooltip", "", member_r37.poe.power_draw, " W / ", member_r37.poe.max_power, " W");
  }
}
function DashboardComponent_div_18_div_11_div_24_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "mat-icon", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const member_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", member_r37.poe.power_draw / member_r37.poe.max_power);
  }
}
function DashboardComponent_div_18_div_11_div_24_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const member_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", member_r37.poe.power_draw / member_r37.poe.max_power);
  }
}
function DashboardComponent_div_18_div_11_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 62)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "POE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DashboardComponent_div_18_div_11_div_24_div_3_Template, 3, 2, "div", 34)(4, DashboardComponent_div_18_div_11_div_24_div_4_Template, 3, 1, "div", 34)(5, DashboardComponent_div_18_div_11_div_24_div_5_Template, 3, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const member_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", member_r37.poe.power_draw / member_r37.poe.max_power < 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", member_r37.poe.power_draw / member_r37.poe.max_power >= 50 && member_r37.poe.power_draw / member_r37.poe.max_power < 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", member_r37.poe.power_draw / member_r37.poe.max_power >= 80);
  }
}
function DashboardComponent_div_18_div_11_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 74)(1, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "PIC0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
const _c3 = (a0, a1, a2) => ({
  "top": a0,
  "bottom": a1,
  "selected": a2
});
const _c4 = (a0, a1) => ({
  "port-up": a0,
  "disabled": a1
});
function DashboardComponent_div_18_div_11_div_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 78)(1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "split");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_div_18_div_11_div_28_div_1_Template_div_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r70);
      const port_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r68.selectPort(port_r65));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const index_r66 = ctx_r71.index;
    const port_r65 = ctx_r71.$implicit;
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](8, _c3, index_r66 % 2 == 0, index_r66 % 2 == 1, ctx_r67.editingPortNames.includes(port_r65)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](3, 4, port_r65, "/", 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", ctx_r67.port_tooltip(port_r65))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](12, _c4, ctx_r67.display_status(port_r65), ctx_r67.readonlyPorts.includes(port_r65)));
  }
}
function DashboardComponent_div_18_div_11_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DashboardComponent_div_18_div_11_div_28_div_1_Template, 5, 15, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "includes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const port_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, port_r65, "/0/"));
  }
}
function DashboardComponent_div_18_div_11_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 74)(1, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "PIC1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_div_18_div_11_div_30_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 78)(1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "split");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_div_18_div_11_div_30_div_1_Template_div_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r77);
      const port_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r75.selectPort(port_r72));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const index_r73 = ctx_r78.index;
    const port_r72 = ctx_r78.$implicit;
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](8, _c3, index_r73 % 2 == 0, index_r73 % 2 == 1, ctx_r74.editingPortNames.includes(port_r72)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](3, 4, port_r72, "/", 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", ctx_r74.port_tooltip(port_r72))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](12, _c4, ctx_r74.display_status(port_r72), ctx_r74.readonlyPorts.includes(port_r72)));
  }
}
function DashboardComponent_div_18_div_11_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DashboardComponent_div_18_div_11_div_30_div_1_Template, 5, 15, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "includes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const port_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, port_r72, "/1/"));
  }
}
function DashboardComponent_div_18_div_11_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 74)(1, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "PIC2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_div_18_div_11_div_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 78)(1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "split");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_div_18_div_11_div_32_div_1_Template_div_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r84);
      const port_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r82.selectPort(port_r79));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const index_r80 = ctx_r85.index;
    const port_r79 = ctx_r85.$implicit;
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](8, _c3, index_r80 % 2 == 0, index_r80 % 2 == 1, ctx_r81.editingPortNames.includes(port_r79)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](3, 4, port_r79, "/", 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", ctx_r81.port_tooltip(port_r79))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](12, _c4, ctx_r81.display_status(port_r79), ctx_r81.readonlyPorts.includes(port_r79)));
  }
}
function DashboardComponent_div_18_div_11_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DashboardComponent_div_18_div_11_div_32_div_1_Template, 5, 15, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "includes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const port_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, port_r79, "/2/"));
  }
}
function DashboardComponent_div_18_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 59)(1, "div", 60)(2, "div", 61)(3, "div", 62)(4, "div", 63)(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "JUNIPER");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 62)(12, "div", 62)(13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "CPU");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, DashboardComponent_div_18_div_11_div_15_Template, 3, 1, "div", 34)(16, DashboardComponent_div_18_div_11_div_16_Template, 3, 1, "div", 34)(17, DashboardComponent_div_18_div_11_div_17_Template, 3, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 62)(19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "MEMORY");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, DashboardComponent_div_18_div_11_div_21_Template, 3, 1, "div", 34)(22, DashboardComponent_div_18_div_11_div_22_Template, 3, 1, "div", 34)(23, DashboardComponent_div_18_div_11_div_23_Template, 3, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, DashboardComponent_div_18_div_11_div_24_Template, 6, 3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 67)(26, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, DashboardComponent_div_18_div_11_div_27_Template, 3, 0, "div", 69)(28, DashboardComponent_div_18_div_11_div_28_Template, 3, 4, "div", 70)(29, DashboardComponent_div_18_div_11_div_29_Template, 3, 0, "div", 69)(30, DashboardComponent_div_18_div_11_div_30_Template, 3, 4, "div", 70)(31, DashboardComponent_div_18_div_11_div_31_Template, 3, 0, "div", 69)(32, DashboardComponent_div_18_div_11_div_32_Template, 3, 4, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const member_r37 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](member_r37.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("ID ", member_r37.fpc_idx, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", member_r37.cpu < 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", member_r37.cpu >= 60 && member_r37.cpu < 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", member_r37.cpu >= 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", member_r37.memory < 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", member_r37.memory >= 60 && member_r37.memory < 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", member_r37.memory >= 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", member_r37.poe.max_power);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r27.display_pic(member_r37, 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", member_r37.ports);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r27.display_pic(member_r37, 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", member_r37.ports);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r27.display_pic(member_r37, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", member_r37.ports);
  }
}
function DashboardComponent_div_18_div_13_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r86.editingDeviceSettings.info.status);
  }
}
function DashboardComponent_div_18_div_13_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r87.editingDeviceSettings.info.status);
  }
}
function DashboardComponent_div_18_div_13_tr_100_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const member_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", member_r89.poe.power_draw, " W");
  }
}
function DashboardComponent_div_18_div_13_tr_100_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const member_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", member_r89.poe.max_power, " W");
  }
}
function DashboardComponent_div_18_div_13_tr_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, DashboardComponent_div_18_div_13_tr_100_div_14_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, DashboardComponent_div_18_div_13_tr_100_div_16_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const member_r89 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](member_r89.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](member_r89.serial);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](member_r89.mac);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](member_r89.version);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](member_r89.fpc_idx);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](member_r89.vc_role);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", member_r89.poe);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", member_r89.poe);
  }
}
function DashboardComponent_div_18_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 81)(1, "div", 62)(2, "mat-card", 82)(3, "mat-card-content")(4, "mat-card-title", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Switch Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "table", 84)(7, "tr")(8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "tr")(13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, DashboardComponent_div_18_div_13_div_16_Template, 2, 1, "div", 85)(17, DashboardComponent_div_18_div_13_div_17_Template, 2, 1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "tr")(19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Config Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "tr")(24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Uptime");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "uptime");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "tr")(30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Last Seen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](34, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-card", 87)(36, "mat-card-content")(37, "mat-card-title", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Switch IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "table", 84)(40, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "VLAN");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "IP Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Netmask");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Gateway");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "tr")(53, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "In Band");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "tr")(66, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Out Band");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "mat-card", 82)(79, "mat-card-content")(80, "mat-card-title", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Switch Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "table", 84)(83, "tr")(84, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "MODEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "SERIAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "MAC ADDRESS");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "VERSION");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "VC MEMBER #");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "VC MEMBER ROLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "POE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "POE BUDGET");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](100, DashboardComponent_div_18_div_13_tr_100_Template, 17, 8, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r28.editingDeviceSettings.info.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r28.editingDeviceSettings.info.status == "connected");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r28.editingDeviceSettings.info.status != "connected");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r28.editingDeviceSettings.info.config_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](28, 17, ctx_r28.editingDeviceSettings.info.uptime));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](34, 19, ctx_r28.editingDeviceSettings.info.last_seen * 1000, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r28.editingDeviceSettings.device.ip_config.network);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r28.editingDeviceSettings.device.ip_config.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r28.editingDeviceSettings.device.ip_config.ip);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r28.editingDeviceSettings.device.ip_config.netmask);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r28.editingDeviceSettings.device.ip_config.gateway);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r28.editingDeviceSettings.device.oob_ip_config.network);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r28.editingDeviceSettings.device.oob_ip_config.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r28.editingDeviceSettings.device.oob_ip_config.ip);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r28.editingDeviceSettings.device.oob_ip_config.netmask);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r28.editingDeviceSettings.device.oob_ip_config.gateway);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r28.editingDeviceSettings.members);
  }
}
function DashboardComponent_div_18_div_14_tr_18_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const port_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", port_r113.port_id, " (LACP) ");
  }
}
function DashboardComponent_div_18_div_14_tr_18_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DashboardComponent_div_18_div_14_tr_18_div_2_div_1_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const port_r113 = ctx.$implicit;
    const ae_uuid_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r107.lacpPorts.hasOwnProperty(port_r113.port_id) && ctx_r107.lacpPorts[port_r113.port_id] == ae_uuid_r106);
  }
}
function DashboardComponent_div_18_div_14_tr_18_div_4_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "mat-icon", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "arrow_circle_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_div_18_div_14_tr_18_div_4_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "mat-icon", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "arrow_circle_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_div_18_div_14_tr_18_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DashboardComponent_div_18_div_14_tr_18_div_4_div_1_div_1_Template, 3, 0, "div", 34)(2, DashboardComponent_div_18_div_14_tr_18_div_4_div_1_div_2_Template, 3, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const port_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", port_r117.up);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !port_r117.up);
  }
}
function DashboardComponent_div_18_div_14_tr_18_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DashboardComponent_div_18_div_14_tr_18_div_4_div_1_Template, 3, 2, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const port_r117 = ctx.$implicit;
    const ae_uuid_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r108.lacpPorts.hasOwnProperty(port_r117.port_id) && ctx_r108.lacpPorts[port_r117.port_id] == ae_uuid_r106);
  }
}
function DashboardComponent_div_18_div_14_tr_18_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const port_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", port_r123.media_type, " ");
  }
}
function DashboardComponent_div_18_div_14_tr_18_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DashboardComponent_div_18_div_14_tr_18_div_6_div_1_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const port_r123 = ctx.$implicit;
    const ae_uuid_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r109.lacpPorts.hasOwnProperty(port_r123.port_id) && ctx_r109.lacpPorts[port_r123.port_id] == ae_uuid_r106);
  }
}
function DashboardComponent_div_18_div_14_tr_18_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const port_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", port_r127.neighbor_system_name, " ");
  }
}
function DashboardComponent_div_18_div_14_tr_18_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DashboardComponent_div_18_div_14_tr_18_div_8_div_1_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const port_r127 = ctx.$implicit;
    const ae_uuid_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r110.lacpPorts.hasOwnProperty(port_r127.port_id) && ctx_r110.lacpPorts[port_r127.port_id] == ae_uuid_r106);
  }
}
function DashboardComponent_div_18_div_14_tr_18_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const port_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", port_r131.neighbor_mac, " ");
  }
}
function DashboardComponent_div_18_div_14_tr_18_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DashboardComponent_div_18_div_14_tr_18_div_10_div_1_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const port_r131 = ctx.$implicit;
    const ae_uuid_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r111.lacpPorts.hasOwnProperty(port_r131.port_id) && ctx_r111.lacpPorts[port_r131.port_id] == ae_uuid_r106);
  }
}
function DashboardComponent_div_18_div_14_tr_18_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const port_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", port_r135.neighbor_port_desc, " ");
  }
}
function DashboardComponent_div_18_div_14_tr_18_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DashboardComponent_div_18_div_14_tr_18_div_12_div_1_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const port_r135 = ctx.$implicit;
    const ae_uuid_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r112.lacpPorts.hasOwnProperty(port_r135.port_id) && ctx_r112.lacpPorts[port_r135.port_id] == ae_uuid_r106);
  }
}
function DashboardComponent_div_18_div_14_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DashboardComponent_div_18_div_14_tr_18_div_2_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, DashboardComponent_div_18_div_14_tr_18_div_4_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, DashboardComponent_div_18_div_14_tr_18_div_6_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, DashboardComponent_div_18_div_14_tr_18_div_8_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, DashboardComponent_div_18_div_14_tr_18_div_10_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, DashboardComponent_div_18_div_14_tr_18_div_12_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r95.selectedPortsStats);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r95.selectedPortsStats);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r95.selectedPortsStats);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r95.selectedPortsStats);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r95.selectedPortsStats);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r95.selectedPortsStats);
  }
}
function DashboardComponent_div_18_div_14_tr_19_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const port_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](port_r139.port_id);
  }
}
function DashboardComponent_div_18_div_14_tr_19_td_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "mat-icon", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "arrow_circle_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_div_18_div_14_tr_19_td_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "mat-icon", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "arrow_circle_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_div_18_div_14_tr_19_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DashboardComponent_div_18_div_14_tr_19_td_2_div_1_Template, 3, 0, "div", 34)(2, DashboardComponent_div_18_div_14_tr_19_td_2_div_2_Template, 3, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const port_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", port_r139.up);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !port_r139.up);
  }
}
function DashboardComponent_div_18_div_14_tr_19_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const port_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](port_r139.media_type);
  }
}
function DashboardComponent_div_18_div_14_tr_19_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const port_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](port_r139.neighbor_system_name);
  }
}
function DashboardComponent_div_18_div_14_tr_19_td_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const port_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](port_r139.neighbor_mac);
  }
}
function DashboardComponent_div_18_div_14_tr_19_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const port_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](port_r139.neighbor_port_desc);
  }
}
function DashboardComponent_div_18_div_14_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DashboardComponent_div_18_div_14_tr_19_td_1_Template, 3, 1, "td", 34)(2, DashboardComponent_div_18_div_14_tr_19_td_2_Template, 3, 2, "td", 34)(3, DashboardComponent_div_18_div_14_tr_19_td_3_Template, 3, 1, "td", 34)(4, DashboardComponent_div_18_div_14_tr_19_td_4_Template, 3, 1, "td", 34)(5, DashboardComponent_div_18_div_14_tr_19_td_5_Template, 3, 1, "td", 34)(6, DashboardComponent_div_18_div_14_tr_19_td_6_Template, 3, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const port_r139 = ctx.$implicit;
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r96.lacpPorts.hasOwnProperty(port_r139.port_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r96.lacpPorts.hasOwnProperty(port_r139.port_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r96.lacpPorts.hasOwnProperty(port_r139.port_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r96.lacpPorts.hasOwnProperty(port_r139.port_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r96.lacpPorts.hasOwnProperty(port_r139.port_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r96.lacpPorts.hasOwnProperty(port_r139.port_id));
  }
}
function DashboardComponent_div_18_div_14_span_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Enabled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_18_div_14_span_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Disabled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_18_div_14_span_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Enabled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_18_div_14_span_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Disabled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_18_div_14_div_55_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vlan_r155 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", vlan_r155.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", vlan_r155.key, " (", vlan_r155.value.vlan_id, ") ");
  }
}
function DashboardComponent_div_18_div_14_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "mat-form-field", 99)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "VLAN");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 126)(5, "mat-option", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "default (1)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, DashboardComponent_div_18_div_14_div_55_mat_option_7_Template, 2, 3, "mat-option", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "mapToArray");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 1, ctx_r101.editingDeviceSettings.networks));
  }
}
function DashboardComponent_div_18_div_14_div_56_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vlan_r158 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", vlan_r158.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", vlan_r158.key, " (", vlan_r158.value.vlan_id, ") ");
  }
}
function DashboardComponent_div_18_div_14_div_56_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vlan_r159 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", vlan_r159.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", vlan_r159.key, " (", vlan_r159.value.vlan_id, ") ");
  }
}
function DashboardComponent_div_18_div_14_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 130)(1, "mat-form-field", 99)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Port VLAN (Untagged/Native VLAN)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 126)(5, "mat-option", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "default (1)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, DashboardComponent_div_18_div_14_div_56_mat_option_7_Template, 2, 3, "mat-option", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "mapToArray");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 131)(10, "mat-checkbox", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Allow all VLANs");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-form-field", 133)(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Allowed VLANs");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-select", 134)(16, "mat-option", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "default (1)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, DashboardComponent_div_18_div_14_div_56_mat_option_18_Template, 2, 3, "mat-option", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "mapToArray");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 3, ctx_r102.editingDeviceSettings.networks));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r102.frmPort.value.all_networks);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 5, ctx_r102.editingDeviceSettings.networks));
  }
}
function DashboardComponent_div_18_div_14_span_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Enabled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_18_div_14_span_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Disabled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_18_div_14_div_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r161 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 135)(1, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_div_18_div_14_div_95_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r161);
      const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r160.discardPorts());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_div_18_div_14_div_95_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r161);
      const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r162.savePorts());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r105.frmPort.invalid);
  }
}
function DashboardComponent_div_18_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "mat-card", 82)(2, "mat-card-content")(3, "div", 90)(4, "table", 91)(5, "tr")(6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "LLDP Neighbor System Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "LLDP Neighbor MAC");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "LLDP Neighbor Port Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, DashboardComponent_div_18_div_14_tr_18_Template, 13, 6, "tr", 46)(19, DashboardComponent_div_18_div_14_tr_19_Template, 7, 6, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-card", 82)(21, "mat-card-content")(22, "mat-card-title", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Selected Ports Configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "form", 92)(25, "div", 93)(26, "div", 94)(27, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "PORT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 62)(30, "div", 95)(31, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Port Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-slide-toggle", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, DashboardComponent_div_18_div_14_span_34_Template, 2, 0, "span", 34)(35, DashboardComponent_div_18_div_14_span_35_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 95)(37, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "PoE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "mat-slide-toggle", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, DashboardComponent_div_18_div_14_span_40_Template, 2, 0, "span", 34)(41, DashboardComponent_div_18_div_14_span_41_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 93)(43, "div", 94)(44, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "VLAN");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 98)(47, "mat-form-field", 99)(48, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "VLAN Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "mat-select", 100)(51, "mat-option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, " Access ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "mat-option", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, " Trunk ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, DashboardComponent_div_18_div_14_div_55_Template, 9, 3, "div", 34)(56, DashboardComponent_div_18_div_14_div_56_Template, 20, 7, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 104)(58, "div", 94)(59, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "LINK");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 62)(62, "div", 105)(63, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Auto-Negociation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "mat-slide-toggle", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, DashboardComponent_div_18_div_14_span_66_Template, 2, 0, "span", 34)(67, DashboardComponent_div_18_div_14_span_67_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 107)(69, "mat-form-field", 108)(70, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "SPEED");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "mat-select", 109)(73, "mat-option", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "mat-option", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "10M");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "mat-option", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "100M");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "mat-option", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "1G");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "mat-option", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "2.5G");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "mat-option", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "5G");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "mat-form-field", 116)(86, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "DUPLEX");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "mat-select", 117)(89, "mat-option", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "Auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "mat-option", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "Full");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "mat-option", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Half");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](95, DashboardComponent_div_18_div_14_div_95_Template, 5, 1, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r29.selectedLacps);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r29.selectedPortsStats);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r29.frmPort);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r29.frmPort.value.enabled == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r29.frmPort.value.enabled != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r29.frmPort.value.poe == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r29.frmPort.value.poe != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r29.frmPort.value.mode == "access");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r29.frmPort.value.mode == "trunk");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r29.frmPort.value.autoneg == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r29.frmPort.value.autoneg != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r29.frmPort.value.autoneg);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r29.frmPort.value.autoneg);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r29.selectedPorts.length >= 1);
  }
}
function DashboardComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42)(1, "div", 43)(2, "mat-form-field", 44)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function DashboardComponent_div_18_Template_input_keyup_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r164);
      const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r163.applyPortFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, DashboardComponent_div_18_div_8_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 47)(10, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, DashboardComponent_div_18_div_11_Template, 33, 15, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, DashboardComponent_div_18_div_13_Template, 101, 22, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, DashboardComponent_div_18_div_14_Template, 96, 14, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.availablePorts);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.editingDeviceSettings.members);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.selectedPorts.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.selectedPorts.length >= 1);
  }
}
const _c5 = () => [10, 25, 50, 100];
class DashboardComponent {
  constructor(_router, _http, _appService, _dialog, _formBuilder, _snackBar) {
    this._router = _router;
    this._http = _http;
    this._appService = _appService;
    this._dialog = _dialog;
    this._formBuilder = _formBuilder;
    this._snackBar = _snackBar;
    this.frmPort = this._formBuilder.group({
      mode: "access",
      all_networks: false,
      networks: [],
      port_network: "default",
      port_auth: "",
      enable_mac_auth: "",
      guest_network: "",
      bypass_auth_when_server_down: false,
      speed: "auto",
      duplex: "auto",
      autoneg: true,
      mac_limit: 0,
      stp_edge: true,
      mtu: 1514,
      enabled: true,
      poe: true,
      description: "",
      voip_network: "",
      storm_control: {}
    });
    this.defaultConfig = {
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
    };
    this.headers = {};
    this.cookies = {};
    this.host = '';
    this.self = {};
    this.search = "";
    this.orgs = [];
    this.sites = [];
    this.maps = [];
    this.org_id = "";
    this.orgMode = false;
    this.site_id = "__any__";
    this.me = "";
    this.modal_opened = false;
    this.topbar_loading = false;
    this.device_loading = false;
    this.editingDevice = null;
    this.editingDeviceSettings = null;
    this.selectedPorts = [];
    this.selectedLacps = [];
    this.editingPortNames = [];
    this.editingPortsStatus = {};
    this.displayedPorts = {};
    this.availablePorts = [];
    this.readonlyPorts = [];
    this.lacpPorts = {};
    this.portsInAe = [];
    this.filteredTrunkVlans = [];
    this.selectedPortsStats = [];
    this.devices = [];
    this.resultsLength = 0;
    this.displayedColumns = ["device"];
    this.displayedStatsColumns = ['port_id', 'lacp_id', 'up', 'media_type', 'neighbor_system_name', 'neighbor_mac', 'neighbor_port_desc'];
  }
  //////////////////////////////////////////////////////////////////////////////
  /////           INIT
  //////////////////////////////////////////////////////////////////////////////
  ngOnInit() {
    const source = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(180000);
    this._appService.headers.subscribe(headers => this.headers = headers);
    this._appService.cookies.subscribe(cookies => this.cookies = cookies);
    this._appService.host.subscribe(host => this.host = host);
    this._appService.self.subscribe(self => this.self = self || {});
    this._appService.org_id.subscribe(org_id => this.org_id = org_id);
    this._appService.site_id.subscribe(site_id => this.site_id = site_id);
    this._appService.orgMode.subscribe(orgMode => this.orgMode = orgMode);
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
    var body = null;
    body = {
      host: this.host,
      cookies: this.cookies,
      headers: this.headers,
      site_id: this.site_id,
      full: true
    };
    if (body) {
      this.topbar_loading = true;
      this._http.post('/api/devices/', body).subscribe({
        next: data => {
          data["results"].forEach(element => {
            if (this.editingDevice && this.editingDevice.mac == element.mac) {
              this.editingDevice = element;
            }
          });
          this.filteredDevicesDatabase = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(data["results"]);
          this.filteredDevicesDatabase.paginator = this.paginator;
          this.topbar_loading = false;
        },
        error: error => {
          var message = "There was an error... ";
          if ("error" in error) {
            message += error["error"]["message"];
          }
          this.openError(message);
        }
      });
    }
  }
  //////////////////////////////////////////////////////////////////////////////
  /////           EDIT DEVICE
  //////////////////////////////////////////////////////////////////////////////
  editDevice(device) {
    if (device == this.editingDevice) {
      this.discardDevice();
    } else {
      this.discardDevice();
      this.editingDevice = device;
      this.getDeviceSettings();
      this.getPortStatus();
    }
  }
  getDeviceSettings() {
    this.device_loading = true;
    this._http.post('/api/devices/settings/', {
      host: this.host,
      cookies: this.cookies,
      headers: this.headers,
      site_id: this.site_id,
      device_id: this.editingDevice.id
    }).subscribe({
      next: data => {
        this.editingDeviceSettings = data;
        this.displayedPorts = data.ports;
        this.device_loading = false;
        this.selectedPorts = [];
        this.correlate_ports();
      },
      error: error => {
        this.device_loading = false;
        var message = "Unable to load settings for the Device " + this.editingDevice.mac + "... ";
        if ("error" in error) {
          message += error["error"]["message"];
        }
        this.openError(message);
      }
    });
  }
  discardDevice() {
    this.editingDevice = null;
    this.editingDeviceSettings = null;
    this.selectedPorts = [];
    this.editingPortNames = [];
    this.displayedPorts = {};
    this.discardPorts();
  }
  // Reset the ports selection and form
  discardPorts() {
    this.selectedPorts = [];
    this.selectedLacps = [];
    this.editingPortNames = [];
    this.frmPort.reset();
  }
  powerDraw(member) {
    var percentage = member.poe.power_draw / member.poe.max_power * 100;
    return percentage;
  }
  sort_available_ports() {
    this.availablePorts.sort((port_a, port_b) => {
      if (port_a.includes("-")) port_a = port_a.split("-")[1];
      if (port_b.includes("-")) port_b = port_b.split("-")[1];
      if (port_a < port_b) {
        return -1;
      } else if (port_a > port_b) {
        return 1;
      }
      return 0;
    });
  }
  mark_readonly_ports() {
    this.availablePorts.forEach(port => {
      if (this.displayedPorts.hasOwnProperty(port)) {
        if (Object.keys(this.displayedPorts[port].device).length > 0) {
          if (this.displayedPorts[port].device.hasOwnProperty("no_local_overwrite") && this.displayedPorts[port].device.no_local_overwrite == true) this.readonlyPorts.push(port);
        } else if (this.displayedPorts[port].site.hasOwnProperty("no_local_overwrite") && this.displayedPorts[port].site.no_local_overwrite == true) this.readonlyPorts.push(port);
      }
    });
  }
  mark_lacp_ports() {
    for (var [port, port_config] of Object.entries(this.displayedPorts)) {
      if (port_config["device"].hasOwnProperty("ae_uuid")) this.lacpPorts[port] = port_config["device"]["ae_uuid"];else if (port_config["site"].hasOwnProperty("ae_uuid")) this.lacpPorts[port] = port_config["site"]["ae_uuid"];
    }
  }
  mark_available_ports(interface_mapping) {
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
          };
          if (this.editingDeviceSettings.ports[port].hasOwnProperty("aggregated") && this.editingDeviceSettings.ports[port].port_parent != "") {
            this.lacpPorts[port] = this.editingDeviceSettings.ports[port].port_parent;
          }
        }
      }
    });
  }
  correlate_ports() {
    if (Object.keys(this.displayedPorts).length > 0) {
      //example { "0/0/0": "ge-0/0/0", "0/0/1": "xe-0/0/1"}
      var interface_mapping = {};
      Object.keys(this.editingPortsStatus).forEach(status_port => {
        if (status_port.includes("-")) {
          interface_mapping[status_port.split("-")[1]] = status_port;
        }
      });
      this.mark_available_ports(interface_mapping);
      this.mark_readonly_ports();
      this.mark_lacp_ports();
      this.sort_available_ports();
      this.editingPortNames.forEach(element => {
        this.selectedPorts.push(this.editingDeviceSettings.ports[element]);
      });
    }
  }
  //////////////////////////////////////////////////////////////////////////////
  /////           Ports Status
  //////////////////////////////////////////////////////////////////////////////
  getPortStatus() {
    this._http.post('/api/devices/portstatus/', {
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
        this.device_loading = false;
        var message = "Unable to load ports status for the Device " + this.editingDevice.mac + "... ";
        if ("error" in error) {
          message += error["error"]["message"];
        }
        this.openError(message);
      }
    });
  }
  display_status(port) {
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
  display_pic(member, pic_number) {
    return member.ports.filter(port => port.includes('/' + pic_number + '/')).length > 0;
  }
  //////////////////////////////////////////////////////////////////////////////
  /////           EDIT Port
  //////////////////////////////////////////////////////////////////////////////
  selectPort(port_name) {
    if (this.readonlyPorts.indexOf(port_name) < 0) {
      let port = this.editingDeviceSettings.ports[port_name];
      let port_names = [];
      let ae_uuid;
      let selected_ports = 0;
      // processed if the ports is part of an AE
      if (this.lacpPorts.hasOwnProperty(port_name)) {
        ae_uuid = this.lacpPorts[port_name];
        // retrieve the list of other ports belonging to the ae
        for (let [tmp_port, tmp_ae_uuid] of Object.entries(this.lacpPorts)) {
          if (ae_uuid == tmp_ae_uuid) port_names.push(tmp_port);
        }
      } else {
        port_names.push(port_name);
      }
      selected_ports = port_names.length;
      if (this.selectedPorts.includes(port)) {
        // DELETE PORT
        port_names.forEach(tmp_port_name => {
          this.deletePort(tmp_port_name);
        });
        // DELETE AE
        if (ae_uuid && this.selectedLacps.includes(ae_uuid)) {
          let index = this.selectedLacps.indexOf(ae_uuid);
          this.selectedLacps.splice(index, 1);
        }
      } else {
        // ADD PORT
        port_names.forEach(tmp_port => {
          let port = this.editingDeviceSettings.ports[tmp_port];
          this.addPort(port);
        });
        // ADD AE 
        if (ae_uuid && !this.selectedLacps.includes(ae_uuid)) {
          this.selectedLacps.push(ae_uuid);
        }
      }
      // SET PORT SETTINGS IF SINGLE PORT OR AE SELECTED
      var max_ports = 1;
      if (this.selectedLacps.length == 1) {
        max_ports = 0;
        for (let [tmp_port, tmp_ae_uuid] of Object.entries(this.lacpPorts)) {
          if (this.selectedLacps[0] == tmp_ae_uuid) max_ports += 1;
        }
      }
      if (this.selectedPorts.length == max_ports) this.setPortFields(this.selectedPorts[0]);else this.setDefaultPortFielts();
      // UPDATE UI
      this.updateSelectedPortsStatus();
    }
  }
  updateSelectedPortsStatus() {
    let tmp = [];
    this.editingPortNames.forEach(port => {
      if (this.editingPortsStatus.hasOwnProperty(port)) tmp.push(this.editingPortsStatus[port]);else tmp.push({
        port_id: port,
        up: false,
        media_type: "",
        neighbor_system_name: "",
        neighbor_mac: "",
        neighbor_port_desc: ""
      });
    });
    // this.selectedPortsStats = new MatTableDataSource(tmp);
    this.selectedPortsStats = tmp;
  }
  // ADD or REMOVE ports from the editing list
  addPort(port) {
    this.selectedPorts.push(port);
    this.editingPortNames.push(port.port);
  }
  deletePort(port_name) {
    let port = this.editingDeviceSettings.ports[port_name];
    let index = this.selectedPorts.indexOf(port);
    this.selectedPorts.splice(index, 1);
    let indexName = this.editingPortNames.indexOf(port.port);
    this.editingPortNames.splice(indexName, 1);
    if (this.selectedPorts.length == 0) {
      this.discardPorts();
    }
  }
  savePorts() {
    this.selectedPorts.forEach(element => {
      if (this.lacpPorts.hasOwnProperty(element["port"])) {
        element["ae_uuid"] = this.lacpPorts[element["port"]];
      }
      ;
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
      };
    });
    if (this.frmPort.valid) {
      this.topbar_loading = true;
      var body = {
        host: this.host,
        cookies: this.cookies,
        headers: this.headers,
        site_id: this.site_id,
        org_id: this.org_id,
        port_config: this.selectedPorts,
        device_id: this.editingDevice.id
      };
      this._http.post('/api/devices/update/', body).subscribe({
        next: data => {
          this.topbar_loading = false;
          //this.updateFrmDeviceValues(data.result)
          this.getDeviceSettings();
          this.openSnackBar("Device " + this.editingDevice.mac + " successfully updated", "Done");
          this.discardPorts();
        },
        error: error => {
          this.topbar_loading = false;
          var message = "Unable to save changes on Device " + this.editingDevice.mac + "... ";
          if ("error" in error) {
            message += error["error"]["message"];
          }
          this.openError(message);
        }
      });
    }
  }
  // Set Port Form values
  setDefaultPortFielts() {
    this.updateFrmDeviceValues(this.defaultConfig);
  }
  setPortFields(port) {
    var port_usage = "";
    // copy default values
    var config = {
      ...this.defaultConfig
    };
    // getting the port_usage profile name at the switch level, and, if none, at the site level
    if (port.device.hasOwnProperty("usage")) {
      port_usage = port.device["usage"];
    } else if (port.site.hasOwnProperty("usage")) {
      port_usage = port.site.usage;
    }
    // if there is a configured port_usage, retrieving its configuration at the switch level, and
    // if none, at the site level
    if (port_usage) {
      var port_config = {};
      if (port_usage in this.editingDeviceSettings.device.port_usages) {
        port_config = this.editingDeviceSettings.device.port_usages[port_usage];
      } else if (port_usage in this.editingDeviceSettings.site.port_usages) {
        port_config = this.editingDeviceSettings.site.port_usages[port_usage];
      }
      // setting the config object with the port_usage settings
      for (var key in port_config) {
        config[key] = port_config[key];
      }
    }
    this.updateFrmDeviceValues(config);
  }
  canbeChecked(portName) {
    return this.editingPortNames.includes(portName);
  }
  //////////////////////////////////////////////////////////////////////////////
  /////           COMMON
  //////////////////////////////////////////////////////////////////////////////
  port_tooltip(portName) {
    let tooltip = portName;
    if (this.display_status(portName)) {
      tooltip += " - UP";
    } else {
      tooltip += " - DOWN";
    }
    if (this.readonlyPorts.includes(portName)) {
      tooltip += " (locked by Adiministrator)";
    }
    return tooltip;
  }
  updateFrmDeviceValues(config) {
    this.frmPort.reset();
    let mode = config.mode;
    if (!mode) mode = "access";
    this.frmPort.controls["mode"].setValue(mode);
    this.frmPort.controls["all_networks"].setValue(config.all_networks);
    this.frmPort.controls["port_network"].setValue(config.port_network);
    this.frmPort.controls["autoneg"].setValue(config.disable_autoneg == false);
    this.frmPort.controls["enabled"].setValue(config.disabled == false);
    this.frmPort.controls["poe"].setValue(config.poe_disabled == false);
    if (config.all_networks == true) {
      this.frmPort.controls["networks"] = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl({
        value: config.networks,
        disabled: true
      });
    } else {
      this.frmPort.controls["networks"].setValue(config.networks);
    }
    if (config.disable_autoneg == false) {
      this.frmPort.controls["duplex"] = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl({
        value: config.duplex,
        disabled: true
      });
      this.frmPort.controls["speed"] = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl({
        value: config.speed,
        disabled: true
      });
    } else {
      this.frmPort.controls["speed"].setValue(config.speed);
      this.frmPort.controls["duplex"].setValue(config.duplex);
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
    });
  }
  applyFilter(event) {
    const filterValue = event.target.value.trim().toLowerCase();
    this.filteredDevicesDatabase.filter = filterValue.trim().toLowerCase();
    if (this.filteredDevicesDatabase.paginator) {
      this.filteredDevicesDatabase.paginator.firstPage();
    }
  }
  applyPortFilter(event) {
    const filterValue = event.target.value.trim().toLowerCase();
    this.displayedPorts = {};
    if (filterValue) {
      for (var key in this.editingDeviceSettings.ports) {
        if (key.includes(filterValue)) {
          this.displayedPorts[key] = this.editingDeviceSettings.ports[key];
        }
      }
    } else {
      this.displayedPorts = this.editingDeviceSettings.ports;
    }
  }
  back() {
    this._router.navigate(["/select"]);
  }
  //////////////////////////////////////////////////////////////////////////////
  /////           DIALOG BOXES
  //////////////////////////////////////////////////////////////////////////////
  // ERROR
  openError(message) {
    if (!this.modal_opened) {
      this.modal_opened = true;
      const dialogRef = this._dialog.open(_common_common_error__WEBPACK_IMPORTED_MODULE_0__.ErrorDialog, {
        data: message
      });
      dialogRef.afterClosed().subscribe(result => {
        this.modal_opened = false;
      });
    }
  }
  // SNACK BAR
  openSnackBar(message, action) {
    this._snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: "center",
      verticalPosition: "top"
    });
  }
  static #_ = this.ɵfac = function DashboardComponent_Factory(t) {
    return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_connector_service__WEBPACK_IMPORTED_MODULE_1__.ConnectorService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["app-dashboard"]],
    viewQuery: function DashboardComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      }
    },
    decls: 19,
    vars: 8,
    consts: [[2, "flex-direction", "row", "box-sizing", "border-box", "display", "flex", "visibility", "visible!important"], [1, "sidenav-container"], ["mode", "side", "opened", "", 1, "sidenav"], [2, "display", "flex", "flex-direction", "column", "justify-content", "space-between", "height", "100%"], [1, "flex", "column", "psk-table-container"], ["mat-table", "", 2, "background", "none", "margin-bottom", "1em", 3, "dataSource"], ["matColumnDef", "device"], ["mat-header-cell", "", "class", "flex column", "style", "padding-right: 0; padding-left: 0;place-content: stretch space-between;align-items: stretch;", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [2, "background", "none", 3, "pageSizeOptions"], [1, "flex", "row", 2, "margin", "1em", "place-content", "center flex-start", "align-items", "stretch"], ["mat-raised-button", "", "color", "accent", 3, "click"], [1, "flex", "column", "mat-elevation-z24", "max90vh", 2, "margin", "0 1em", "padding", "0", "place-content", "stretch center", "align-items", "stretch", "flex", "auto"], ["style", "text-align: center;font-size: large;color: gray;", 4, "ngIf"], ["class", "flex row", "style", "justify-content: center;align-items: center;", 4, "ngIf"], ["fxFlex", "", "class", "flex row", "style", "height: 100%;", 4, "ngIf"], ["mat-header-cell", "", 1, "flex", "column", 2, "padding-right", "0", "padding-left", "0", "place-content", "stretch space-between", "align-items", "stretch"], [1, "flex", "row", "filter-nav"], ["color", "accent", 2, "width", "90%"], ["matInput", "", "placeholder", "Ex. switch name", 3, "keyup"], ["input", ""], ["mat-button", "", 2, "height", "100%", "margin", "auto", 3, "disabled", "click"], ["matTooltip", "Refresh list", "aria-label", "Refresh list"], ["mode", "indeterminate", "color", "accent", 4, "ngIf"], ["style", "width: 100%; height: 4px; background-color: rgb(111 157 43);", 4, "ngIf"], ["mode", "indeterminate", "color", "accent"], [2, "width", "100%", "height", "4px", "background-color", "rgb(111 157 43)"], ["mat-cell", "", 3, "ngClass"], ["role", "button", 1, "flex", "row", "device", 2, "cursor", "pointer", "place-content", "stretch flex-start", "align-items", "stretch", 3, "click"], [1, "flex", "row", 2, "place-content", "center flex-start", "align-items", "stretch"], ["aria-hidden", "false", 3, "ngStyle", 4, "ngIf"], ["fxFlex", "", 1, "flex", "column", 2, "margin-left", "2em", "place-content", "center flex-start", "align-items", "stretch"], [4, "ngIf"], [2, "color", "gray", "font-weight", "lighter"], ["aria-hidden", "false", 3, "ngStyle"], ["mat-header-row", ""], ["mat-row", ""], [2, "text-align", "center", "font-size", "large", "color", "gray"], [1, "flex", "row", 2, "justify-content", "center", "align-items", "center"], ["color", "accent", "strokeWidth", "3"], ["fxFlex", "", 1, "flex", "row", 2, "height", "100%"], ["matColumnDef", "ports", 1, "flex", "column"], ["color", "accent", 1, "filter"], [2, "overflow", "auto", "height", "100%"], [4, "ngFor", "ngForOf"], ["fxFlex", "", 1, "flex", "column", "no-cursor", 2, "padding", "1em", "overflow", "auto", "width", "100%"], ["mat-dialog-content", "", 1, "flex", "column", 2, "place-content", "center space-around", "align-items", "center"], ["style", "margin-bottom: 0em;", 4, "ngFor", "ngForOf"], ["mat-dialog-content", "", 1, "flex", "column", 2, "place-content", "stretch flex-start", "align-items", "stretch"], ["style", "margin: 1em;place-content: stretch space-between;align-items: stretch;", "class", "flex column", 4, "ngIf"], ["class", "selectable", 3, "ngClass", 4, "ngIf"], [1, "selectable", 3, "ngClass"], ["role", "button", 1, "flex", "row", 2, "cursor", "pointer", "place-content", "stretch space-between", "align-items", "stretch"], [1, "flex", "row", 2, "font-weight", "lighter", "padding", "0.5em", "border-bottom", "solid 1px lightgray", "width", "100%"], [1, "expand-checkbox", 3, "checked", "disabled", "change"], ["style", "margin-left: 1em; color: gray", 4, "ngIf"], [2, "margin-left", "1em", "color", "gray"], [2, "margin-bottom", "0em"], [1, "flex", "column", "switch", 2, "place-content", "flex-start", "align-items", "flex-start"], [1, "flex", "row", 2, "font-weight", "lighter", "width", "100%", "justify-content", "space-between"], [1, "flex", "row"], [1, "hardware-model"], [2, "font-weight", "500"], [2, "margin-left", "5em"], ["class", "flex row", 4, "ngIf"], [1, "flex", "row", 2, "place-content", "stretch flex-start", "align-items", "stretch"], [1, "ports-container"], ["class", "flex row ports-text", "style", "place-content: center;align-items: center;flex: 1 1 100%;max-height: 100%;", 4, "ngIf"], ["style", "z-index: 10;", 4, "ngFor", "ngForOf"], ["aria-hidden", "false", "inline", "true", 2, "color", "#6f9d2b", "margin-right", "1em", 3, "matTooltip"], ["aria-hidden", "false", "inline", "true", 2, "color", "#f3b108", "margin-right", "1em", 3, "matTooltip"], ["aria-hidden", "false", "inline", "true", 2, "color", "#c92614", "margin-right", "1em", 3, "matTooltip"], [1, "flex", "row", "ports-text", 2, "place-content", "center", "align-items", "center", "flex", "1 1 100%", "max-height", "100%"], [2, "width", "60px", "height", "20px", "text-align", "center"], [2, "z-index", "10"], ["class", "port", 3, "ngClass", 4, "ngIf"], [1, "port", 3, "ngClass"], [1, "port-id"], [1, "normal-port", 3, "matTooltip", "ngClass", "click"], [1, "flex", "column", 2, "margin", "1em", "place-content", "stretch space-between", "align-items", "stretch"], [2, "margin", "1em"], [1, "info-title"], [1, "member-details"], ["style", "color: #6f9d2c", 4, "ngIf"], ["style", "color: #f44336", 4, "ngIf"], [2, "margin", "1em", "flex", "auto"], [2, "color", "#6f9d2c"], [2, "color", "#f44336"], [2, "max-height", "23em", "overflow", "auto"], [1, "port-list-details"], [1, "flex", "column", "create-form", 3, "formGroup"], [1, "flex", "row", "config-container"], [1, "config-subtitle"], [1, "flex", "column", "mist-space"], ["formControlName", "enabled"], ["formControlName", "poe"], [1, "flex", "column", 2, "align-items", "flex-start", "flex-grow", "1"], ["appearance", "outline", 1, "mist-space"], ["formControlName", "mode"], ["value", "access"], ["value", "trunk"], ["class", "flex row", "style", "align-items: flex-start; width: 100%;", 4, "ngIf"], [1, "flex", "row", "config-container", "bottom"], [1, "flex", "column", "mist-space", 2, "margin-bottom", "1em"], ["formControlName", "autoneg"], [1, "mist-space"], ["appearance", "outline"], ["formControlName", "speed", 3, "disabled"], ["value", "auto"], ["value", "10m"], ["value", "100m"], ["value", "1g"], ["value", "2.5g"], ["value", "5g"], ["appearance", "outline", 2, "margin-left", "1em"], ["formControlName", "duplex", 3, "disabled"], ["value", "full"], ["value", "half"], ["mat-dialog-actions", "", "style", "justify-content: space-around;", "class", "flex row", 4, "ngIf"], [1, "flex", "column"], ["style", "height: 2em;", 4, "ngIf"], [2, "height", "2em"], ["matTooltip", "UP", "aria-hidden", "false", "inline", "true", 2, "color", "#6f9d2b", "margin-right", "1em", "font-size", "large", "line-height", "normal"], ["matTooltip", "DOWN", "aria-hidden", "false", "inline", "true", 2, "color", "gray", "margin-right", "1em", "font-size", "large", "line-height", "normal"], ["formControlName", "port_network"], ["value", "default"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "flex", "row", 2, "align-items", "flex-start", "width", "100%"], [1, "flex", "row", 2, "flex-grow", "1"], ["formControlName", "all_networks", "appearance", "outline", 1, "mist-space", 2, "margin-bottom", "1em"], ["appearance", "outline", 1, "mist-space", 2, "flex-grow", "1"], ["formControlName", "networks", "multiple", "", 3, "disabled"], ["mat-dialog-actions", "", 1, "flex", "row", 2, "justify-content", "space-around"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "disabled", "click"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "mat-drawer-container", 1)(2, "mat-drawer", 2)(3, "div", 3)(4, "div", 4)(5, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, DashboardComponent_th_7_Template, 12, 3, "th", 7)(8, DashboardComponent_td_8_Template, 12, 9, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, DashboardComponent_tr_9_Template, 1, 0, "tr", 9)(10, DashboardComponent_tr_10_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "mat-paginator", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 12)(13, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_13_listener() {
          return ctx.back();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, DashboardComponent_div_16_Template, 2, 0, "div", 15)(17, DashboardComponent_div_17_Template, 2, 0, "div", 16)(18, DashboardComponent_div_18_Template, 15, 4, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.filteredDevicesDatabase);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.editingDevice && !ctx.device_loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.device_loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.editingDevice && !ctx.device_loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardTitle, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinner, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__.MatSlideToggle, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__.MatCheckbox, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__.MatProgressBar, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__.MatTooltip, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogContent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__.MatDrawerContainer, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe, _src_app_common_common_pipes__WEBPACK_IMPORTED_MODULE_2__.MapToArrayPipe, _src_app_common_common_pipes__WEBPACK_IMPORTED_MODULE_2__.IncludesPipe, _src_app_common_common_pipes__WEBPACK_IMPORTED_MODULE_2__.UptimePipe, _src_app_common_common_pipes__WEBPACK_IMPORTED_MODULE_2__.SplitPipe],
    styles: [".sidenav-container[_ngcontent-%COMP%] {\n  width: 23em;\n  min-width: 23em;\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n  place-content: stretch space-between;\n  align-items: stretch;\n  max-width: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  background-color: #ececec;\n  border: none !important;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.max90vh[_ngcontent-%COMP%] {\n  height: calc(100vh - 80px);\n}\n\n.card-outer[_ngcontent-%COMP%] {\n  background-color: unset;\n  max-width: 1900px;\n  margin: auto;\n}\n\n.top-bar-container[_ngcontent-%COMP%] {\n  margin: 0 0 1em 0;\n}\n\n.top-bar[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 5px 5px 0 0;\n}\n\n.list[_ngcontent-%COMP%] {\n  margin: 1.34375em 1em 0;\n}\n\n.loading[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #ffffff9c;\n  border-radius: 5px;\n  z-index: 1000;\n}\n\n.loading[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: auto;\n  align-self: center;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 300px;\n  justify-content: space-between;\n}\n\n.end[_ngcontent-%COMP%] {\n  justify-content: space-around !important;\n}\n\n.tooltip[_ngcontent-%COMP%] {\n  color: gray;\n}\n\n.tooltip[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n\n\n\n\ntr.mat-row[_ngcontent-%COMP%], tr.mat-footer-row[_ngcontent-%COMP%] {\n  height: 2em;\n}\n\n.psk-table-container[_ngcontent-%COMP%] {\n  \n\n  \n\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.psk-container[_ngcontent-%COMP%] {\n  border: none;\n  width: 100%;\n  min-width: 20em;\n  position: relative;\n  margin: auto;\n  border-radius: 0.3em;\n  max-width: 150em;\n}\n\n.psk-table-loading-shade[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.mist-space[_ngcontent-%COMP%] {\n  margin-left: 2em;\n  margin-right: 2em;\n}\n\n.mist-space-around[_ngcontent-%COMP%] {\n  margin: 2em;\n}\n\n.no-cursor[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n\n\n\n.mat-column-action[_ngcontent-%COMP%] {\n  width: 150px !important;\n}\n\n.edit[_ngcontent-%COMP%] {\n  background-color: #0d60aa !important;\n}\n\n.delete[_ngcontent-%COMP%] {\n  background-color: #f44336 !important;\n}\n\n.sidenav[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:hover {\n  background-color: lightgrey;\n  transition: background-color 250ms ease-in-out;\n}\n\ntd[_ngcontent-%COMP%], div.selectable[_ngcontent-%COMP%] {\n  background-color: unset;\n  transition: background-color 250ms ease-in-out;\n}\n\ntd.selected[_ngcontent-%COMP%], div.selectable.selected[_ngcontent-%COMP%] {\n  background-color: lightgrey;\n  transition: background-color 250ms ease-in-out;\n}\n\n.compact-select[_ngcontent-%COMP%] {\n  margin: 1em 0 -1em;\n}\n\n\n\n.hardware-model[_ngcontent-%COMP%] {\n  display: flex;\n  color: gray;\n}\n.switch[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  border: solid 1px gray;\n  border-radius: 5px;\n  height: 100px;\n  padding: 10px 20px;\n  min-width: 930px;\n  max-width: 1000px;\n  justify-content: space-around !important;\n}\n.info-title[_ngcontent-%COMP%] {\n  padding-bottom: 0.5em;\n  border-bottom: 1px solid lightgray;\n  margin-bottom: 0.5em;\n}\n\n\n\n\ndiv.ports-text[_ngcontent-%COMP%] {\n  -webkit-transform: rotate(-90deg);\n  -moz-transform: rotate(-90deg);\n  margin-right: -20px;\n}\n\nspan.port-text[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 60px;\n}\n.port[_ngcontent-%COMP%] {\n  display: flex;\n  border-radius: 5px;\n  margin: 1px 2px;\n}\n.port.selected[_ngcontent-%COMP%] {\n  background: #046cd930;\n}\n.port.top[_ngcontent-%COMP%] {\n  flex-direction: column;\n  padding-top: 0.3em;\n}\n.port.bottom[_ngcontent-%COMP%] {\n  flex-direction: column-reverse;\n  padding-bottom: 0.3em;\n}\n.port-id[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  justify-content: center;\n  font-size: x-small;\n  line-height: normal;\n}\n.ports-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  height: 85px;\n  align-content: flex-start;\n  justify-content: center;\n}\n\n.normal-port[_ngcontent-%COMP%] {\n  background-color: #ddd;\n  transition: box-shadow background-color 250ms ease-in-out;\n  height: 20px;\n  width: 20px;\n  border-radius: 4px;\n  \n\n  border: 1px solid transparent;\n  box-shadow: none;\n  border: 1px solid #6f9d2b;\n  cursor: pointer;\n}\n.normal-port.disabled[_ngcontent-%COMP%] {\n  cursor: default;\n  border: 1px solid #a221216b;\n  background: #dddddd63;\n}\n\n.port-up[_ngcontent-%COMP%] {\n  background-color: #6f9d2b;\n}\n.normal-port.port-up.disabled[_ngcontent-%COMP%] {\n  background: #60111130;\n}\n\n.selected-port[_ngcontent-%COMP%] {\n  border: solid 1px black;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.5),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.4), 0px 1px 10px 0px rgba(0, 0, 0, 0.2);\n  transition: box-shadow background-color 250ms ease-in-out;\n}\n\n\n\n.port-list-details[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  font-weight: 100;\n  color: gray;\n}\n.port-list-details[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 1px solid lightgray;\n  font-weight: 100;\n}\n.port-list-details[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  line-height: 2em;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n\n\nmat-checkbox.expand-checkbox[_ngcontent-%COMP%] {\n  margin: -0.5em;\n  width: 100%;\n  .mdc-label {\n    display: flex;\n    height: 3em;\n    align-items: center;\n    width: 15em;\n    line-height: 40px;\n  }\n}\n\n  mat-checkbox.expand-checkbox .mat-internal-form-field {\n  width: 100%;\n}\n\n  mat-checkbox.expand-checkbox .mat-checkbox-inner-container {\n  margin-left: 1em;\n}\n\n  mat-checkbox.expand-checkbox .mat-checkbox-label {\n  width: 100%;\n  margin: 0.5em 0 0.5em 0;\n}\n\n.filter-nav[_ngcontent-%COMP%] {\n  mat-form-field {\n    height: 4.5em;\n  }\n  margin-left: 1em;\n  margin-bottom: 1em;\n  .mat-mdc-text-field-wrapper {\n    background-color: rgb(236 236 236) !important;\n  }\n\n  .mat-mdc-form-field-subscript-wrapper {\n    height: 1em;\n  }\n}\n.filter[_ngcontent-%COMP%] {\n  height: 4.5em;\n\n  margin-left: 1em;\n  margin-bottom: 1em;\n  .mat-mdc-text-field-wrapper {\n    background-color: white !important;\n  }\n\n  .mat-mdc-form-field-subscript-wrapper {\n    height: 1em;\n  }\n}\n\n\n\n\n.member-details[_ngcontent-%COMP%] {\n}\n\n.member-details[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: start;\n  padding-right: 1em;\n  font-weight: normal;\n  vertical-align: top;\n}\n\n.member-details[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: start;\n  font-weight: lighter;\n  color: gray;\n}\n\n.member-details[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n\n\n\n.config-container[_ngcontent-%COMP%] {\n    place-content: center flex-start;\n    border-bottom: 1px solid lightgray;\n    margin-bottom: 2em;\n    align-items: flex-start;\n    padding: 1em 1em 2em;\n}\n.config-container.bottom[_ngcontent-%COMP%] {\n    margin: 0;\n    border: none;\n}\n.config-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    align-items: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSxjQUFjOztBQUVkOztFQUVFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFN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O0FBRUEsbUJBQW1COztBQUVuQjtBQUNBOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUEsV0FBVztBQUNYO0lBQ0ksZ0NBQWdDO0lBQ2hDLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksU0FBUztJQUNULFlBQVk7QUFDaEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QiIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAyM2VtO1xuICBtaW4td2lkdGg6IDIzZW07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBsYWNlLWNvbnRlbnQ6IHN0cmV0Y2ggc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubWF4OTB2aCB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xufVxuXG4uY2FyZC1vdXRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICBtYXgtd2lkdGg6IDE5MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4udG9wLWJhci1jb250YWluZXIge1xuICBtYXJnaW46IDAgMCAxZW0gMDtcbn1cblxuLnRvcC1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG59XG5cbi5saXN0IHtcbiAgbWFyZ2luOiAxLjM0Mzc1ZW0gMWVtIDA7XG59XG5cbi5sb2FkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY5YztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ubG9hZGluZyBkaXYge1xuICBtYXJnaW46IGF1dG87XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMzAwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmVuZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG59XG5cbi50b29sdGlwIHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi50b29sdGlwOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4vKiBTdHJ1Y3R1cmUgKi9cblxudHIubWF0LXJvdyxcbnRyLm1hdC1mb290ZXItcm93IHtcbiAgaGVpZ2h0OiAyZW07XG59XG5cbi5wc2stdGFibGUtY29udGFpbmVyIHtcbiAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xuICAvKiBtYXgtaGVpZ2h0OiA0MDBweDsgKi9cbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wc2stY29udGFpbmVyIHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAyMGVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gIG1heC13aWR0aDogMTUwZW07XG59XG5cbi5wc2stdGFibGUtbG9hZGluZy1zaGFkZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDU2cHg7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1pc3Qtc3BhY2Uge1xuICBtYXJnaW4tbGVmdDogMmVtO1xuICBtYXJnaW4tcmlnaHQ6IDJlbTtcbn1cblxuLm1pc3Qtc3BhY2UtYXJvdW5kIHtcbiAgbWFyZ2luOiAyZW07XG59XG5cbi5uby1jdXJzb3Ige1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8qIENvbHVtbiBXaWR0aHMgKi9cblxuLm1hdC1jb2x1bW4tYWN0aW9uIHtcbiAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lZGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkNjBhYSAhaW1wb3J0YW50O1xufVxuXG4uZGVsZXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNiAhaW1wb3J0YW50O1xufVxuXG4uc2lkZW5hdiB0ZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyNTBtcyBlYXNlLWluLW91dDtcbn1cblxudGQsXG5kaXYuc2VsZWN0YWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDI1MG1zIGVhc2UtaW4tb3V0O1xufVxuXG50ZC5zZWxlY3RlZCxcbmRpdi5zZWxlY3RhYmxlLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDI1MG1zIGVhc2UtaW4tb3V0O1xufVxuXG4uY29tcGFjdC1zZWxlY3Qge1xuICBtYXJnaW46IDFlbSAwIC0xZW07XG59XG5cbi8qIFNXSVRDSCAqL1xuLmhhcmR3YXJlLW1vZGVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6IGdyYXk7XG59XG4uc3dpdGNoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1pbi13aWR0aDogOTMwcHg7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xufVxuLmluZm8tdGl0bGUge1xuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuXG4vKiBQT1JUUyAqL1xuXG5kaXYucG9ydHMtdGV4dCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xufVxuXG5zcGFuLnBvcnQtdGV4dCB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG59XG4ucG9ydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAxcHggMnB4O1xufVxuLnBvcnQuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjMDQ2Y2Q5MzA7XG59XG4ucG9ydC50b3Age1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLXRvcDogMC4zZW07XG59XG4ucG9ydC5ib3R0b20ge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIHBhZGRpbmctYm90dG9tOiAwLjNlbTtcbn1cbi5wb3J0LWlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuLnBvcnRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiA4NXB4O1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5vcm1hbC1wb3J0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyBiYWNrZ3JvdW5kLWNvbG9yIDI1MG1zIGVhc2UtaW4tb3V0O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC8qIG1hcmdpbjogMnB4IDNweDsgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2ZjlkMmI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ub3JtYWwtcG9ydC5kaXNhYmxlZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2EyMjEyMTZiO1xuICBiYWNrZ3JvdW5kOiAjZGRkZGRkNjM7XG59XG5cbi5wb3J0LXVwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZmOWQyYjtcbn1cbi5ub3JtYWwtcG9ydC5wb3J0LXVwLmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogIzYwMTExMTMwO1xufVxuXG4uc2VsZWN0ZWQtcG9ydCB7XG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC41KSxcbiAgICAwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQpLCAwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyBiYWNrZ3JvdW5kLWNvbG9yIDI1MG1zIGVhc2UtaW4tb3V0O1xufVxuXG4vKiBQT1JUIExJU1QgKi9cbi5wb3J0LWxpc3QtZGV0YWlscyB0aCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbG9yOiBncmF5O1xufVxuLnBvcnQtbGlzdC1kZXRhaWxzIHRkIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbi5wb3J0LWxpc3QtZGV0YWlscyB0ZCBkaXYge1xuICBsaW5lLWhlaWdodDogMmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4vKiBNQVQgQ0hFQ0tCT1ggRVhQQU5ERUQgKi9cblxubWF0LWNoZWNrYm94LmV4cGFuZC1jaGVja2JveCB7XG4gIG1hcmdpbjogLTAuNWVtO1xuICB3aWR0aDogMTAwJTtcbiAgLm1kYy1sYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxNWVtO1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB9XG59XG5cbjo6bmctZGVlcCBtYXQtY2hlY2tib3guZXhwYW5kLWNoZWNrYm94IC5tYXQtaW50ZXJuYWwtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46Om5nLWRlZXAgbWF0LWNoZWNrYm94LmV4cGFuZC1jaGVja2JveCAubWF0LWNoZWNrYm94LWlubmVyLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG59XG5cbjo6bmctZGVlcCBtYXQtY2hlY2tib3guZXhwYW5kLWNoZWNrYm94IC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwLjVlbSAwIDAuNWVtIDA7XG59XG5cbi5maWx0ZXItbmF2IHtcbiAgbWF0LWZvcm0tZmllbGQge1xuICAgIGhlaWdodDogNC41ZW07XG4gIH1cbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYgMjM2IDIzNikgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYXQtbWRjLWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgIGhlaWdodDogMWVtO1xuICB9XG59XG4uZmlsdGVyIHtcbiAgaGVpZ2h0OiA0LjVlbTtcblxuICBtYXJnaW4tbGVmdDogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYXQtbWRjLWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgIGhlaWdodDogMWVtO1xuICB9XG59XG5cbi8qIE1FTUJFUiBERVRBSUxTICovXG5cbi5tZW1iZXItZGV0YWlscyB7XG59XG5cbi5tZW1iZXItZGV0YWlscyB0aCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5tZW1iZXItZGV0YWlscyB0ZCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5tZW1iZXItZGV0YWlscyB0ZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKiBDT05GSUcgKi9cbi5jb25maWctY29udGFpbmVyIHtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgZmxleC1zdGFydDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiAxZW0gMWVtIDJlbTtcbn1cbi5jb25maWctY29udGFpbmVyLmJvdHRvbSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbi5jb25maWctY29udGFpbmVyIGRpdiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2828:
/*!************************************!*\
  !*** ./src/app/login/login-2FA.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwoFactorDialog: () => (/* binding */ TwoFactorDialog)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 6144);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4672);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 3648);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 2307);






class TwoFactorDialog {
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
  }
  close2FA() {
    this.dialogRef.close(this.twoFactor);
  }
  cancel2FA() {
    this.dialogRef.close();
  }
  static #_ = this.ɵfac = function TwoFactorDialog_Factory(t) {
    return new (t || TwoFactorDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TwoFactorDialog,
    selectors: [["login-2fa"]],
    decls: 12,
    vars: 2,
    consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", 2, "padding-top", "0.5em"], ["appearance", "outline"], ["matInput", "", "type", "number", "cdkFocusInitial", "", 3, "ngModel", "ngModelChange", "keydown.enter"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "mat-dialog-close"]],
    template: function TwoFactorDialog_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "2FA Code Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "mat-form-field", 2)(4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function TwoFactorDialog_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.twoFactor, $event) || (ctx.twoFactor = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function TwoFactorDialog_Template_input_keydown_enter_6_listener() {
          return ctx.close2FA();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4)(8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TwoFactorDialog_Template_button_click_8_listener() {
          return ctx.cancel2FA();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Verify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.twoFactor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.twoFactor);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
    styles: ["\n\n    \n    input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n    }\n    \n\n    \n    input[type=number][_ngcontent-%COMP%] {\n        -moz-appearance: textfield;\n    }\n    input.mat-mdc-input-element[_ngcontent-%COMP%]{\n        margin-top: .5em;\n    }"]
  });
}

/***/ }),

/***/ 2080:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _login_2FA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-2FA */ 2828);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1332);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _connector_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../connector.service */ 8436);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 6144);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 2544);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4672);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 3648);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 7872);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 2307);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ 5180);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 8512);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4204);
















function LoginComponent_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const host_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", host_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", host_r4.viewValue, " ");
  }
}
function LoginComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "mat-spinner", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function LoginComponent_a_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r2.github_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function LoginComponent_a_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r3.docker_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
class LoginComponent {
  constructor(_formBuilder, _http, _router, _appService, _dialog, _platformLocation) {
    this._formBuilder = _formBuilder;
    this._http = _http;
    this._router = _router;
    this._appService = _appService;
    this._dialog = _dialog;
    this._platformLocation = _platformLocation;
    this.host = null;
    this.headers = {};
    this.cookies = {};
    this.self = {};
    this.hosts_loading = true;
    this.hosts = [];
    // LOGIN FORM
    this.frmStepLogin = this._formBuilder.group({
      host: ['api.mist.com'],
      credentials: this._formBuilder.group({
        email: [''],
        password: ['']
      }),
      token: ['']
    });
    this.error_mess = {
      "credentials": "",
      "token": ""
    };
  }
  //// INIT ////
  ngOnInit() {
    this.frmStepLogin = this._formBuilder.group({
      host: ['api.mist.com'],
      credentials: this._formBuilder.group({
        email: [''],
        password: ['']
      }),
      token: [""]
    });
    this._http.get('/api/gap').subscribe({
      next: data => this._appService.googleApiKeySet(data.gap),
      error: error => console.error("Unable to load the Google API Key... Maps won't be available...")
    });
    this._http.get("/api/disclaimer").subscribe({
      next: data => {
        if (data.disclaimer) this.disclaimer = data.disclaimer;
        if (data.github_url) this.github_url = data.github_url;
        if (data.docker_url) this.docker_url = data.docker_url;
      }
    });
    this._http.get("/api/hosts").subscribe({
      next: data => {
        this.hosts = data;
        this.hosts_loading = false;
      }
    });
  }
  //// COMMON ////
  check_host() {
    if (this.frmStepLogin.value.host != '') {
      return true;
    } else {
      return false;
    }
  }
  // RESET AUTHENTICATION FORM
  reset_response() {
    this.host = null;
    this._appService.headersSet({});
    this._appService.cookiesSet({});
    this._appService.selfSet({});
    this._appService.hostSet(this.host);
    this.reset_error_mess();
  }
  reset_error_mess() {
    this.error_mess = {
      "credentials": "",
      "token": ""
    };
  }
  // PARSE AUTHENTICATION RESPONSE FROM SERVER
  parse_response(data) {
    if ("error" in data) {
      this.loading = false;
      this.error_mess["username"] = data.error;
    } else if ("data" in data) {
      if ("detail" in data.data) {
        this.error_message(data["method"], data.data.detail);
      } else if ("two_factor_required" in data.data && "two_factor_passed" in data.data) {
        if (data.data["two_factor_required"] == false || data.data["two_factor_passed"] == true) {
          this.authenticated(data);
        } else {
          this.open2FA();
        }
      } else {
        this.authenticated(data);
      }
    }
  }
  // WHEN AUTHENTICATION IS NOT OK
  error_message(method, message) {
    this.loading = false;
    this.error_mess[method] = message;
  }
  // WHEN AUTHENTICATION IS OK
  authenticated(data) {
    this._appService.headersSet(data.headers);
    this._appService.cookiesSet(data.cookies);
    this._appService.hostSet(data.host);
    this._appService.selfSet(data.data);
    this.loading = false;
    this._router.navigate(['/select']);
  }
  //// AUTHENTICATION ////
  submitCredentials() {
    this.reset_response();
    if (this.check_host()) {
      this.loading = true;
      this._http.post('/api/login/', {
        host: this.frmStepLogin.value.host,
        email: this.frmStepLogin.value.credentials.email,
        password: this.frmStepLogin.value.credentials.password
      }).subscribe({
        next: data => this.parse_response(data),
        error: error => this.error_message("credentials", error.error.message)
      });
    }
  }
  submitToken() {
    this.reset_response();
    if (this.check_host()) {
      this.loading = true;
      this._http.post('/api/login/', {
        host: this.frmStepLogin.value.host,
        token: this.frmStepLogin.value.token
      }).subscribe({
        next: data => this.parse_response(data),
        error: error => this.error_message("credentials", error.error.message)
      });
    }
  }
  submit2FA(twoFactor) {
    if (this.check_host() && twoFactor) {
      this.loading = true;
      this._http.post('/api/login/', {
        host: this.frmStepLogin.value.host,
        email: this.frmStepLogin.value.credentials.email,
        password: this.frmStepLogin.value.credentials.password,
        two_factor: twoFactor
      }).subscribe({
        next: data => this.parse_response(data),
        error: error => this.error_message("credentials", error.error.message)
      });
    } else {
      this.loading = false;
    }
  }
  //// DIALOG BOX ////
  open2FA() {
    const dialogRef = this._dialog.open(_login_2FA__WEBPACK_IMPORTED_MODULE_0__.TwoFactorDialog, {});
    dialogRef.afterClosed().subscribe(result => {
      this.submit2FA(result);
    });
  }
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_connector_service__WEBPACK_IMPORTED_MODULE_1__.ConnectorService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.PlatformLocation));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 58,
    vars: 11,
    consts: [[1, "card-outer"], [1, "login-form", 3, "formGroup"], [1, "login-form-outer", "flex", "column", 3, "formGroup"], [1, "login-form-inner"], [1, "login-step", "flex", "column"], ["appearance", "outline", 2, "width", "100%"], ["formControlName", "host"], [3, "value", 4, "ngFor", "ngForOf"], [1, "login-form-or", "flex", "row"], ["mat-fab", "", "color", "accent", "aria-label", "AND", 1, "disable-click"], [1, "login-step", "flex", "row"], ["formGroupName", "credentials", 1, "login-form-inputs", "flex", "column"], ["appearance", "outline", 2, "margin-top", "2em"], ["matInput", "", "formControlName", "email", "type", "email"], ["appearance", "outline"], ["matInput", "", "type", "password", "formControlName", "password", 3, "keydown.enter"], [2, "margin-bottom", "1em", "min-height", "20px"], [2, "color", "red", "font-weight", "normal"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "login-form-or", "flex", "column"], [3, "vertical"], ["mat-fab", "", "color", "accent", "aria-label", "OR", 1, "disable-click", 2, "margin-bottom", "3.5em"], [1, "login-form-inputs", "flex", "column"], ["appearance", "outline", 2, "margin-top", "3em"], ["type", "text", "matInput", "", "formControlName", "token", 3, "keydown.enter"], ["class", "loading flex row", 4, "ngIf"], [1, "disclaimer"], [1, "source", "flex", "row"], ["target", "_blank", 3, "href", 4, "ngIf"], [3, "value"], [1, "loading", "flex", "row"], [1, "flex", "column"], ["strokeWidth", "3"], ["target", "_blank", 3, "href"], ["src", "static/github.png"], ["src", "static/docker.png"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0)(1, "form", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "mat-form-field", 5)(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Mist Cloud");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, LoginComponent_mat_option_9_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " AND ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10)(16, "div", 11)(17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Access with Login/Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-form-field", 12)(20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-form-field", 14)(24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.enter", function LoginComponent_Template_input_keydown_enter_26_listener() {
          return ctx.submitCredentials();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 16)(28, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_31_listener() {
          return ctx.submitCredentials();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Continue with credentials");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "mat-divider", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " OR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "mat-divider", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 22)(39, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Access with API Token");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "mat-form-field", 23)(42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "API Token");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.enter", function LoginComponent_Template_input_keydown_enter_44_listener() {
          return ctx.submitToken();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div")(46, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_49_listener() {
          return ctx.submitToken();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Continue with API Token");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, LoginComponent_div_51_Template, 3, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 26)(53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, LoginComponent_a_56_Template, 2, 1, "a", 28)(57, LoginComponent_a_57_Template, 2, 1, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.frmStepLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.frmStepLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.hosts);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.error_mess.credentials);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("vertical", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("vertical", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.error_mess.token);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading || ctx.hosts_loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.disclaimer, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.github_url);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.docker_url);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupName, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatFabButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatProgressSpinner],
    styles: ["mat-card[_ngcontent-%COMP%] {\n  background-color: rgb(236, 236, 236);\n}\n\nh3[_ngcontent-%COMP%] {\n  font-weight: 400;\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n.login-form-inner[_ngcontent-%COMP%] {\n  border: none;\n  width: auto;\n  min-width: 38em;\n  position: relative;\n  margin: auto;\n  padding: 2em;\n  border-radius: 0.3em;\n}\n\n.login-form-outer[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: rgb(236, 236, 236);\n}\n\n.login-form-inputs[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 17em;\n  text-align: center;\n  justify-content: space-between;\n}\n\n.login-form-or[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n  justify-content: space-between;\n}\n\n.disable-click[_ngcontent-%COMP%] {\n  pointer-events: none;\n  cursor: default;\n}\n\n.login-step[_ngcontent-%COMP%] {\n  border: solid 1px lightgray;\n  background-color: white;\n  border-radius: 5px;\n  margin: -2em;\n  padding: 2em;\n}\n\n.loading[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.6117647059);\n  border-radius: 5px;\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n  z-index: 10;\n}\n\n.loading[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: auto;\n  align-self: center;\n}\n\n.disclaimer[_ngcontent-%COMP%] {\n  width: 50em;\n  text-align: center;\n  margin: 5em auto;\n  text-transform: uppercase;\n  font-weight: 100;\n  font-size: small;\n  line-height: 150%;\n  opacity: 50%;\n}\n\n.source[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n}\n\n.source[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 1em;\n  height: 2em;\n}\n\ninput.mat-mdc-input-element[_ngcontent-%COMP%] {\n  margin-top: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLG9DQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBQUo7O0FBR0E7RUFDSSxvQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtREFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYgMjM2IDIzNik7XG59XG5cbmgzIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLXRvcDogMDtcblxufVxuXG4ubG9naW4tZm9ybS1pbm5lciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1pbi13aWR0aDogMzhlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcbn1cblxuLmxvZ2luLWZvcm0tb3V0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYgMjM2IDIzNik7XG59XG5cbi5sb2dpbi1mb3JtLWlucHV0cyB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogMTdlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubG9naW4tZm9ybS1vciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZGlzYWJsZS1jbGljayB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4ubG9naW4tc3RlcCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggbGlnaHRncmF5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IC0yZW07XG4gICAgcGFkZGluZzogMmVtO1xufVxuXG4ubG9hZGluZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOWM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xuICAgIHotaW5kZXg6IDEwO1xufVxuXG4ubG9hZGluZyBkaXYge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5kaXNjbGFpbWVyIHtcbiAgICB3aWR0aDogNTBlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA1ZW0gYXV0bztcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgICBvcGFjaXR5OiA1MCU7XG59XG5cbi5zb3VyY2Uge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zb3VyY2UgaW1nIHtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBoZWlnaHQ6IDJlbTtcbn1cblxuaW5wdXQubWF0LW1kYy1pbnB1dC1lbGVtZW50e1xuICAgIG1hcmdpbi10b3A6IC41ZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 564:
/*!**************************************!*\
  !*** ./src/app/org/org.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrgComponent: () => (/* binding */ OrgComponent)
/* harmony export */ });
/* harmony import */ var _common_common_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../common/common-error */ 1060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1332);
/* harmony import */ var _connector_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../connector.service */ 8436);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 6144);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 2544);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/google-maps */ 6792);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 3648);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 7872);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 8512);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ 5220);













function OrgComponent_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 12)(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const org_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", org_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](org_r6.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](org_r6.name);
  }
}
function OrgComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 14);
  }
}
function OrgComponent_mat_progress_bar_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-bar", 15);
  }
}
function OrgComponent_mat_card_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 16)(1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Please Select an Organization ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function OrgComponent_mat_card_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 18)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " You don't have access to any Site in this Organization. Please chose another Organization. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Only the Sites with \"Administrator\" authorization are listed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function OrgComponent_mat_card_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrgComponent_mat_card_16_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const site_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.setSite(site_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-title", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-subtitle", 22)(5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrgComponent_mat_card_16_Template_div_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const site_r7 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.setSite(site_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-card-content", 24)(9, "google-map", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "map-marker", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "map-info-window");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const site_r7 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", site_r7.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](site_r7.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("center", site_r7.latlng)("zoom", ctx_r5.map.zoom)("options", ctx_r5.map.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("position", site_r7.latlng);
  }
}
class OrgComponent {
  constructor(_http, _appService, _dialog, _router) {
    this._http = _http;
    this._appService = _appService;
    this._dialog = _dialog;
    this._router = _router;
    this.headers = {};
    this.cookies = {};
    this.host = '';
    this.self = {};
    this.search = "";
    this.orgs = [];
    this.org_sites = {};
    this.sites = [];
    this.orgMode = false;
    this.selected_org_obj = {
      id: "",
      name: ""
    };
    this.org_id = "";
    this.site_id = "";
    this.me = "";
    this.adminMode = false;
    this.map = {
      options: {
        scrollwheel: false,
        disableDefaultUI: true,
        draggable: false,
        draggableCursor: "pointer",
        clickableIcons: false
      },
      zoom: 12
    };
    this.claimDisabled = true;
    this.topBarLoading = false;
    this.noSiteToDisplay = false;
  }
  ngOnInit() {
    this._appService.headers.subscribe(headers => this.headers = headers);
    this._appService.cookies.subscribe(cookies => this.cookies = cookies);
    this._appService.host.subscribe(host => this.host = host);
    this._appService.self.subscribe(self => this.self = self || {});
    this._appService.org_id.subscribe(org_id => this.org_id = org_id);
    this.me = this.self["email"] || null;
    this.check_auth_status();
    var tmp_orgs = [];
    // parsing all the orgs/sites from the privileges
    // only orgs with admin/write/installer roles are used
    if (Object.keys(this.self).length > 0 && this.self["privileges"]) {
      this.self["privileges"].forEach(element => {
        const org_id = element["org_id"];
        const role = element["role"];
        if (role == "admin" || role == "write") {
          if (element["scope"] == "org") {
            if (tmp_orgs.indexOf(org_id) < 0) {
              this.orgs.push({
                id: org_id,
                name: element["name"],
                role: role
              });
              tmp_orgs.push(org_id);
            }
          } else if (element["scope"] == "site") {
            const site_id = element["site_id"];
            if (tmp_orgs.indexOf(org_id) < 0) {
              this.orgs.push({
                id: org_id,
                name: element["org_name"],
                role: role
              });
              tmp_orgs.push(org_id);
              this.org_sites[org_id] = [site_id];
            } else if (!this.org_sites[org_id].sites.includes(site_id)) {
              this.org_sites[org_id].push(site_id);
            }
          }
        }
      });
      this.orgs = this.sortList(this.orgs, "name");
    }
    // if only one, using it by default
    if (!this.org_id && this.orgs.length == 1) {
      this.org_id = this.orgs[1]["id"];
    }
    // if back button used, retrieving previously selected org
    // or if only one org, loading it automatically
    if (this.org_id) {
      this.orgs.forEach(element => {
        if (element.id == this.org_id) {
          this.selected_org_obj = element;
          this.changeOrg();
        }
      });
    }
  }
  check_auth_status() {
    "api.mist.com";

    if (Object.keys(this.self).length == 0) {
      this._router.navigate(['/login']);
    }
  }
  // when the user selects a new org
  // disabling the admin mode
  // and loading the sites
  changeOrg() {
    this.org_id = this.selected_org_obj.id;
    if (this.org_sites.hasOwnProperty(this.org_id)) this.loadSiteList();else this.loadSites();
  }
  // loads the org sites for site privilege
  loadSiteList() {
    this.topBarLoading = true;
    this.claimDisabled = true;
    this.sites = [];
    const site_ids = this.org_sites[this.org_id];
    this._http.post('/api/sites/', {
      host: this.host,
      cookies: this.cookies,
      headers: this.headers,
      org_id: this.org_id,
      site_ids: site_ids
    }).subscribe({
      next: data => this.parseSites(data),
      error: error => {
        var message = "There was an error... ";
        if ("error" in error) {
          message += error["error"]["message"];
        }
        this.topBarLoading = false;
        this.openError(message);
      }
    });
  }
  // loads the org sites for org privilege
  loadSites() {
    this.topBarLoading = true;
    this.claimDisabled = true;
    this.sites = [];
    this._http.post('/api/sites/', {
      host: this.host,
      cookies: this.cookies,
      headers: this.headers,
      org_id: this.org_id
    }).subscribe({
      next: data => this.parseSites(data),
      error: error => {
        var message = "There was an error... ";
        if ("error" in error) {
          message += error["error"]["message"];
        }
        this.topBarLoading = false;
        this.openError(message);
      }
    });
  }
  // parse the org sites from HTTP response
  parseSites(data) {
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
  setOrg() {
    this.orgMode = true;
    this.gotoDash();
  }
  // used when user wants to claim devices to site
  setSite(site) {
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
  gotoDash() {
    this._appService.orgModeSet(this.orgMode);
    this._appService.orgIdSet(this.org_id);
    this._router.navigate(["/dashboard"]);
  }
  // COMMON
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
    });
  }
  // DIALOG BOXES
  // ERROR
  openError(message) {
    const dialogRef = this._dialog.open(_common_common_error__WEBPACK_IMPORTED_MODULE_0__.ErrorDialog, {
      data: message
    });
  }
  static #_ = this.ɵfac = function OrgComponent_Factory(t) {
    return new (t || OrgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_connector_service__WEBPACK_IMPORTED_MODULE_1__.ConnectorService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: OrgComponent,
    selectors: [["app-org"]],
    decls: 17,
    vars: 8,
    consts: [[1, "card-outer"], [1, "flex", "column", "top-bar-container"], [1, "top-bar", "mat-elevation-z8", 2, "flex-flow", "row wrap"], ["appearance", "outline", 1, "list", 2, "width", "30em"], [3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["style", "width: 100%; height: 4px; background-color: rgb(111 157 43);", 4, "ngIf"], ["mode", "indeterminate", "color", "accent", 4, "ngIf"], ["style", "place-content: stretch center;align-items: center;padding: 16px;", 4, "ngIf"], ["class", "flex column", "style", "justify-content: center; max-width: 100%; padding: 2em;", 4, "ngIf"], [1, "flex", "row", "container-sites"], ["class", "mat-elevation-z2 flex column card-site", 4, "ngFor", "ngForOf"], [3, "value"], [2, "margin-right", "1em", "background-color", "lightgray", "border-radius", "14px", "padding", "5px", "font-size", "smaller"], [2, "width", "100%", "height", "4px", "background-color", "rgb(111 157 43)"], ["mode", "indeterminate", "color", "accent"], [2, "place-content", "stretch center", "align-items", "center", "padding", "16px"], [2, "color", "#777"], [1, "flex", "column", 2, "justify-content", "center", "max-width", "100%", "padding", "2em"], [2, "color", "#777", "margin", "1em auto", "justify-content", "center", "max-width", "100%"], [1, "mat-elevation-z2", "flex", "column", "card-site"], [3, "click"], [2, "margin", "10px"], [2, "width", "100%"], [2, "margin", "0", "padding", "0"], ["height", "300px", "width", "300px", 3, "center", "zoom", "options"], [3, "position"]],
    template: function OrgComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0)(1, "div", 1)(2, "div", 2)(3, "mat-form-field", 3)(4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Organization");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("valueChange", function OrgComponent_Template_mat_select_valueChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.selected_org_obj, $event) || (ctx.selected_org_obj = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function OrgComponent_Template_mat_select_selectionChange_6_listener() {
          return ctx.changeOrg();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-select-trigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, OrgComponent_mat_option_9_Template, 5, 3, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, OrgComponent_div_10_Template, 1, 0, "div", 6)(11, OrgComponent_mat_progress_bar_11_Template, 1, 0, "mat-progress-bar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, OrgComponent_mat_card_13_Template, 3, 0, "mat-card", 8)(14, OrgComponent_mat_card_14_Template, 5, 0, "mat-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, OrgComponent_mat_card_16_Template, 13, 6, "mat-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("value", ctx.selected_org_obj);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.selected_org_obj.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.orgs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.topBarLoading == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.topBarLoading == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.org_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.noSiteToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.sites);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption, _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__.GoogleMap, _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__.MapInfoWindow, _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__.MapMarker, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectTrigger, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardTitle, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__.MatProgressBar],
    styles: [".card-outer[_ngcontent-%COMP%] {\n    background-color: unset;\n    max-width: 1900px;\n    margin: auto;\n    padding: 16px;\n}\n\n.top-bar-container[_ngcontent-%COMP%] {\n    margin: 1em 0;\n}\n\n.top-bar[_ngcontent-%COMP%] {\n    background-color: white;\n    border-radius: 5px 5px 0 0;\n}\n\n.list[_ngcontent-%COMP%] {\n    margin: 1.34375em 1em 0;\n}\n\n.loading[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #ffffff9c;\n    border-radius: 5px;\n    z-index: 1000;\n}\n\n.loading[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin: auto;\n    align-self: center;\n}\n\n.button-container[_ngcontent-%COMP%] {\n    display: flex;\n    width: 300px;\n    justify-content: space-between;\n}\n\n.container-sites[_ngcontent-%COMP%] {\n    flex-flow: row wrap;\n    box-sizing: border-box;\n    place-content: stretch flex-start;\n    align-items: stretch;\n    max-height: 100%;\n}\n\n.card-site[_ngcontent-%COMP%] {\n    cursor: pointer;\n    margin: 10px;\n    padding: 0px;\n    width: 300px;\n    place-content: stretch space-between;\n    max-width: 100%;\n    align-items: stretch;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvb3JnL29yZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGlDQUFpQztJQUNqQyxvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtb3V0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICAgIG1heC13aWR0aDogMTkwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAxNnB4O1xufVxuXG4udG9wLWJhci1jb250YWluZXIge1xuICAgIG1hcmdpbjogMWVtIDA7XG59XG5cbi50b3AtYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbn1cblxuLmxpc3Qge1xuICAgIG1hcmdpbjogMS4zNDM3NWVtIDFlbSAwO1xufVxuXG4ubG9hZGluZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOWM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHotaW5kZXg6IDEwMDA7XG59XG5cbi5sb2FkaW5nIGRpdiB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNvbnRhaW5lci1zaXRlcyB7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBsYWNlLWNvbnRlbnQ6IHN0cmV0Y2ggZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2FyZC1zaXRlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgcGxhY2UtY29udGVudDogc3RyZXRjaCBzcGFjZS1iZXR3ZWVuO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6716:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 7460:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 5204);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 6716);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(7460)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map