(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+2Ah":
    /*!************************************!*\
      !*** ./src/app/login/login-2FA.ts ***!
      \************************************/

    /*! exports provided: TwoFactorDialog */

    /***/
    function Ah(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TwoFactorDialog", function () {
        return TwoFactorDialog;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var TwoFactorDialog = /*#__PURE__*/function () {
        function TwoFactorDialog(dialogRef) {
          _classCallCheck(this, TwoFactorDialog);

          this.dialogRef = dialogRef;
        }

        _createClass(TwoFactorDialog, [{
          key: "close2FA",
          value: function close2FA() {
            this.dialogRef.close(this.twoFactor);
          }
        }, {
          key: "cancel2FA",
          value: function cancel2FA() {
            this.dialogRef.close();
          }
        }]);

        return TwoFactorDialog;
      }();

      TwoFactorDialog.ɵfac = function TwoFactorDialog_Factory(t) {
        return new (t || TwoFactorDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
      };

      TwoFactorDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TwoFactorDialog,
        selectors: [["login-2fa"]],
        decls: 12,
        vars: 2,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["appearance", "outline"], ["matInput", "", "type", "number", 3, "ngModel", "ngModelChange", "keydown.enter"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", "cdkFocusInitial", "", "type", "submit", 3, "mat-dialog-close"]],
        template: function TwoFactorDialog_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "2FA Code Required");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TwoFactorDialog_Template_input_ngModelChange_6_listener($event) {
              return ctx.twoFactor = $event;
            })("keydown.enter", function TwoFactorDialog_Template_input_keydown_enter_6_listener() {
              return ctx.close2FA();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TwoFactorDialog_Template_button_click_8_listener() {
              return ctx.cancel2FA();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Verify");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.twoFactor);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.twoFactor);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
        styles: ["input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n    }\n    \n    \n    input[type=number][_ngcontent-%COMP%] {\n        -moz-appearance: textfield;\n    }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TwoFactorDialog, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'login-2fa',
            templateUrl: 'login-2fa.html'
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/tmunzer/4_dev/Mist/mist_switch_operator_web_ui/src_angular/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "4s4N":
    /*!************************************************************!*\
      !*** ./src/app/auto-generated/auto-generated.component.ts ***!
      \************************************************************/

    /*! exports provided: AutoGeneratedComponent */

    /***/
    function s4N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutoGeneratedComponent", function () {
        return AutoGeneratedComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AutoGeneratedComponent = /*#__PURE__*/function () {
        function AutoGeneratedComponent() {
          _classCallCheck(this, AutoGeneratedComponent);
        }

        _createClass(AutoGeneratedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AutoGeneratedComponent;
      }();

      AutoGeneratedComponent.ɵfac = function AutoGeneratedComponent_Factory(t) {
        return new (t || AutoGeneratedComponent)();
      };

      AutoGeneratedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRvLWdlbmVyYXRlZC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoGeneratedComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-auto-generated',
            templateUrl: './auto-generated.component.html',
            styleUrls: ['./auto-generated.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "6bIR":
    /*!****************************************!*\
      !*** ./src/app/common/common-claim.ts ***!
      \****************************************/

    /*! exports provided: ClaimDialog */

    /***/
    function bIR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClaimDialog", function () {
        return ClaimDialog;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _common_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./common-error */
      "Popb");
      /* harmony import */


      var _common_claim_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./common-claim-details */
      "hzNB");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");

      function ClaimDialog_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Claim Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function ClaimDialog_div_5_Template_input_keydown_enter_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.add();
          })("ngModelChange", function ClaimDialog_div_5_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.inputClaimCodes = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClaimDialog_div_5_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "done");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.inputClaimCodes);
        }
      }

      function ClaimDialog_div_7_mat_card_1_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "check_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClaimDialog_div_7_mat_card_1_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var claimCode_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", claimCode_r12.reason)("aria-label", claimCode_r12.reason);
        }
      }

      function ClaimDialog_div_7_mat_card_1_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClaimDialog_div_7_mat_card_1_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "content_copy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClaimDialog_div_7_mat_card_1_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClaimDialog_div_7_mat_card_1_button_8_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var claimCode_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r20.remove(claimCode_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClaimDialog_div_7_mat_card_1_button_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClaimDialog_div_7_mat_card_1_button_9_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var claimCode_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r23.edit(claimCode_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          error: a0,
          warning: a1
        };
      };

      function ClaimDialog_div_7_mat_card_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClaimDialog_div_7_mat_card_1_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var claimCode_r12 = ctx.$implicit;
            return claimCode_r12.code = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ClaimDialog_div_7_mat_card_1_div_4_Template, 3, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ClaimDialog_div_7_mat_card_1_div_5_Template, 3, 2, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ClaimDialog_div_7_mat_card_1_div_6_Template, 3, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ClaimDialog_div_7_mat_card_1_div_7_Template, 3, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ClaimDialog_div_7_mat_card_1_button_8_Template, 3, 0, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ClaimDialog_div_7_mat_card_1_button_9_Template, 3, 0, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var claimCode_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, !claimCode_r12.valid, claimCode_r12.duplicated));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", claimCode_r12.code)("readonly", claimCode_r12.readonly);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", claimCode_r12.processed && claimCode_r12.success);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", claimCode_r12.processed && !claimCode_r12.success && claimCode_r12.reason);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !claimCode_r12.processed && !claimCode_r12.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !claimCode_r12.processed && claimCode_r12.duplicated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !claimCode_r12.processed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !claimCode_r12.processed);
        }
      }

      function ClaimDialog_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClaimDialog_div_7_mat_card_1_Template, 10, 12, "mat-card", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.claimCodes);
        }
      }

      function ClaimDialog_button_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClaimDialog_button_9_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClaimDialog_button_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClaimDialog_button_10_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.confirm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Claim");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.claimButtonDisabled);
        }
      }

      function ClaimDialog_button_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClaimDialog_button_11_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r32.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.isWorking);
        }
      }

      function ClaimDialog_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClaimDialog_button_12_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r34.details();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r5.isWorking);
        }
      }

      function ClaimDialog_button_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClaimDialog_button_13_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r36.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Done");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.isWorking);
        }
      }

      var ClaimDialog = /*#__PURE__*/function () {
        function ClaimDialog(dialogRef, _http, _dialog, data) {
          _classCallCheck(this, ClaimDialog);

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

        _createClass(ClaimDialog, [{
          key: "add",
          value: function add() {
            var _this = this;

            var regex = /^[0-9a-zA-Z]{5}-?[0-9a-zA-Z]{5}-?[0-9a-zA-Z]{5}$/i;
            this.inputClaimCodes.split(/[\s,; ]+/).forEach(function (element) {
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

                _this.claimCodes.forEach(function (element) {
                  if (element.code == newClaim.code) {
                    element.duplicated = true;
                    newClaim.duplicated = true;
                  }
                });

                _this.claimCodes.push(newClaim);
              }
            });
            this.check_issues();
            this.inputClaimCodes = "";
          }
        }, {
          key: "edit",
          value: function edit(claimCode) {
            this.inputClaimCodes = claimCode.code;
            var index = this.claimCodes.indexOf(claimCode);
            this.claimCodes.splice(index, 1);
          }
        }, {
          key: "check_issues",
          value: function check_issues() {
            var issues = {
              invalid: [],
              duplicated: []
            };
            this.claimCodes.forEach(function (element) {
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
        }, {
          key: "remove",
          value: function remove(claimCode) {
            var duplicated_codes = [];
            var index = -1; // remove the claim code

            index = this.claimCodes.indexOf(claimCode);

            if (index >= 0) {
              this.claimCodes.splice(index, 1);
            } // if the removed claim code has the duplicated flag


            if (claimCode.duplicated) {
              // find other same codes
              this.claimCodes.forEach(function (element) {
                if (element.code == claimCode.code) {
                  duplicated_codes.push(element);
                }
              }); // if only one other same code, remove the duplicated flash

              if (duplicated_codes.length == 1) {
                index = this.claimCodes.indexOf(duplicated_codes[0]);
                this.claimCodes[index].duplicated = false;
              }
            } // check issues for "claim" button


            this.check_issues();
          } // CLAIM NEW CODES

        }, {
          key: "confirm",
          value: function confirm() {
            var _this2 = this;

            this.isWorking = true;
            this.isDone = true; // Add claim codes to request body

            this.body.claim_codes = [];
            this.claimCodes.forEach(function (element) {
              _this2.body.claim_codes.push(element.code);
            }); // Send request to server

            this._http.post('/api/devices/claim/', this.body).subscribe({
              next: function next(data) {
                // retrieve result data
                _this2.claimResult = data.results;

                _this2.claimCodes.forEach(function (element) {
                  element.processed = true;
                  var index = -1; // if code added to account

                  if (_this2.claimResult["added"].indexOf(element.code) >= 0) {
                    element.success = true; // if error when adding the code
                  } else if (_this2.claimResult["error"].indexOf(element.code) >= 0) {
                    index = _this2.claimResult["error"].indexOf(element.code);
                    element.success = false;
                    element.reason = _this2.claimResult["reason"][index]; // if code already claimed somewhere
                  } else if (_this2.claimResult["duplicated"].indexOf(element.code) >= 0) {
                    element.success = false;
                    element.reason = "Already Claimed";
                  }
                });

                _this2.isWorking = false;
              },
              error: function error(_error) {
                var message = "Unable to create claim the devices... ";

                if ("error" in _error) {
                  message += _error["error"]["message"];
                }

                _this2.openError(message);

                _this2.isWorking = false;
              }
            });
          } // EXIT

        }, {
          key: "cancel",
          value: function cancel() {
            this.dialogRef.close();
          } // DIALOG BOXES
          // Restart Claim Process

        }, {
          key: "reset",
          value: function reset() {
            var _this3 = this;

            var dialogRef = this._dialog.open(ClaimDialog, {
              data: {
                body: this.body
              }
            });

            dialogRef.afterClosed().subscribe(function (result) {
              _this3.dialogRef.close();
            });
          } // DETAILS

        }, {
          key: "details",
          value: function details() {
            console.log(this.claimResult);

            var dialogRef = this._dialog.open(_common_claim_details__WEBPACK_IMPORTED_MODULE_3__["ClaimDetailsDialog"], {
              data: this.claimResult
            });
          } // ERROR

        }, {
          key: "openError",
          value: function openError(message) {
            var dialogRef = this._dialog.open(_common_error__WEBPACK_IMPORTED_MODULE_2__["ErrorDialog"], {
              data: message
            });
          }
        }]);

        return ClaimDialog;
      }();

      ClaimDialog.ɵfac = function ClaimDialog_Factory(t) {
        return new (t || ClaimDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      ClaimDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ClaimDialog,
        selectors: [["common-claim"]],
        decls: 14,
        vars: 7,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", "fxLayout", "column"], [2, "margin", "0 1em 1em", "color", "gray", "font-size", "small"], ["fxLayout", "row", "fxFill", "", "style", "padding: 0 2em", 4, "ngIf"], [2, "max-width", "80em", "min-width", "20em"], ["fxFlex", "1 1 0", "fxLayout", "row wrap", "style", "width: 100%;", 4, "ngIf"], ["mat-dialog-actions", "", "fxLayout", "row", 2, "justify-content", "space-around"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", "cdkFocusInitial", "", 3, "disabled", "click", 4, "ngIf"], ["mat-button", "", 3, "disabled", "click", 4, "ngIf"], ["fxLayout", "row", "fxFill", "", 2, "padding", "0 2em"], ["fxFill", ""], ["matInput", "", "placeholder", "ABCDE-12345-F6G7H", "cdkFocusInitial", "", 3, "ngModel", "keydown.enter", "ngModelChange"], ["mat-icon-button", "", 1, "add-icon", 2, "height", "100%", 3, "click"], ["matTooltip", "Add Claim Codes", "aria-label", "Add Claim Codes"], ["fxFlex", "1 1 0", "fxLayout", "row wrap", 2, "width", "100%"], ["fxLayout", "row", "style", "background-color: #eeeeee; margin:5px; border-radius: 1.7em; padding: 0; height: 4em;", 4, "ngFor", "ngForOf"], ["fxLayout", "row", 2, "background-color", "#eeeeee", "margin", "5px", "border-radius", "1.7em", "padding", "0", "height", "4em"], [1, "claim-code", 2, "margin", "0 1em", "width", "11em", 3, "ngClass"], ["matInput", "", 3, "ngModel", "readonly", "ngModelChange"], ["fxLayout", "row", 2, "padding-bottom", "0.5em", "margin-right", "1em"], ["style", "height: 100%;", "class", "success icon-text", 4, "ngIf"], ["style", "height: 100%;", "class", "error icon-text", 4, "ngIf"], ["style", "height: 100%;", "class", "warning icon-text", 4, "ngIf"], ["mat-icon-button", "", "style", "height: 100%;", "class", "delete-icon", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "style", "height: 100%;", "class", "add-icon", 3, "click", 4, "ngIf"], [1, "success", "icon-text", 2, "height", "100%"], ["matTooltip", "Claim Code Added", "aria-label", "Claim Code Added"], [1, "error", "icon-text", 2, "height", "100%"], [3, "matTooltip", "aria-label"], ["matTooltip", "Invalid Format", "aria-label", "Invalid Format"], [1, "warning", "icon-text", 2, "height", "100%"], ["matTooltip", "Duplicated Claim Code", "aria-label", "Duplicated Claim Code"], ["mat-icon-button", "", 1, "delete-icon", 2, "height", "100%", 3, "click"], ["matTooltip", "Delete Claim Code", "aria-label", "Delete Claim Code"], ["matTooltip", "Edit Claim Code", "aria-label", "Edit Claim Code"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "accent", "cdkFocusInitial", "", 3, "disabled", "click"], ["mat-button", "", 3, "disabled", "click"]],
        template: function ClaimDialog_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Claim new devices");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "HINT: you can paste mutliple claim codes separated by a SPACE, a COMMA or a SEMICOLUMN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ClaimDialog_div_5_Template, 8, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ClaimDialog_div_7_Template, 2, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ClaimDialog_button_9_Template, 2, 0, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ClaimDialog_button_10_Template, 2, 1, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ClaimDialog_button_11_Template, 2, 1, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ClaimDialog_button_12_Template, 2, 1, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ClaimDialog_button_13_Template, 2, 1, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isDone);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.claimCodes.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isDone);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isDone);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDone);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDone);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDone);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexFillDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__["DefaultClassDirective"]],
        styles: ["input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n    }\n    \n    \n    .icon-text[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: center;\n        cursor: default;\n    }\n    \n    input[type=number][_ngcontent-%COMP%] {\n        -moz-appearance: textfield;\n    }\n    \n    .delete-icon[_ngcontent-%COMP%] {\n        color: #333;\n        transition: color 250ms ease-in-out;\n    }\n    \n    .delete-icon[_ngcontent-%COMP%]:hover {\n        color: red;\n    }\n    \n    .add-icon[_ngcontent-%COMP%] {\n        color: #333;\n        transition: color 250ms ease-in-out;\n    }\n    \n    .add-icon[_ngcontent-%COMP%]:hover {\n        color: green;\n    }\n    \n    .claim-code-input[_ngcontent-%COMP%] {\n        background-color: white;\n        transition: color 250ms ease-in-out;\n    }\n    \n    .claim-code[_ngcontent-%COMP%] {\n        color: black;\n        transition: color 250ms ease-in-out;\n    }\n    \n    .success[_ngcontent-%COMP%] {\n        color: green;\n    }\n    \n    .warning[_ngcontent-%COMP%] {\n        color: coral;\n    }\n    \n    .error[_ngcontent-%COMP%] {\n        color: red;\n    }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClaimDialog, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'common-claim',
            templateUrl: 'common-claim.html'
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "IMNj":
    /*!**************************************!*\
      !*** ./src/app/org/org.component.ts ***!
      \**************************************/

    /*! exports provided: OrgComponent */

    /***/
    function IMNj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrgComponent", function () {
        return OrgComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _common_common_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../common/common-error */
      "Popb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _connector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../connector.service */
      "l5d9");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_google_maps__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/google-maps */
      "3sZV");

      function OrgComponent_mat_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var org_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", org_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](org_r6.role);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](org_r6.name);
        }
      }

      function OrgComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
        }
      }

      function OrgComponent_mat_progress_bar_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 15);
        }
      }

      function OrgComponent_mat_card_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Please Select an Organization ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function OrgComponent_mat_card_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " You don't have access to any Site in this Organization. Please chose another Organization. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Only the Sites with \"Administrator\" authorization are listed. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function OrgComponent_mat_card_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrgComponent_mat_card_16_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var site_r7 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.setSite(site_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrgComponent_mat_card_16_Template_div_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var site_r7 = ctx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.setSite(site_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "google-map", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "map-marker", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "map-info-window");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var site_r7 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", site_r7.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](site_r7.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("center", site_r7.latlng)("zoom", ctx_r5.map.zoom)("options", ctx_r5.map.options);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", site_r7.latlng);
        }
      }

      var OrgComponent = /*#__PURE__*/function () {
        function OrgComponent(_http, _appService, _dialog, _router) {
          _classCallCheck(this, OrgComponent);

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

        _createClass(OrgComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this._appService.headers.subscribe(function (headers) {
              return _this4.headers = headers;
            });

            this._appService.cookies.subscribe(function (cookies) {
              return _this4.cookies = cookies;
            });

            this._appService.host.subscribe(function (host) {
              return _this4.host = host;
            });

            this._appService.self.subscribe(function (self) {
              return _this4.self = self || {};
            });

            this._appService.org_id.subscribe(function (org_id) {
              return _this4.org_id = org_id;
            });

            this.me = this.self["email"] || null;
            var tmp_orgs = []; // parsing all the orgs/sites from the privileges
            // only orgs with admin/write/installer roles are used

            if (this.self != {} && this.self["privileges"]) {
              this.self["privileges"].forEach(function (element) {
                if (element["role"] == "admin" || element["role"] == "write") {
                  if (element["scope"] == "org") {
                    if (tmp_orgs.indexOf(element["org_id"]) < 0) {
                      _this4.orgs.push({
                        id: element["org_id"],
                        name: element["name"],
                        role: element["role"]
                      });

                      tmp_orgs.push(element["org_id"]);
                    }
                  } else if (element["scope"] == "site") {
                    if (tmp_orgs.indexOf(element["org_id"]) < 0) {
                      _this4.orgs.push({
                        id: element["org_id"],
                        name: element["org_name"],
                        role: element["role"]
                      });

                      tmp_orgs.push(element["org_id"]);
                    }
                  }
                }
              });
              this.orgs = this.sortList(this.orgs, "name");
            } // if only one, using it by default


            if (!this.org_id && this.orgs.length == 1) {
              this.org_id = this.orgs[1]["id"];
            } // if back button used, retrieving previously selected org
            // or if only one org, loading it automatically


            if (this.org_id) {
              this.orgs.forEach(function (element) {
                if (element.id == _this4.org_id) {
                  _this4.selected_org_obj = element;

                  _this4.changeOrg();
                }
              });
            }
          } // when the user selects a new org
          // disabling the admin mode
          // and loading the sites

        }, {
          key: "changeOrg",
          value: function changeOrg() {
            this.loadSites();
          } // loads the org sites

        }, {
          key: "loadSites",
          value: function loadSites() {
            var _this5 = this;

            this.org_id = this.selected_org_obj.id;
            this.topBarLoading = true;
            this.claimDisabled = true;
            this.sites = [];

            this._http.post('/api/sites/', {
              host: this.host,
              cookies: this.cookies,
              headers: this.headers,
              org_id: this.org_id
            }).subscribe({
              next: function next(data) {
                return _this5.parseSites(data);
              },
              error: function error(_error2) {
                var message = "There was an error... ";

                if ("error" in _error2) {
                  message += _error2["error"]["message"];
                }

                _this5.topBarLoading = false;

                _this5.openError(message);
              }
            });
          } // parse the org sites from HTTP response

        }, {
          key: "parseSites",
          value: function parseSites(data) {
            if (data.sites.length > 0) {
              this.noSiteToDisplay = false;
              this.sites = this.sortList(data.sites, "name");
              this.claimDisabled = false;
            } else {
              this.noSiteToDisplay = true;
            }

            this.topBarLoading = false;
          } // ROUTING FUNCTION
          // used when user wants to claim devices to org

        }, {
          key: "setOrg",
          value: function setOrg() {
            this.orgMode = true;
            this.gotoDash();
          } // used when user wants to claim devices to site

        }, {
          key: "setSite",
          value: function setSite(site) {
            if (site != null) {
              this.site_id = site.id;
            } else {
              this.site_id = "";
            }

            this.orgMode = true;

            this._appService.siteIdSet(this.site_id);

            this.gotoDash();
          } // publish variables and go to the dashboard

        }, {
          key: "gotoDash",
          value: function gotoDash() {
            this._appService.orgModeSet(this.orgMode);

            this._appService.orgIdSet(this.org_id);

            this._router.navigate(["/dashboard"]);
          } // COMMON

        }, {
          key: "sortList",
          value: function sortList(data, attribute) {
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
          } // DIALOG BOXES
          // ERROR

        }, {
          key: "openError",
          value: function openError(message) {
            var dialogRef = this._dialog.open(_common_common_error__WEBPACK_IMPORTED_MODULE_1__["ErrorDialog"], {
              data: message
            });
          }
        }]);

        return OrgComponent;
      }();

      OrgComponent.ɵfac = function OrgComponent_Factory(t) {
        return new (t || OrgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_connector_service__WEBPACK_IMPORTED_MODULE_3__["ConnectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      OrgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OrgComponent,
        selectors: [["app-org"]],
        decls: 17,
        vars: 8,
        consts: [[1, "card-outer"], ["fxLayout", "column", 1, "top-bar-container"], ["fxLayout", "row wrap", 1, "top-bar", "mat-elevation-z8"], ["appearance", "outline", 1, "list"], [3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["style", "width: 100%; height: 4px; background-color: rgb(111 157 43);", 4, "ngIf"], ["mode", "indeterminate", "color", "accent", 4, "ngIf"], ["fxLayoutAlign", "center", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "center stretch", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "start stretch"], ["class", "mat-elevation-z2", "fxLayout", "column", "fxLayoutAlign", "space-between stretch", "style", "cursor: pointer;margin: 10px; padding: 0px; width: 300px;", 4, "ngFor", "ngForOf"], [3, "value"], [2, "margin-right", "1em", "background-color", "lightgray", "border-radius", "14px", "padding", "5px", "font-size", "smaller"], [2, "width", "100%", "height", "4px", "background-color", "rgb(111 157 43)"], ["mode", "indeterminate", "color", "accent"], ["fxLayoutAlign", "center"], [2, "color", "#777"], ["fxLayout", "column", "fxLayoutAlign", "center stretch"], ["fxLayoutAlign", "center stretch", 2, "color", "#777", "margin", "2em auto"], ["fxLayoutAlign", "center stretch", 2, "color", "#777", "font-size", "small", "margin-bottom", "2em"], ["fxLayout", "column", "fxLayoutAlign", "space-between stretch", 1, "mat-elevation-z2", 2, "cursor", "pointer", "margin", "10px", "padding", "0px", "width", "300px"], [3, "click"], [2, "margin", "10px"], [2, "width", "100%"], [2, "margin", "0px"], ["height", "300px", "width", "300px", 3, "center", "zoom", "options"], [3, "position"]],
        template: function OrgComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Organization");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function OrgComponent_Template_mat_select_valueChange_6_listener($event) {
              return ctx.selected_org_obj = $event;
            })("selectionChange", function OrgComponent_Template_mat_select_selectionChange_6_listener() {
              return ctx.changeOrg();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select-trigger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OrgComponent_mat_option_9_Template, 5, 3, "mat-option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OrgComponent_div_10_Template, 1, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OrgComponent_mat_progress_bar_11_Template, 1, 0, "mat-progress-bar", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, OrgComponent_mat_card_13_Template, 3, 0, "mat-card", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, OrgComponent_mat_card_14_Template, 5, 0, "mat-card", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, OrgComponent_mat_card_16_Template, 13, 6, "mat-card", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selected_org_obj);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.selected_org_obj.name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orgs);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.topBarLoading == false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.topBarLoading == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.org_id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.noSiteToDisplay);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sites);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectTrigger"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_13__["GoogleMap"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_13__["MapMarker"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_13__["MapInfoWindow"]],
        styles: [".card-outer[_ngcontent-%COMP%] {\n    background-color: unset;\n    max-width: 1900px;\n    margin: auto;\n}\n\n.top-bar-container[_ngcontent-%COMP%] {\n    margin: 1em 0;\n}\n\n.top-bar[_ngcontent-%COMP%] {\n    background-color: white;\n    border-radius: 5px 5px 0 0;\n}\n\n.list[_ngcontent-%COMP%] {\n    margin: 1.34375em 1em 0;\n}\n\n.loading[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #ffffff9c;\n    border-radius: 5px;\n    z-index: 1000;\n}\n\n.loading[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin: auto;\n    align-self: center;\n}\n\n.button-container[_ngcontent-%COMP%] {\n    display: flex;\n    width: 300px;\n    justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDhCQUE4QjtBQUNsQyIsImZpbGUiOiJvcmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLW91dGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgICBtYXgtd2lkdGg6IDE5MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi50b3AtYmFyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAxZW0gMDtcbn1cblxuLnRvcC1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xufVxuXG4ubGlzdCB7XG4gICAgbWFyZ2luOiAxLjM0Mzc1ZW0gMWVtIDA7XG59XG5cbi5sb2FkaW5nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY5YztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgei1pbmRleDogMTAwMDtcbn1cblxuLmxvYWRpbmcgZGl2IHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrgComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-org',
            templateUrl: './org.component.html',
            styleUrls: ['./org.component.css']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _connector_service__WEBPACK_IMPORTED_MODULE_3__["ConnectorService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Popb":
    /*!****************************************!*\
      !*** ./src/app/common/common-error.ts ***!
      \****************************************/

    /*! exports provided: ErrorDialog */

    /***/
    function Popb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorDialog", function () {
        return ErrorDialog;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var ErrorDialog = /*#__PURE__*/function () {
        function ErrorDialog(dialogRef, data) {
          _classCallCheck(this, ErrorDialog);

          this.dialogRef = dialogRef;
          this.data = data;
        }

        _createClass(ErrorDialog, [{
          key: "ok",
          value: function ok() {
            this.dialogRef.close();
          }
        }]);

        return ErrorDialog;
      }();

      ErrorDialog.ɵfac = function ErrorDialog_Factory(t) {
        return new (t || ErrorDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      ErrorDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ErrorDialog,
        selectors: [["common-error"]],
        decls: 8,
        vars: 1,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", "fxLayout", "row", 2, "justify-content", "space-around"], ["mat-raised-button", "", "color", "accent", 3, "click"]],
        template: function ErrorDialog_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Oops...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorDialog_Template_button_click_6_listener() {
              return ctx.ok();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ok");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data, "");
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorDialog, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'common-error',
            templateUrl: 'common-error.html'
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "QX6l":
    /*!**************************************************!*\
      !*** ./src/app/dashboard/dashboard.component.ts ***!
      \**************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function QX6l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _common_common_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/common-error */
      "Popb");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _connector_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../connector.service */
      "l5d9");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _src_app_common_common_pipes__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @src/app/common/common-pipes */
      "sIjS");

      function DashboardComponent_th_5_mat_progress_bar_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 23);
        }
      }

      function DashboardComponent_th_5_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 24);
        }
      }

      function DashboardComponent_th_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function DashboardComponent_th_5_Template_input_keyup_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_th_5_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.getDevices();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "refresh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DashboardComponent_th_5_mat_progress_bar_10_Template, 1, 0, "mat-progress-bar", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DashboardComponent_th_5_div_11_Template, 1, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.topBarLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.topBarLoading == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.topBarLoading == false);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "color": a0
        };
      };

      function DashboardComponent_td_6_mat_icon_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " check_box_outline_blank ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, element_r13.status === "connected" ? "#6f9d2b" : "lightgray"));
        }
      }

      function DashboardComponent_td_6_mat_icon_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " filter_none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, element_r13.status === "connected" ? "#6f9d2b" : "lightgray"));
        }
      }

      function DashboardComponent_td_6_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", element_r13.name, " ");
        }
      }

      function DashboardComponent_td_6_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", element_r13.mac, " ");
        }
      }

      var _c1 = function _c1(a0) {
        return {
          selected: a0
        };
      };

      function DashboardComponent_td_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_td_6_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var element_r13 = ctx.$implicit;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.editDevice(element_r13);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardComponent_td_6_mat_icon_3_Template, 2, 3, "mat-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_td_6_mat_icon_4_Template, 2, 3, "mat-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_td_6_div_6_Template, 2, 1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardComponent_td_6_div_7_Template, 2, 1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r13 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx_r1.editingDevice && element_r13.mac === ctx_r1.editingDevice.mac));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r13.members.length <= 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r13.members.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r13.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !element_r13.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("MAC: ", element_r13.mac, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Model: ", element_r13.model, "");
        }
      }

      function DashboardComponent_tr_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 33);
        }
      }

      function DashboardComponent_tr_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 34);
        }
      }

      function DashboardComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please select a device... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "selected": a0
        };
      };

      function DashboardComponent_div_16_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-checkbox", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DashboardComponent_div_16_div_8_Template_mat_checkbox_change_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var switchport_r31 = ctx.$implicit;

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r32.selectPort(switchport_r31.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var switchport_r31 = ctx.$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, ctx_r26.canbeChecked(switchport_r31.value.port)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r26.canbeChecked(switchport_r31.value.port));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", switchport_r31.key, " ");
        }
      }

      var _c3 = function _c3(a0, a1) {
        return {
          "port-up": a0,
          "selected-port": a1
        };
      };

      function DashboardComponent_div_16_div_12_div_11_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_16_div_12_div_11_div_1_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

            var port_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r40.selectPortFromSwitchView(port_r38);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var port_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", port_r38)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c3, ctx_r39.editingPortsStatus[port_r38].up, ctx_r39.editingPortNames.includes(port_r38)));
        }
      }

      function DashboardComponent_div_16_div_12_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_16_div_12_div_11_div_1_Template, 2, 5, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "startsWith");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var port_r38 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, port_r38, "ge"));
        }
      }

      function DashboardComponent_div_16_div_12_div_15_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_16_div_12_div_15_div_1_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var port_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r46.selectPortFromSwitchView(port_r44);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var port_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", port_r44)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c3, ctx_r45.editingPortsStatus[port_r44] && ctx_r45.editingPortsStatus[port_r44].up, ctx_r45.editingPortNames.includes(port_r44)));
        }
      }

      function DashboardComponent_div_16_div_12_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_16_div_12_div_15_div_1_Template, 2, 5, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "startsWith");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var port_r44 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, port_r44, "xe"));
        }
      }

      function DashboardComponent_div_16_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "RJ45");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DashboardComponent_div_16_div_12_div_11_Template, 3, 4, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "SFP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DashboardComponent_div_16_div_12_div_15_Template, 3, 4, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var member_r34 = ctx.$implicit;
          var index_r35 = ctx.index;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r27.editingDevice.model, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", index_r35, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", member_r34.ports);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", member_r34.ports);
        }
      }

      function DashboardComponent_div_16_div_14_mat_card_53_tr_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "POE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var member_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", member_r51.poe.power_draw, " W");
        }
      }

      function DashboardComponent_div_16_div_14_mat_card_53_tr_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "POE Budget");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var member_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", member_r51.poe.max_power, " W");
        }
      }

      function DashboardComponent_div_16_div_14_mat_card_53_div_34_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " check_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_div_16_div_14_mat_card_53_div_34_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_div_16_div_14_mat_card_53_div_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_16_div_14_mat_card_53_div_34_div_1_Template, 3, 0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_div_16_div_14_mat_card_53_div_34_div_2_Template, 3, 0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var temp_r59 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", temp_r59.status === "ok");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !temp_r59.status === "ok");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", temp_r59.name, ": ", temp_r59.celsius, " \xB0C ");
        }
      }

      function DashboardComponent_div_16_div_14_mat_card_53_tr_35_div_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " check_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_div_16_div_14_mat_card_53_tr_35_div_4_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_div_16_div_14_mat_card_53_tr_35_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_16_div_14_mat_card_53_tr_35_div_4_div_1_Template, 3, 0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_div_16_div_14_mat_card_53_tr_35_div_4_div_2_Template, 3, 0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fan_r63 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", fan_r63.status === "ok");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !fan_r63.status === "ok");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fan_r63.name, " ");
        }
      }

      function DashboardComponent_div_16_div_14_mat_card_53_tr_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "FAN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_div_16_div_14_mat_card_53_tr_35_div_4_Template, 5, 3, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var member_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", member_r51.fans);
        }
      }

      function DashboardComponent_div_16_div_14_mat_card_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "MEMBER #");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "VC ROLE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "MODEL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "SERIAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "MAC ADDRESS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, DashboardComponent_div_16_div_14_mat_card_53_tr_28_Template, 5, 1, "tr", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, DashboardComponent_div_16_div_14_mat_card_53_tr_29_Template, 5, 1, "tr", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "TEMP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, DashboardComponent_div_16_div_14_mat_card_53_div_34_Template, 5, 4, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, DashboardComponent_div_16_div_14_mat_card_53_tr_35_Template, 5, 1, "tr", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var member_r51 = ctx.$implicit;
          var index_r52 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](index_r52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r51.vc_role);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r51.model);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r51.serial);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r51.mac);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", member_r51.poe.power_draw);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", member_r51.poe.max_power);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", member_r51.temperatures);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", member_r51.fans.length > 0);
        }
      }

      function DashboardComponent_div_16_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-divider", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Switch Management");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "VLAN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "IP Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Netmask");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Gateway");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "In Band");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Out Band");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "mat-divider", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Switch Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "mat-divider", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, DashboardComponent_div_16_div_14_mat_card_53_Template, 36, 9, "mat-card", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.editingDeviceSettings.device.ip_config.network);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.editingDeviceSettings.device.ip_config.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.editingDeviceSettings.device.ip_config.ip);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.editingDeviceSettings.device.ip_config.netmask);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.editingDeviceSettings.device.ip_config.gateway);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.editingDeviceSettings.device.oob_ip_config.network);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.editingDeviceSettings.device.oob_ip_config.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.editingDeviceSettings.device.oob_ip_config.ip);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.editingDeviceSettings.device.oob_ip_config.netmask);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.editingDeviceSettings.device.oob_ip_config.gateway);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r28.editingDeviceSettings.members);
        }
      }

      function DashboardComponent_div_16_div_15_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r67.editingPorts[0].port);
        }
      }

      function DashboardComponent_div_16_div_15_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Multi Selection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_div_16_div_15_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enabled ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_div_16_div_15_span_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Disabled ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_div_16_div_15_span_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enabled ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_div_16_div_15_span_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Disabled ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_div_16_div_15_mat_option_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var vlan_r76 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", vlan_r76.key);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", vlan_r76.key, " (", vlan_r76.value.vlan_id, ") ");
        }
      }

      function DashboardComponent_div_16_div_15_span_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enabled ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_div_16_div_15_span_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Disabled ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_div_16_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-divider", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardComponent_div_16_div_15_span_3_Template, 2, 1, "span", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_div_16_div_15_span_4_Template, 2, 0, "span", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Port Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-slide-toggle", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DashboardComponent_div_16_div_15_span_12_Template, 2, 0, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DashboardComponent_div_16_div_15_span_13_Template, 2, 0, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "PoE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-slide-toggle", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DashboardComponent_div_16_div_15_span_18_Template, 2, 0, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DashboardComponent_div_16_div_15_span_19_Template, 2, 0, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "VLAN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-select", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "None");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DashboardComponent_div_16_div_15_mat_option_26_Template, 2, 3, "mat-option", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "mapToArray");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Auto-Negociation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-slide-toggle", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, DashboardComponent_div_16_div_15_span_32_Template, 2, 0, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, DashboardComponent_div_16_div_15_span_33_Template, 2, 0, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "SPEED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-select", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-option", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Auto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-option", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "10M");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-option", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "100M");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-option", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "1G");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-option", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "2.5G");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-option", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "5G");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "DUPLEX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-select", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-option", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Auto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-option", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Full");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-option", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Half");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.editingPorts.length == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.editingPorts.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r29.frmPort);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.frmPort.value.enabled == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.frmPort.value.enabled != true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.frmPort.value.poe == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.frmPort.value.poe != true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 12, ctx_r29.editingDeviceSettings.networks));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.frmPort.value.autoneg == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.frmPort.value.autoneg != true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r29.frmPort.value.autoneg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r29.frmPort.value.autoneg);
        }
      }

      function DashboardComponent_div_16_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_16_div_16_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78);

            var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r77.discardDevice();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_16_div_16_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78);

            var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r79.savePorts();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r30.frmPort.invalid);
        }
      }

      function DashboardComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function DashboardComponent_div_16_Template_input_keyup_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81);

            var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r80.applyPortFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DashboardComponent_div_16_div_8_Template, 5, 5, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "mapToArray");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DashboardComponent_div_16_div_12_Template, 16, 4, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DashboardComponent_div_16_div_14_Template, 54, 11, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DashboardComponent_div_16_div_15_Template, 61, 14, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DashboardComponent_div_16_div_16_Template, 5, 1, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, ctx_r6.displayedPorts));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.editingDeviceSettings.members);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.editingPorts.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.editingPorts.length >= 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.editingPorts.length >= 1);
        }
      }

      var _c4 = function _c4() {
        return [10, 25, 50, 100];
      };

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(_router, _http, _appService, _dialog, _formBuilder, _snackBar) {
          _classCallCheck(this, DashboardComponent);

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
          this.topBarLoading = false;
          this.deviceLoading = false;
          this.editingDevice = null;
          this.editingDeviceSettings = null;
          this.editingPorts = [];
          this.editingPortNames = [];
          this.editingPortsStatus = {};
          this.displayedPorts = {};
          this.devices = [];
          this.resultsLength = 0;
          this.displayedColumns = ["device"];
        } //////////////////////////////////////////////////////////////////////////////
        /////           INIT
        //////////////////////////////////////////////////////////////////////////////


        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(60000);

            this._appService.headers.subscribe(function (headers) {
              return _this6.headers = headers;
            });

            this._appService.cookies.subscribe(function (cookies) {
              return _this6.cookies = cookies;
            });

            this._appService.host.subscribe(function (host) {
              return _this6.host = host;
            });

            this._appService.self.subscribe(function (self) {
              return _this6.self = self || {};
            });

            this._appService.org_id.subscribe(function (org_id) {
              return _this6.org_id = org_id;
            });

            this._appService.site_id.subscribe(function (site_id) {
              return _this6.site_id = site_id;
            });

            this._appService.orgMode.subscribe(function (orgMode) {
              return _this6.orgMode = orgMode;
            });

            this.getDevices();
            this._subscription = source.subscribe(function (s) {
              return _this6.getDevices();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._subscription.unsubscribe();
          } //////////////////////////////////////////////////////////////////////////////
          /////           LOAD DEVICE LIST
          //////////////////////////////////////////////////////////////////////////////

        }, {
          key: "getDevices",
          value: function getDevices() {
            var _this7 = this;

            var body = null;
            body = {
              host: this.host,
              cookies: this.cookies,
              headers: this.headers,
              site_id: this.site_id,
              full: true
            };

            if (body) {
              this.topBarLoading = true;

              this._http.post('/api/devices/', body).subscribe({
                next: function next(data) {
                  var tmp = [];
                  data["results"].forEach(function (element) {
                    if (_this7.editingDevice && _this7.editingDevice.mac == element.mac) {
                      _this7.editingDevice = element;
                    }
                  });
                  _this7.filteredDevicesDatabase = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data["results"]);
                  _this7.filteredDevicesDatabase.paginator = _this7.paginator;
                  _this7.topBarLoading = false;
                },
                error: function error(_error3) {
                  var message = "There was an error... ";

                  if ("error" in _error3) {
                    message += _error3["error"]["message"];
                  }

                  _this7.openError(message);
                }
              });
            }
          } //////////////////////////////////////////////////////////////////////////////
          /////           EDIT DEVICE
          //////////////////////////////////////////////////////////////////////////////

        }, {
          key: "editDevice",
          value: function editDevice(device) {
            if (device == this.editingDevice) {
              this._discardDevice();
            } else {
              this._discardDevice();

              this.editingDevice = device;

              this._getDeviceSettings();

              this._getPortStatus();
            }
          }
        }, {
          key: "_getDeviceSettings",
          value: function _getDeviceSettings() {
            var _this8 = this;

            this.deviceLoading = true;

            this._http.post('/api/devices/settings/', {
              host: this.host,
              cookies: this.cookies,
              headers: this.headers,
              site_id: this.site_id,
              device_id: this.editingDevice.id
            }).subscribe({
              next: function next(data) {
                _this8.editingDeviceSettings = data;
                _this8.displayedPorts = data.ports;
                _this8.deviceLoading = false;
                _this8.editingPorts = [];

                _this8.editingPortNames.forEach(function (element) {
                  _this8.editingPorts.push(_this8.editingDeviceSettings.ports[element]);
                });
              },
              error: function error(_error4) {
                _this8.deviceLoading = false;
                var message = "Unable to load settings for the Device " + _this8.editingDevice.mac + "... ";

                if ("error" in _error4) {
                  message += _error4["error"]["message"];
                }

                _this8.openError(message);
              }
            });
          }
        }, {
          key: "_discardDevice",
          value: function _discardDevice() {
            this.editingDevice = null;
            this.editingDeviceSettings = null;
            this.editingPorts = [];
            this.editingPortNames = [];
            this.displayedPorts = {};

            this._discardPorts();
          }
        }, {
          key: "powerDraw",
          value: function powerDraw(member) {
            var percentage = member.poe.power_draw / member.poe.max_power * 100;
            return percentage;
          } //////////////////////////////////////////////////////////////////////////////
          /////           Ports Status
          //////////////////////////////////////////////////////////////////////////////

        }, {
          key: "_getPortStatus",
          value: function _getPortStatus() {
            var _this9 = this;

            this._http.post('/api/devices/portstatus/', {
              host: this.host,
              cookies: this.cookies,
              headers: this.headers,
              site_id: this.site_id,
              device_mac: this.editingDevice.mac
            }).subscribe({
              next: function next(data) {
                _this9.editingPortsStatus = data.result;
              },
              error: function error(_error5) {
                _this9.deviceLoading = false;
                var message = "Unable to load ports status for the Device " + _this9.editingDevice.mac + "... ";

                if ("error" in _error5) {
                  message += _error5["error"]["message"];
                }

                _this9.openError(message);
              }
            });
          } //////////////////////////////////////////////////////////////////////////////
          /////           EDIT Port
          //////////////////////////////////////////////////////////////////////////////

        }, {
          key: "selectPortFromSwitchView",
          value: function selectPortFromSwitchView(portName) {
            var port = this.editingDeviceSettings.ports[portName];
            this.selectPort(port);
          }
        }, {
          key: "selectPort",
          value: function selectPort(port) {
            if (this.editingPorts.includes(port)) {
              this._deletePort(port);

              if (this.editingPorts.length == 1) {
                this._setPortFields(this.editingPorts[0]);
              }
            } else {
              this._addPort(port);

              if (this.editingPorts.length == 1) {
                this._setPortFields(this.editingPorts[0]);
              } else if (this.editingPorts.length == 2) {
                this._setDefaultPortFielts();
              }
            }
          } // ADD or REMOVE ports from the editing list

        }, {
          key: "_addPort",
          value: function _addPort(port) {
            this.editingPorts.push(port);
            this.editingPortNames.push(port.port);
          }
        }, {
          key: "_deletePort",
          value: function _deletePort(port) {
            var index = this.editingPorts.indexOf(port);
            this.editingPorts.splice(index, 1);
            var indexName = this.editingPortNames.indexOf(port.port);
            this.editingPortNames.splice(indexName, 1);

            if (this.editingPorts.length == 0) {
              this._discardPorts();
            }
          }
        }, {
          key: "savePorts",
          value: function savePorts() {
            var _this10 = this;

            this.editingPorts.forEach(function (element) {
              element["new_conf"] = {
                "mode": _this10.frmPort.get("mode").value,
                "all_networks": _this10.frmPort.get("all_networks").value,
                "networks": _this10.frmPort.get("networks").value,
                "port_network": _this10.frmPort.get("port_network").value,
                "port_auth": _this10.frmPort.get("port_auth").value,
                "enable_mac_auth": _this10.frmPort.get("enable_mac_auth").value,
                "guest_network": _this10.frmPort.get("guest_network").value,
                "bypass_auth_when_server_down": _this10.frmPort.get("bypass_auth_when_server_down").value,
                "autoneg": _this10.frmPort.get("autoneg").value,
                "mac_limit": _this10.frmPort.get("mac_limit").value,
                "stp_edge": _this10.frmPort.get("stp_edge").value,
                "mtu": _this10.frmPort.get("mtu").value,
                "disabled": _this10.frmPort.get("enabled").value == false,
                "poe_disabled": _this10.frmPort.get("poe").value == false,
                "description": _this10.frmPort.get("description").value,
                "voip_network": _this10.frmPort.get("voip_network").value,
                "storm_control": _this10.frmPort.get("storm_control").value,
                "duplex": _this10.frmPort.get("duplex").value,
                "speed": _this10.frmPort.get("speed").value
              };
            });

            if (this.frmPort.valid) {
              this.topBarLoading = true;
              var body = {
                host: this.host,
                cookies: this.cookies,
                headers: this.headers,
                site_id: this.site_id,
                org_id: this.org_id,
                port_config: this.editingPorts,
                device_id: this.editingDevice.id
              };

              this._http.post('/api/devices/update/', body).subscribe({
                next: function next(data) {
                  _this10.topBarLoading = false; //this.updateFrmDeviceValues(data.result)

                  _this10._getDeviceSettings();

                  _this10.openSnackBar("Device " + _this10.editingDevice.mac + " successfully updated", "Done");
                },
                error: function error(_error6) {
                  _this10.topBarLoading = false;
                  var message = "Unable to save changes on Device " + _this10.editingDevice.mac + "... ";

                  if ("error" in _error6) {
                    message += _error6["error"]["message"];
                  }

                  _this10.openError(message);
                }
              });
            }
          } // Reset the ports selection and form

        }, {
          key: "_discardPorts",
          value: function _discardPorts() {
            this.editingPorts = [];
            this.editingPortNames = [];
            this.frmPort.reset();
          } // Set Port Form values

        }, {
          key: "_setDefaultPortFielts",
          value: function _setDefaultPortFielts() {
            this.updateFrmDeviceValues(this.defaultConfig);
          }
        }, {
          key: "_setPortFields",
          value: function _setPortFields(port) {
            var port_usage = ""; // copy default values

            var config = Object.assign({}, this.defaultConfig); // getting the port_usage profile name at the switch level, and, if none, at the site level

            if ("usage" in port.device) {
              port_usage = port.device.usage;
            } else if ("usage" in port.site) {
              port_usage = port.site.usage;
            } // if there is a configured port_usage, retrieving its configuration at the switch level, and
            // if none, at the site level


            if (port_usage) {
              var port_config = {};

              if (port_usage in this.editingDeviceSettings.device.port_usages) {
                port_config = this.editingDeviceSettings.device.port_usages[port_usage];
              } else if (port_usage in this.editingDeviceSettings.site.port_usages) {
                port_config = this.editingDeviceSettings.site.port_usages[port_usage];
              } // setting the config object with the port_usage settings


              for (var key in port_config) {
                config[key] = port_config[key];
              }
            }

            this.updateFrmDeviceValues(config);
          }
        }, {
          key: "canbeChecked",
          value: function canbeChecked(portName) {
            return this.editingPortNames.includes(portName);
          } //////////////////////////////////////////////////////////////////////////////
          /////           COMMON
          //////////////////////////////////////////////////////////////////////////////

        }, {
          key: "updateFrmDeviceValues",
          value: function updateFrmDeviceValues(config) {
            this.frmPort.reset();
            this.frmPort.controls["port_network"].setValue(config.port_network);
            this.frmPort.controls["autoneg"].setValue(config.disable_autoneg == false);
            this.frmPort.controls["enabled"].setValue(config.disabled == false);
            this.frmPort.controls["poe"].setValue(config.poe_disabled == false);

            if (config.disable_autoneg == true) {
              this.frmPort.controls["duplex"] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                value: config.duplex,
                disabled: true
              });
              this.frmPort.controls["speed"] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                value: config.speed,
                disabled: true
              });
            } else {
              this.frmPort.controls["speed"].setValue(config.speed);
              this.frmPort.controls["duplex"].setValue(config.duplex);
            }
          }
        }, {
          key: "sortList",
          value: function sortList(data, attribute) {
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
        }, {
          key: "applyFilter",
          value: function applyFilter(event) {
            var filterValue = event.target.value.trim().toLowerCase();
            this.filteredDevicesDatabase.filter = filterValue.trim().toLowerCase();

            if (this.filteredDevicesDatabase.paginator) {
              this.filteredDevicesDatabase.paginator.firstPage();
            }
          }
        }, {
          key: "applyPortFilter",
          value: function applyPortFilter(event) {
            var filterValue = event.target.value.trim().toLowerCase();
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
        }, {
          key: "back",
          value: function back() {
            this._router.navigate(["/select"]);
          } //////////////////////////////////////////////////////////////////////////////
          /////           DIALOG BOXES
          //////////////////////////////////////////////////////////////////////////////
          // ERROR

        }, {
          key: "openError",
          value: function openError(message) {
            var dialogRef = this._dialog.open(_common_common_error__WEBPACK_IMPORTED_MODULE_3__["ErrorDialog"], {
              data: message
            });
          } // SNACK BAR

        }, {
          key: "openSnackBar",
          value: function openSnackBar(message, action) {
            this._snackBar.open(message, action, {
              duration: 5000,
              horizontalPosition: "center",
              verticalPosition: "top"
            });
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_connector_service__WEBPACK_IMPORTED_MODULE_8__["ConnectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]));
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        viewQuery: function DashboardComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 17,
        vars: 8,
        consts: [["fxLayout", "column", "fxLayoutAlign", "space-between stretch", 1, "max90vh", 2, "width", "20em", "min-width", "20em"], ["fxLayout", "column", 1, "psk-table-container"], ["mat-table", "", 2, "background", "none", 3, "dataSource"], ["matColumnDef", "device"], ["mat-header-cell", "", "fxLayout", "column", "fxLayoutAlign", "space-between stretch", "style", "padding-right: 0; padding-left: 0; ", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [2, "background", "none", 3, "pageSizeOptions"], ["fxLayou", "row", "fxLayoutAlign", "start center", 2, "margin", "1em"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["fxLayout", "column", "fxLayoutAlign", "center stretch", "fxFlex", "", 1, "mat-elevation-z24", "max90vh", 2, "margin", "0 1em", "padding", "0"], ["style", "text-align: center;font-size: large;color: gray;", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center", "class", "", 4, "ngIf"], ["fxFlex", "", "fxLayout", "row", "style", "height: 100%;", 4, "ngIf"], ["mat-header-cell", "", "fxLayout", "column", "fxLayoutAlign", "space-between stretch", 2, "padding-right", "0", "padding-left", "0"], ["fxLayout", "row", 2, "margin-left", "24px"], ["matInput", "", "placeholder", "Ex. switch name", 3, "keyup"], ["input", ""], ["mat-button", "", 2, "height", "100%", "margin", "auto", 3, "disabled", "click"], ["matTooltip", "Refresh list", "aria-label", "Refresh list"], ["mode", "indeterminate", "color", "accent", 4, "ngIf"], ["style", "width: 100%; height: 4px; background-color: rgb(111 157 43);", 4, "ngIf"], ["mode", "indeterminate", "color", "accent"], [2, "width", "100%", "height", "4px", "background-color", "rgb(111 157 43)"], ["mat-cell", "", 3, "ngClass"], ["role", "button", "fxLayout", "row", "fxLayoutAlign", "start stretch", 1, "device", 2, "cursor", "pointer", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["aria-hidden", "false", 3, "ngStyle", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", "fxFlex", "", 2, "margin-left", "2em"], [4, "ngIf"], [2, "color", "gray", "font-weight", "lighter"], ["aria-hidden", "false", 3, "ngStyle"], ["mat-header-row", ""], ["mat-row", ""], [2, "text-align", "center", "font-size", "large", "color", "gray"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, ""], ["color", "accent"], ["fxFlex", "", "fxLayout", "row", 2, "height", "100%"], ["matColumnDef", "ports", "fxLayout", "column"], [2, "margin-left", "1em"], [2, "overflow", "auto"], ["class", "selectable", 3, "ngClass", 4, "ngFor", "ngForOf"], ["fxFlex", "", "fxLayout", "column", 1, "no-cursor", 2, "margin", "1em"], ["mat-dialog-content", "", "fxLayout", "column", "fxLayoutAlign", "space-around center"], ["style", "margin-bottom: 0em;", 4, "ngFor", "ngForOf"], ["mat-dialog-content", "", "fxLayout", "column", "fxLayoutAlign", "start stretch"], ["style", "margin: 1em;", "fxLayout", "column", "fxLayoutAlign", "space-between stretch", 4, "ngIf"], ["mat-dialog-actions", "", "style", "justify-content: space-around;", "fxLayout", "row", 4, "ngIf"], [1, "selectable", 3, "ngClass"], ["role", "button", "fxLayout", "row", "fxLayoutAlign", "space-between stretch", 1, "device", 2, "cursor", "pointer"], ["fxLayout", "row", 2, "font-weight", "lighter", "padding", "0.5em", "border-bottom", "solid 1px lightgray", "width", "100%"], ["fxFill", "", 1, "expand-checkbox", 3, "checked", "change"], [2, "margin-bottom", "0em"], ["fxLayout", "column", "fxLayoutAlign", "start start", 1, "switch"], [2, "font-weight", "lighter"], ["fxLayout", "row", "fxLayoutAlign", "start stretch"], ["fxLayoutAlign", "center center", 2, "font-weight", "lighter", "font-size", "larger", "height", "100%"], [1, "ports-container"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxFlex", "grow", 1, "ports-text"], [2, "width", "60px", "height", "20px", "text-align", "center"], ["style", "cursor: pointer; z-index: 10;", 4, "ngFor", "ngForOf"], [2, "cursor", "pointer", "z-index", "10"], [1, "normal-port", 3, "matTooltip", "ngClass", "click"], ["fxLayout", "column", "fxLayoutAlign", "space-between stretch", 2, "margin", "1em"], ["fxLayout", "row"], ["inset", "true", 2, "margin", "1em"], ["fxFlex", "auto", 1, "no-cursor", 2, "color", "black", "font-weight", "light", "width", "30em", "text-align", "center"], [2, "margin", "0 1em"], [1, "member-details"], ["fxLayout", "row", 2, "margin-top", "1em"], ["fxFlex", "auto", 1, "no-cursor", 2, "color", "black", "font-weight", "light", "width", "20em", "text-align", "center"], ["fxLayout", "row", "fxLayoutAlign", "start"], ["fxLayoutGap", "", "class", "mat-elevation-z2", "style", "margin:1em;", 4, "ngFor", "ngForOf"], ["fxLayoutGap", "", 1, "mat-elevation-z2", 2, "margin", "1em"], ["fxLayout", "row", "fxLayoutAlign", "start center", 4, "ngFor", "ngForOf"], ["aria-hidden", "false", "inline", "true", 2, "color", "#6f9d2b", "margin-right", "1em"], ["aria-hidden", "false", "inline", "true", 2, "color", "red", "margin-right", "1em"], ["fxLayout", "row", 2, "margin", "1em"], ["class", "no-cursor", "style", "color: black; font-weight: light; width: 20em; text-align: center;", "fxFlex", "auto", 4, "ngIf"], ["fxLayout", "column", 1, "create-form", 3, "formGroup"], ["fxLayout", "column", 1, "mist-space-around"], ["formControlName", "enabled"], ["fxLayout", "column", 1, "mist-space"], ["formControlName", "poe"], ["appearance", "outline", 1, "mist-space"], ["formControlName", "port_network"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "autoneg"], [1, "mist-space"], ["appearance", "outline"], ["formControlName", "speed", 3, "disabled"], ["value", "auto"], ["value", "10m"], ["value", "100m"], ["value", "1g"], ["value", "2.5g"], ["value", "5g"], ["formControlName", "duplex", 3, "disabled"], ["value", "full"], ["value", "half"], [3, "value"], ["mat-dialog-actions", "", "fxLayout", "row", 2, "justify-content", "space-around"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "disabled", "click"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_th_5_Template, 12, 3, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_td_6_Template, 12, 9, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardComponent_tr_7_Template, 1, 0, "tr", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DashboardComponent_tr_8_Template, 1, 0, "tr", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-paginator", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_11_listener() {
              return ctx.back();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DashboardComponent_div_14_Template, 2, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DashboardComponent_div_15_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DashboardComponent_div_16_Template, 17, 7, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.filteredDevicesDatabase);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c4));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editingDevice && !ctx.deviceLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editingDevice && !ctx.deviceLoading);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltip"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBar"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__["DefaultStyleDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogContent"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckbox"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["FlexFillDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatOption"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogActions"]],
        pipes: [_src_app_common_common_pipes__WEBPACK_IMPORTED_MODULE_27__["MapToArrayPipe"], _src_app_common_common_pipes__WEBPACK_IMPORTED_MODULE_27__["StartsWithPipe"]],
        styles: [".max90vh[_ngcontent-%COMP%] {\n    height: calc(100vh - 80px);\n}\n\n.card-outer[_ngcontent-%COMP%] {\n    background-color: unset;\n    max-width: 1900px;\n    margin: auto;\n}\n\n.top-bar-container[_ngcontent-%COMP%] {\n    margin: 0 0 1em 0;\n}\n\n.top-bar[_ngcontent-%COMP%] {\n    background-color: white;\n    border-radius: 5px 5px 0 0;\n}\n\n.list[_ngcontent-%COMP%] {\n    margin: 1.34375em 1em 0;\n}\n\n.loading[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #ffffff9c;\n    border-radius: 5px;\n    z-index: 1000;\n}\n\n.loading[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin: auto;\n    align-self: center;\n}\n\n.button-container[_ngcontent-%COMP%] {\n    display: flex;\n    width: 300px;\n    justify-content: space-between;\n}\n\n.end[_ngcontent-%COMP%] {\n    justify-content: space-around !important;\n}\n\n.tooltip[_ngcontent-%COMP%] {\n    color: gray;\n}\n\n.tooltip[_ngcontent-%COMP%]:hover {\n    color: black;\n}\n\n\n\ntr.mat-row[_ngcontent-%COMP%], tr.mat-footer-row[_ngcontent-%COMP%] {\n    height: 2em;\n}\n\n.psk-table-container[_ngcontent-%COMP%] {\n    \n    \n    overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.psk-container[_ngcontent-%COMP%] {\n    border: none;\n    width: 100%;\n    min-width: 20em;\n    position: relative;\n    margin: auto;\n    border-radius: 0.3em;\n    max-width: 150em;\n}\n\n.psk-table-loading-shade[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 56px;\n    right: 0;\n    background: rgba(0, 0, 0, 0.15);\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.mist-space[_ngcontent-%COMP%] {\n    margin-left: 2em;\n    margin-right: 2em;\n}\n\n.mist-space-around[_ngcontent-%COMP%] {\n    margin: 2em;\n}\n\n.no-cursor[_ngcontent-%COMP%] {\n    cursor: default;\n}\n\n\n\n.mat-column-action[_ngcontent-%COMP%] {\n    width: 150px !important;\n}\n\n.edit[_ngcontent-%COMP%] {\n    background-color: #0d60aa !important;\n}\n\n.delete[_ngcontent-%COMP%] {\n    background-color: #f44336 !important;\n}\n\ntd[_ngcontent-%COMP%]:hover {\n    background-color: lightgrey;\n    transition: background-color 250ms ease-in-out;\n}\n\ntd[_ngcontent-%COMP%], div.selectable[_ngcontent-%COMP%] {\n    background-color: unset;\n    transition: background-color 250ms ease-in-out;\n}\n\ntd.selected[_ngcontent-%COMP%], div.selectable.selected[_ngcontent-%COMP%] {\n    background-color: lightgrey;\n    transition: background-color 250ms ease-in-out;\n}\n\n.compact-select[_ngcontent-%COMP%] {\n    margin: 1em 0 -1em;\n}\n\n\n\n.switch[_ngcontent-%COMP%] {\n    background-color: #fafafa;\n    border: solid 1px gray;\n    border-radius: 5px;\n    height: 100px;\n    padding: 10px 20px;\n    min-width: 930px;\n    max-width: 1000px;\n}\n\n\n\ndiv.ports-text[_ngcontent-%COMP%] {\n    -webkit-transform: rotate(-90deg);\n    -moz-transform: rotate(-90deg);\n    margin-right: -20px;\n}\n\nspan.port-text[_ngcontent-%COMP%] {\n    height: 60px;\n    width: 60px;\n}\n\n.ports-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    height: 60px;\n    align-content: flex-start;\n}\n\n.normal-port[_ngcontent-%COMP%] {\n    background-color: #ddd;\n    transition: box-shadow background-color 250ms ease-in-out;\n    height: 20px;\n    width: 20px;\n    border-radius: 4px;\n    margin: 2px 3px;\n    border: 1px solid transparent;\n    box-shadow: none;\n}\n\n.port-up[_ngcontent-%COMP%] {\n    background-color: #6f9d2b;\n}\n\n.selected-port[_ngcontent-%COMP%] {\n    border: solid 1px black;\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n    transition: box-shadow background-color 250ms ease-in-out;\n}\n\n\n\nmat-checkbox.expand-checkbox[_ngcontent-%COMP%] {\n    margin: -0.5em\n}\n\n  mat-checkbox.expand-checkbox .mat-checkbox-layout {\n    width: 100%;\n}\n\n  mat-checkbox.expand-checkbox .mat-checkbox-inner-container {\n    margin-left: 1em;\n}\n\n  mat-checkbox.expand-checkbox .mat-checkbox-label {\n    width: 100%;\n    margin: 0.5em 0 0.5em 0;\n}\n\n\n\n.member-details[_ngcontent-%COMP%] {}\n\n.member-details[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    text-align: start;\n    padding-right: 1em;\n    font-weight: normal;\n    vertical-align: top;\n}\n\n.member-details[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    text-align: start;\n    font-weight: lighter;\n    color: gray;\n}\n\n.member-details[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFHQSxjQUFjOztBQUVkOztJQUVJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixRQUFRO0lBQ1IsK0JBQStCO0lBQy9CLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUdBLGtCQUFrQjs7QUFFbEI7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsOENBQThDO0FBQ2xEOztBQUVBOztJQUVJLHVCQUF1QjtJQUN2Qiw4Q0FBOEM7QUFDbEQ7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFHQSxXQUFXOztBQUVYO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUdBLFVBQVU7O0FBRVY7SUFDSSxpQ0FBaUM7SUFDakMsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHlEQUF5RDtJQUN6RCxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QiwwSEFBMEg7SUFDMUgseURBQXlEO0FBQzdEOztBQUdBLDBCQUEwQjs7QUFFMUI7SUFDSTtBQUNKOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFHQSxtQkFBbUI7O0FBRW5CLGlCQUFpQjs7QUFFakI7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXg5MHZoIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcbn1cblxuLmNhcmQtb3V0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICAgIG1heC13aWR0aDogMTkwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLnRvcC1iYXItY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDAgMCAxZW0gMDtcbn1cblxuLnRvcC1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xufVxuXG4ubGlzdCB7XG4gICAgbWFyZ2luOiAxLjM0Mzc1ZW0gMWVtIDA7XG59XG5cbi5sb2FkaW5nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY5YztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgei1pbmRleDogMTAwMDtcbn1cblxuLmxvYWRpbmcgZGl2IHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZW5kIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xufVxuXG4udG9vbHRpcCB7XG4gICAgY29sb3I6IGdyYXk7XG59XG5cbi50b29sdGlwOmhvdmVyIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cblxuLyogU3RydWN0dXJlICovXG5cbnRyLm1hdC1yb3csXG50ci5tYXQtZm9vdGVyLXJvdyB7XG4gICAgaGVpZ2h0OiAyZW07XG59XG5cbi5wc2stdGFibGUtY29udGFpbmVyIHtcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG4gICAgLyogbWF4LWhlaWdodDogNDAwcHg7ICovXG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnBzay1jb250YWluZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDIwZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcbiAgICBtYXgtd2lkdGg6IDE1MGVtO1xufVxuXG4ucHNrLXRhYmxlLWxvYWRpbmctc2hhZGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDU2cHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1pc3Qtc3BhY2Uge1xuICAgIG1hcmdpbi1sZWZ0OiAyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XG59XG5cbi5taXN0LXNwYWNlLWFyb3VuZCB7XG4gICAgbWFyZ2luOiAyZW07XG59XG5cbi5uby1jdXJzb3Ige1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuXG4vKiBDb2x1bW4gV2lkdGhzICovXG5cbi5tYXQtY29sdW1uLWFjdGlvbiB7XG4gICAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lZGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ2MGFhICFpbXBvcnRhbnQ7XG59XG5cbi5kZWxldGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcbn1cblxudGQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDI1MG1zIGVhc2UtaW4tb3V0O1xufVxuXG50ZCxcbmRpdi5zZWxlY3RhYmxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDI1MG1zIGVhc2UtaW4tb3V0O1xufVxuXG50ZC5zZWxlY3RlZCxcbmRpdi5zZWxlY3RhYmxlLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyNTBtcyBlYXNlLWluLW91dDtcbn1cblxuLmNvbXBhY3Qtc2VsZWN0IHtcbiAgICBtYXJnaW46IDFlbSAwIC0xZW07XG59XG5cblxuLyogU1dJVENIICovXG5cbi5zd2l0Y2gge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JheTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgbWluLXdpZHRoOiA5MzBweDtcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbn1cblxuXG4vKiBQT1JUUyAqL1xuXG5kaXYucG9ydHMtdGV4dCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xufVxuXG5zcGFuLnBvcnQtdGV4dCB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiA2MHB4O1xufVxuXG4ucG9ydHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4ubm9ybWFsLXBvcnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyBiYWNrZ3JvdW5kLWNvbG9yIDI1MG1zIGVhc2UtaW4tb3V0O1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luOiAycHggM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5wb3J0LXVwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmY5ZDJiO1xufVxuXG4uc2VsZWN0ZWQtcG9ydCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyBiYWNrZ3JvdW5kLWNvbG9yIDI1MG1zIGVhc2UtaW4tb3V0O1xufVxuXG5cbi8qIE1BVCBDSEVDS0JPWCBFWFBBTkRFRCAqL1xuXG5tYXQtY2hlY2tib3guZXhwYW5kLWNoZWNrYm94IHtcbiAgICBtYXJnaW46IC0wLjVlbVxufVxuXG46Om5nLWRlZXAgbWF0LWNoZWNrYm94LmV4cGFuZC1jaGVja2JveCAubWF0LWNoZWNrYm94LWxheW91dCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVlcCBtYXQtY2hlY2tib3guZXhwYW5kLWNoZWNrYm94IC5tYXQtY2hlY2tib3gtaW5uZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xufVxuXG46Om5nLWRlZXAgbWF0LWNoZWNrYm94LmV4cGFuZC1jaGVja2JveCAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAuNWVtIDAgMC41ZW0gMDtcbn1cblxuXG4vKiBNRU1CRVIgREVUQUlMUyAqL1xuXG4ubWVtYmVyLWRldGFpbHMge31cblxuLm1lbWJlci1kZXRhaWxzIHRoIHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ubWVtYmVyLWRldGFpbHMgdGQge1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIGNvbG9yOiBncmF5O1xufVxuXG4ubWVtYmVyLWRldGFpbHMgdGQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
          }, {
            type: _connector_service__WEBPACK_IMPORTED_MODULE_8__["ConnectorService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Mist Switch Operator';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 5,
        vars: 0,
        consts: [["fxLayout", "row", "fxLayoutAlign", "start center", 2, "background-color", "rgb(236 236 236)", "color", "gray"], ["height", "100%", "alt", "Mist Logo", "src", "data:image/png;base64,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"], [2, "margin-left", "1em", "font-weight", "lighter"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mist Switch Operator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */", "[_nghost-%COMP%] {\n        font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-size: 14px;\n        color: #333;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n    \n    h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n        margin: 8px 0;\n    }\n    \n    p[_ngcontent-%COMP%] {\n        margin: 0;\n    }\n    \n    .spacer[_ngcontent-%COMP%] {\n        flex: 1;\n    }\n    \n    .toolbar[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        height: 40px;\n        display: flex;\n        align-items: center;\n        background-color: #0e62ad;\n        \n        color: white;\n        font-weight: 600;\n    }\n    \n    .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        margin: 0 16px;\n    }\n    \n    .content[_ngcontent-%COMP%] {\n        display: flex;\n        margin: 82px auto 32px;\n        padding: 0 16px;\n        max-width: 960px;\n        flex-direction: column;\n        align-items: center;\n    }\n    \n    svg.material-icons[_ngcontent-%COMP%] {\n        height: 24px;\n        width: auto;\n    }\n    \n    svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n        margin-right: 8px;\n    }\n    \n    .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n        fill: #888;\n    }\n    \n    .card-container[_ngcontent-%COMP%] {\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        margin-top: 16px;\n    }\n    \n    .card[_ngcontent-%COMP%] {\n        border-radius: 4px;\n        border: 1px solid #eee;\n        background-color: #fafafa;\n        height: 40px;\n        width: 200px;\n        margin: 0 8px 16px;\n        padding: 16px;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        transition: all 0.2s ease-in-out;\n        line-height: 24px;\n    }\n    \n    .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n        margin-right: 0;\n    }\n    \n    .card.card-small[_ngcontent-%COMP%] {\n        height: 16px;\n        width: 168px;\n    }\n    \n    .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n        cursor: pointer;\n    }\n    \n    .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n        transform: translateY(-3px);\n        box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n    }\n    \n    .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n        fill: rgb(105, 103, 103);\n    }\n    \n    .card.highlight-card[_ngcontent-%COMP%] {\n        background-color: #1976d2;\n        color: white;\n        font-weight: 600;\n        border: none;\n        width: auto;\n        min-width: 30%;\n        position: relative;\n    }\n    \n    .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        margin-left: 60px;\n    }\n    \n    svg#rocket[_ngcontent-%COMP%] {\n        width: 80px;\n        position: absolute;\n        left: -10px;\n        top: -24px;\n    }\n    \n    svg#rocket-smoke[_ngcontent-%COMP%] {\n        height: calc(100vh - 95px);\n        position: absolute;\n        top: 10px;\n        right: 180px;\n        z-index: -10;\n    }\n    \n    a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n        color: #1976d2;\n        text-decoration: none;\n    }\n    \n    a[_ngcontent-%COMP%]:hover {\n        color: #125699;\n    }\n    \n    .terminal[_ngcontent-%COMP%] {\n        position: relative;\n        width: 80%;\n        max-width: 600px;\n        border-radius: 6px;\n        padding-top: 45px;\n        margin-top: 8px;\n        overflow: hidden;\n        background-color: rgb(15, 15, 16);\n    }\n    \n    .terminal[_ngcontent-%COMP%]::before {\n        content: \"\\2022 \\2022 \\2022\";\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 4px;\n        background: rgb(58, 58, 58);\n        color: #c2c3c4;\n        width: 100%;\n        font-size: 2rem;\n        line-height: 0;\n        padding: 14px 0;\n        text-indent: 4px;\n    }\n    \n    .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n        font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n        color: white;\n        padding: 0 1rem 1rem;\n        margin: 0;\n    }\n    \n    .circle-link[_ngcontent-%COMP%] {\n        height: 40px;\n        width: 40px;\n        border-radius: 40px;\n        margin: 8px;\n        background-color: white;\n        border: 1px solid #eeeeee;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        cursor: pointer;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n        transition: 1s ease-out;\n    }\n    \n    .circle-link[_ngcontent-%COMP%]:hover {\n        transform: translateY(-0.25rem);\n        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n    }\n    \n    footer[_ngcontent-%COMP%] {\n        margin-top: 8px;\n        display: flex;\n        align-items: center;\n        line-height: 20px;\n    }\n    \n    footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: center;\n    }\n    \n    .github-star-badge[_ngcontent-%COMP%] {\n        color: #24292e;\n        display: flex;\n        align-items: center;\n        font-size: 12px;\n        padding: 3px 10px;\n        border: 1px solid rgba(27, 31, 35, .2);\n        border-radius: 3px;\n        background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n        margin-left: 4px;\n        font-weight: 600;\n        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n    }\n    \n    .github-star-badge[_ngcontent-%COMP%]:hover {\n        background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n        border-color: rgba(27, 31, 35, .35);\n        background-position: -.5em;\n    }\n    \n    .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n        height: 16px;\n        width: 16px;\n        margin-right: 4px;\n    }\n    \n    svg#clouds[_ngcontent-%COMP%] {\n        position: fixed;\n        bottom: -160px;\n        left: -230px;\n        z-index: -10;\n        width: 1920px;\n    }\n    \n    \n    @media screen and (max-width: 767px) {\n        .card-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n            width: 100%;\n        }\n        .card[_ngcontent-%COMP%]:not(.highlight-card) {\n            height: 16px;\n            margin: 8px 0;\n        }\n        .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n            margin-left: 72px;\n        }\n        svg#rocket-smoke[_ngcontent-%COMP%] {\n            right: 120px;\n            transform: rotate(-5deg);\n        }\n    }\n    \n    @media screen and (max-width: 575px) {\n        svg#rocket-smoke[_ngcontent-%COMP%] {\n            display: none;\n            visibility: hidden;\n        }\n    }\n    \n    footer[_ngcontent-%COMP%] {\n        position: absolute;\n        bottom: 0px;\n        right: 0px\n    }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_google_maps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/google-maps */
      "3sZV");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _src_app_common_common_pipes__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @src/app/common/common-pipes */
      "sIjS");
      /* harmony import */


      var _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @src/app/app-routing.module */
      "vY5A");
      /* harmony import */


      var _src_app_app_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @src/app/app.component */
      "Sy1n");
      /* harmony import */


      var _src_app_login_login_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @src/app/login/login.component */
      "vtpD");
      /* harmony import */


      var _src_app_login_login_2FA__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @src/app/login/login-2FA */
      "+2Ah");
      /* harmony import */


      var _src_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @src/app/dashboard/dashboard.component */
      "QX6l");
      /* harmony import */


      var _src_app_common_common_claim__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @src/app/common/common-claim */
      "6bIR");
      /* harmony import */


      var _src_app_common_common_unclaim__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @src/app/common/common-unclaim */
      "pxKM");
      /* harmony import */


      var _src_app_common_common_error__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @src/app/common/common-error */
      "Popb");
      /* harmony import */


      var _src_app_common_common_warning__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @src/app/common/common-warning */
      "auAq");
      /* harmony import */


      var _src_app_common_common_claim_details__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @src/app/common/common-claim-details */
      "hzNB");
      /* harmony import */


      var _src_app_org_org_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @src/app/org/org.component */
      "IMNj");
      /* harmony import */


      var _src_app_common_common_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @src/app/common/common.component */
      "dPok");
      /* harmony import */


      var _src_app_auto_generated_auto_generated_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @src/app/auto-generated/auto-generated.component */
      "4s4N");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @angular-material-extensions/google-maps-autocomplete */
      "BhjI");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! @agm/core */
      "pxUr");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppModule = // Diagnostic only: inspect router configuration
      function AppModule(router) {
        _classCallCheck(this, AppModule);

        // Use a custom replacer to display function names in the route configs
        var replacer = function replacer(key, value) {
          return typeof value === 'function' ? value.name : value;
        };
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_30__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_45__["Router"]));
        },
        providers: [{
          provide: _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
          useValue: {
            color: 'accent'
          }
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_29__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_5__["GoogleMapsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientJsonpModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__["MatProgressBarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_42__["NgbModule"], _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_43__["MatGoogleMapsAutocompleteModule"], _agm_core__WEBPACK_IMPORTED_MODULE_44__["AgmCoreModule"].forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_30__["AppComponent"], _src_app_login_login_component__WEBPACK_IMPORTED_MODULE_31__["LoginComponent"], _src_app_login_login_2FA__WEBPACK_IMPORTED_MODULE_32__["TwoFactorDialog"], _src_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_33__["DashboardComponent"], _src_app_common_common_claim__WEBPACK_IMPORTED_MODULE_34__["ClaimDialog"], _src_app_common_common_unclaim__WEBPACK_IMPORTED_MODULE_35__["UnclaimDialog"], _src_app_common_common_error__WEBPACK_IMPORTED_MODULE_36__["ErrorDialog"], _src_app_common_common_warning__WEBPACK_IMPORTED_MODULE_37__["WarningDialog"], _src_app_common_common_claim_details__WEBPACK_IMPORTED_MODULE_38__["ClaimDetailsDialog"], _src_app_org_org_component__WEBPACK_IMPORTED_MODULE_39__["OrgComponent"], _src_app_common_common_component__WEBPACK_IMPORTED_MODULE_40__["CommonComponent"], _src_app_common_common_pipes__WEBPACK_IMPORTED_MODULE_28__["StartsWithPipe"], _src_app_common_common_pipes__WEBPACK_IMPORTED_MODULE_28__["MapToArrayPipe"], _src_app_auto_generated_auto_generated_component__WEBPACK_IMPORTED_MODULE_41__["AutoGeneratedComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_29__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_5__["GoogleMapsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientJsonpModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__["MatProgressBarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_42__["NgbModule"], _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_43__["MatGoogleMapsAutocompleteModule"], _agm_core__WEBPACK_IMPORTED_MODULE_44__["AgmCoreModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_30__["AppComponent"], _src_app_login_login_component__WEBPACK_IMPORTED_MODULE_31__["LoginComponent"], _src_app_login_login_2FA__WEBPACK_IMPORTED_MODULE_32__["TwoFactorDialog"], _src_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_33__["DashboardComponent"], _src_app_common_common_claim__WEBPACK_IMPORTED_MODULE_34__["ClaimDialog"], _src_app_common_common_unclaim__WEBPACK_IMPORTED_MODULE_35__["UnclaimDialog"], _src_app_common_common_error__WEBPACK_IMPORTED_MODULE_36__["ErrorDialog"], _src_app_common_common_warning__WEBPACK_IMPORTED_MODULE_37__["WarningDialog"], _src_app_common_common_claim_details__WEBPACK_IMPORTED_MODULE_38__["ClaimDetailsDialog"], _src_app_org_org_component__WEBPACK_IMPORTED_MODULE_39__["OrgComponent"], _src_app_common_common_component__WEBPACK_IMPORTED_MODULE_40__["CommonComponent"], _src_app_common_common_pipes__WEBPACK_IMPORTED_MODULE_28__["StartsWithPipe"], _src_app_common_common_pipes__WEBPACK_IMPORTED_MODULE_28__["MapToArrayPipe"], _src_app_auto_generated_auto_generated_component__WEBPACK_IMPORTED_MODULE_41__["AutoGeneratedComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_29__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_5__["GoogleMapsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientJsonpModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__["MatProgressBarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_42__["NgbModule"], _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_43__["MatGoogleMapsAutocompleteModule"], _agm_core__WEBPACK_IMPORTED_MODULE_44__["AgmCoreModule"].forRoot()],
            providers: [{
              provide: _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
              useValue: {
                color: 'accent'
              }
            }],
            bootstrap: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_30__["AppComponent"]]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_45__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "auAq":
    /*!******************************************!*\
      !*** ./src/app/common/common-warning.ts ***!
      \******************************************/

    /*! exports provided: WarningDialog */

    /***/
    function auAq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WarningDialog", function () {
        return WarningDialog;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function WarningDialog_li_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r2.reason);
        }
      }

      function WarningDialog_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Warning:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Changes may have impact on existing users, especially for users using PSK without VLAN. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var WarningDialog = /*#__PURE__*/function () {
        function WarningDialog(dialogRef, data) {
          _classCallCheck(this, WarningDialog);

          this.dialogRef = dialogRef;
          this.data = data;
        }

        _createClass(WarningDialog, [{
          key: "ok",
          value: function ok() {
            this.dialogRef.close(true);
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.dialogRef.close();
          }
        }]);

        return WarningDialog;
      }();

      WarningDialog.ɵfac = function WarningDialog_Factory(t) {
        return new (t || WarningDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      WarningDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WarningDialog,
        selectors: [["common-warning"]],
        decls: 16,
        vars: 3,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [2, "margin", "2em 0em 0", "font-weight", "bold"], [2, "list-style", "none", "padding", "0"], [4, "ngFor", "ngForOf"], ["fxLayout", "column", "style", "color: red;justify-content: center;margin: 2em 0 0;", 4, "ngIf"], ["mat-dialog-actions", "", "fxLayout", "row", 2, "justify-content", "space-around"], ["mat-raised-button", "", 3, "click"], ["mat-button", "", "color", "accent", 3, "click"], ["fxLayout", "column", 2, "color", "red", "justify-content", "center", "margin", "2em 0 0"], [2, "font-weight", "bold", "margin", "auto"], [2, "margin", "auto"]],
        template: function WarningDialog_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Be careful");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Details:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WarningDialog_li_9_Template, 2, 1, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WarningDialog_div_10_Template, 5, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.text, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.vlan_check);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.bigWarning == true);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WarningDialog, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'common-warning',
            templateUrl: 'common-warning.html'
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "dPok":
    /*!********************************************!*\
      !*** ./src/app/common/common.component.ts ***!
      \********************************************/

    /*! exports provided: CommonComponent */

    /***/
    function dPok(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonComponent", function () {
        return CommonComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CommonComponent = /*#__PURE__*/function () {
        function CommonComponent() {
          _classCallCheck(this, CommonComponent);
        }

        _createClass(CommonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CommonComponent;
      }();

      CommonComponent.ɵfac = function CommonComponent_Factory(t) {
        return new (t || CommonComponent)();
      };

      CommonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tb24uY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-common',
            templateUrl: './common.component.html',
            styleUrls: ['./common.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "hzNB":
    /*!************************************************!*\
      !*** ./src/app/common/common-claim-details.ts ***!
      \************************************************/

    /*! exports provided: ClaimDetailsDialog */

    /***/
    function hzNB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClaimDetailsDialog", function () {
        return ClaimDetailsDialog;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var ClaimDetailsDialog = /*#__PURE__*/function () {
        function ClaimDetailsDialog(dialogRef, data) {
          _classCallCheck(this, ClaimDetailsDialog);

          this.dialogRef = dialogRef;
          this.data = data;
          this.details = this.data;
        }

        _createClass(ClaimDetailsDialog, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.details);
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.dialogRef.close();
          }
        }]);

        return ClaimDetailsDialog;
      }();

      ClaimDetailsDialog.ɵfac = function ClaimDetailsDialog_Factory(t) {
        return new (t || ClaimDetailsDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      ClaimDetailsDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ClaimDetailsDialog,
        selectors: [["common-claim-details"]],
        decls: 9,
        vars: 3,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", "fxLayout", "row", 2, "justify-content", "space-around"], ["mat-raised-button", "", "color", "accent", "cdkFocusInitial", "", 3, "click"]],
        template: function ClaimDetailsDialog_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Claim Result Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClaimDetailsDialog_Template_button_click_7_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx.details));
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClaimDetailsDialog, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'common-claim-details',
            templateUrl: 'common-claim-details.html'
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "l5d9":
    /*!**************************************!*\
      !*** ./src/app/connector.service.ts ***!
      \**************************************/

    /*! exports provided: ConnectorService */

    /***/
    function l5d9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConnectorService", function () {
        return ConnectorService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var ConnectorService = /*#__PURE__*/function () {
        function ConnectorService() {
          _classCallCheck(this, ConnectorService);

          this.headersSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.cookiesSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.hostSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
          this.selfSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.orgIdSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
          this.siteIdSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
          this.orgModeSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.googleApiKey = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
          this.headers = this.headersSource.asObservable();
          this.host = this.hostSource.asObservable();
          this.cookies = this.cookiesSource.asObservable();
          this.self = this.selfSource.asObservable();
          this.org_id = this.orgIdSource.asObservable();
          this.site_id = this.siteIdSource.asObservable();
          this.orgMode = this.orgModeSource.asObservable();
          this.google_api_key = this.googleApiKey.asObservable();
        }

        _createClass(ConnectorService, [{
          key: "headersSet",
          value: function headersSet(data) {
            this.headersSource.next(data);
          }
        }, {
          key: "cookiesSet",
          value: function cookiesSet(data) {
            this.cookiesSource.next(data);
          }
        }, {
          key: "hostSet",
          value: function hostSet(data) {
            this.hostSource.next(data);
          }
        }, {
          key: "selfSet",
          value: function selfSet(data) {
            this.selfSource.next(data);
          }
        }, {
          key: "orgIdSet",
          value: function orgIdSet(data) {
            this.orgIdSource.next(data);
          }
        }, {
          key: "siteIdSet",
          value: function siteIdSet(data) {
            this.siteIdSource.next(data);
          }
        }, {
          key: "orgModeSet",
          value: function orgModeSet(data) {
            this.orgModeSource.next(data);
          }
        }, {
          key: "googleApiKeySet",
          value: function googleApiKeySet(data) {
            this.googleApiKey.next(data);
          }
        }]);

        return ConnectorService;
      }();

      ConnectorService.ɵfac = function ConnectorService_Factory(t) {
        return new (t || ConnectorService)();
      };

      ConnectorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ConnectorService,
        factory: ConnectorService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConnectorService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "pxKM":
    /*!******************************************!*\
      !*** ./src/app/common/common-unclaim.ts ***!
      \******************************************/

    /*! exports provided: UnclaimDialog */

    /***/
    function pxKM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnclaimDialog", function () {
        return UnclaimDialog;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var UnclaimDialog = /*#__PURE__*/function () {
        function UnclaimDialog(dialogRef, data) {
          _classCallCheck(this, UnclaimDialog);

          this.dialogRef = dialogRef;
          this.data = data;
        }

        _createClass(UnclaimDialog, [{
          key: "confirm",
          value: function confirm(device_mac) {
            this.dialogRef.close(device_mac);
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.dialogRef.close();
          }
        }]);

        return UnclaimDialog;
      }();

      UnclaimDialog.ɵfac = function UnclaimDialog_Factory(t) {
        return new (t || UnclaimDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      UnclaimDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UnclaimDialog,
        selectors: [["common-unclaim"]],
        decls: 10,
        vars: 1,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", "fxLayout", "row", 2, "justify-content", "space-around"], ["mat-raised-button", "", 3, "click"], ["mat-button", "", 2, "color", "red !important", 3, "click"]],
        template: function UnclaimDialog_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete Device");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" This will delete the Device ", ctx.data.mac, ". Do you confirm?");
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnclaimDialog, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'common-unclaim',
            templateUrl: 'common-unclaim.html'
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "sIjS":
    /*!****************************************!*\
      !*** ./src/app/common/common-pipes.ts ***!
      \****************************************/

    /*! exports provided: StartsWithPipe, MapToArrayPipe */

    /***/
    function sIjS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StartsWithPipe", function () {
        return StartsWithPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapToArrayPipe", function () {
        return MapToArrayPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var StartsWithPipe = /*#__PURE__*/function () {
        function StartsWithPipe() {
          _classCallCheck(this, StartsWithPipe);
        }

        _createClass(StartsWithPipe, [{
          key: "transform",
          value: function transform(fullText, textMatch) {
            return fullText.startsWith(textMatch);
          }
        }]);

        return StartsWithPipe;
      }();

      StartsWithPipe.ɵfac = function StartsWithPipe_Factory(t) {
        return new (t || StartsWithPipe)();
      };

      StartsWithPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "startsWith",
        type: StartsWithPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartsWithPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'startsWith'
          }]
        }], null, null);
      })();

      var MapToArrayPipe = /*#__PURE__*/function () {
        function MapToArrayPipe() {
          _classCallCheck(this, MapToArrayPipe);
        }

        _createClass(MapToArrayPipe, [{
          key: "transform",
          value: function transform(value, args) {
            var arr = [];

            for (var key in value) {
              arr.push({
                key: key,
                value: value[key]
              });
            }

            return arr;
          }
        }]);

        return MapToArrayPipe;
      }();

      MapToArrayPipe.ɵfac = function MapToArrayPipe_Factory(t) {
        return new (t || MapToArrayPipe)();
      };

      MapToArrayPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "mapToArray",
        type: MapToArrayPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapToArrayPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'mapToArray'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "QX6l");
      /* harmony import */


      var _org_org_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./org/org.component */
      "IMNj");

      var routes = [{
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }, {
        path: 'select',
        component: _org_org_component__WEBPACK_IMPORTED_MODULE_4__["OrgComponent"]
      }, {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
      }, {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }, {
        path: '**',
        redirectTo: '/login'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              relativeLinkResolution: 'legacy'
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _login_2FA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login-2FA */
      "+2Ah");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _connector_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../connector.service */
      "l5d9");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function LoginComponent_mat_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var host_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", host_r4.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", host_r4.viewValue, " ");
        }
      }

      function LoginComponent_div_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_a_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r2.github_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function LoginComponent_a_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r3.docker_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(_formBuilder, _http, _router, _appService, _dialog, _platformLocation) {
          _classCallCheck(this, LoginComponent);

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
          this.hosts = [{
            value: 'api.mist.com',
            viewValue: 'US - manage.mist.com'
          }, {
            value: 'api.eu.mist.com',
            viewValue: 'EU - manage.eu.mist.com'
          }, {
            value: 'api.gc1.mist.com',
            viewValue: 'GCP - manage.gc1.mist.com'
          }]; // LOGIN FORM

          this.frmStepLogin = this._formBuilder.group({
            host: [''],
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
        } //// INIT ////


        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.frmStepLogin = this._formBuilder.group({
              host: ['api.mist.com'],
              credentials: this._formBuilder.group({
                email: [''],
                password: ['']
              }),
              token: [""]
            });

            this._http.get('/api/gap').subscribe({
              next: function next(data) {
                return _this11._appService.googleApiKeySet(data.gap);
              },
              error: function error(_error7) {
                return console.error("Unable to load the Google API Key... Maps won't be available...");
              }
            });

            this._http.get("/api/disclaimer").subscribe({
              next: function next(data) {
                if (data.disclaimer) _this11.disclaimer = data.disclaimer;
                if (data.github_url) _this11.github_url = data.github_url;
                if (data.docker_url) _this11.docker_url = data.docker_url;
              }
            });
          } //// COMMON ////

        }, {
          key: "check_host",
          value: function check_host() {
            if (this.frmStepLogin.value.host != '') {
              return true;
            } else {
              return false;
            }
          } // RESET AUTHENTICATION FORM

        }, {
          key: "reset_response",
          value: function reset_response() {
            this.host = null;

            this._appService.headersSet({});

            this._appService.cookiesSet({});

            this._appService.selfSet({});

            this._appService.hostSet(this.host);

            this.reset_error_mess();
          }
        }, {
          key: "reset_error_mess",
          value: function reset_error_mess() {
            this.error_mess = {
              "credentials": "",
              "token": ""
            };
          } // PARSE AUTHENTICATION RESPONSE FROM SERVER

        }, {
          key: "parse_response",
          value: function parse_response(data) {
            if ("error" in data) {
              this.loading = false;
              this.error_mess["username"] = data.error;
            } else if ("data" in data) {
              if ("detail" in data.data) {
                this.error_message(data["method"], data.data.detail);
              } else if ("two_factor_required" in data.data && "two_factor_passed" in data.data) {
                if (data.data["two_factor_required"] == false) {
                  this.authenticated(data);
                } else if (data.data["two_factor_passed"] == true) {
                  this.authenticated(data);
                } else {
                  this.open2FA();
                }
              } else {
                this.authenticated(data);
              }
            }
          } // WHEN AUTHENTICATION IS NOT OK

        }, {
          key: "error_message",
          value: function error_message(method, message) {
            this.loading = false;
            this.error_mess[method] = message;
          } // WHEN AUTHENTICATION IS OK

        }, {
          key: "authenticated",
          value: function authenticated(data) {
            this._appService.headersSet(data.headers);

            this._appService.cookiesSet(data.cookies);

            this._appService.hostSet(data.host);

            this._appService.selfSet(data.data);

            this.loading = false;

            this._router.navigate(['/select']);
          } //// AUTHENTICATION ////

        }, {
          key: "submitCredentials",
          value: function submitCredentials() {
            var _this12 = this;

            this.reset_response();

            if (this.check_host()) {
              this.loading = true;

              this._http.post('/api/login/', {
                host: this.frmStepLogin.value.host,
                email: this.frmStepLogin.value.credentials.email,
                password: this.frmStepLogin.value.credentials.password
              }).subscribe({
                next: function next(data) {
                  return _this12.parse_response(data);
                },
                error: function error(_error8) {
                  return _this12.error_message("credentials", _error8.error.message);
                }
              });
            }
          }
        }, {
          key: "submitToken",
          value: function submitToken() {
            var _this13 = this;

            this.reset_response();

            if (this.check_host()) {
              this.loading = true;

              this._http.post('/api/login/', {
                host: this.frmStepLogin.value.host,
                token: this.frmStepLogin.value.token
              }).subscribe({
                next: function next(data) {
                  return _this13.parse_response(data);
                },
                error: function error(_error9) {
                  return _this13.error_message("credentials", _error9.error.message);
                }
              });
            }
          }
        }, {
          key: "submit2FA",
          value: function submit2FA(twoFactor) {
            var _this14 = this;

            if (this.check_host()) {
              this.loading = true;

              this._http.post('/api/login/', {
                host: this.frmStepLogin.value.host,
                email: this.frmStepLogin.value.credentials.email,
                password: this.frmStepLogin.value.credentials.password,
                two_factor: twoFactor
              }).subscribe({
                next: function next(data) {
                  return _this14.parse_response(data);
                },
                error: function error(_error10) {
                  return _this14.error_message("credentials", _error10.error.message);
                }
              });
            }
          } //// DIALOG BOX ////

        }, {
          key: "open2FA",
          value: function open2FA() {
            var _this15 = this;

            var dialogRef = this._dialog.open(_login_2FA__WEBPACK_IMPORTED_MODULE_1__["TwoFactorDialog"], {});

            dialogRef.afterClosed().subscribe(function (result) {
              _this15.submit2FA(result);
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_connector_service__WEBPACK_IMPORTED_MODULE_5__["ConnectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 58,
        vars: 11,
        consts: [[1, "card-outer"], [1, "login-form", 3, "formGroup"], ["fxLayout", "column", 1, "login-form-outer", 3, "formGroup"], [1, "login-form-inner"], ["fxLayout", "column", 1, "login-step"], ["appearance", "outline"], ["formControlName", "host"], [3, "value", 4, "ngFor", "ngForOf"], ["fxLayout", "row", 1, "login-form-or"], ["mat-fab", "", "color", "accent", "aria-label", "AND", 1, "disable-click"], ["fxLayout", "row", 1, "login-step"], ["formGroupName", "credentials", "fxLayout", "column", 1, "login-form-inputs"], ["matInput", "", "formControlName", "email", "type", "email"], ["matInput", "", "type", "password", "formControlName", "password", 3, "keydown.enter"], [2, "margin-bottom", "1em", "min-height", "20px"], [2, "color", "red", "font-weight", "normal"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["fxLayout", "column", 1, "login-form-or"], [3, "vertical"], ["mat-fab", "", "color", "accent", "aria-label", "OR", 1, "disable-click", 2, "margin-bottom", "4em"], ["fxLayout", "column", 1, "login-form-inputs"], ["appearance", "outline", 2, "padding", "0"], ["type", "text", "matInput", "", "formControlName", "token", 3, "keydown.enter"], ["class", "loading", "fxLayout", "row", 4, "ngIf"], [1, "disclaimer"], [1, "source"], ["target", "_blank", 3, "href", 4, "ngIf"], [3, "value"], ["fxLayout", "row", 1, "loading"], ["fxLayout", "column"], ["target", "_blank", 3, "href"], ["src", "assets/github.png"], ["src", "assets/docker.png"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Mist Cloud");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_mat_option_9_Template, 2, 2, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " AND ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Access with Login/Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function LoginComponent_Template_input_keydown_enter_26_listener() {
              return ctx.submitCredentials();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_31_listener() {
              return ctx.submitCredentials();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Continue with credentials");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-divider", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " OR ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "mat-divider", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Access with API Token");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "API Token");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function LoginComponent_Template_input_keydown_enter_44_listener() {
              return ctx.submitToken();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_49_listener() {
              return ctx.submitToken();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Continue with API Token");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, LoginComponent_div_51_Template, 3, 0, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, LoginComponent_a_56_Template, 2, 1, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, LoginComponent_a_57_Template, 2, 1, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.frmStepLogin);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.frmStepLogin);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hosts);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.error_mess.credentials);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vertical", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vertical", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.error_mess.token);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.disclaimer, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.github_url);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.docker_url);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatSpinner"]],
        styles: ["mat-card[_ngcontent-%COMP%] {\n    background-color: rgb(236 236 236);\n}\n\n.login-form-inner[_ngcontent-%COMP%] {\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 50em;\n    position: relative;\n    margin: auto;\n    padding: 2em;\n    border-radius: 0.3em;\n}\n\n.login-form-outer[_ngcontent-%COMP%] {\n    width: 100%;\n    background-color: rgb(236 236 236);\n}\n\n.login-form-inputs[_ngcontent-%COMP%] {\n    padding: 10px;\n    width: 25em;\n    text-align: center;\n    justify-content: space-between;\n}\n\n.login-form-or[_ngcontent-%COMP%] {\n    padding: 10px;\n    text-align: center;\n    justify-content: space-between;\n}\n\n.disable-click[_ngcontent-%COMP%] {\n    pointer-events: none;\n    cursor: default;\n}\n\n.login-step[_ngcontent-%COMP%] {\n    border: solid 1px lightgray;\n    background-color: white;\n    border-radius: 5px;\n    margin: -2em;\n    padding: 2em;\n}\n\n.loading[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #ffffff9c;\n    border-radius: 5px;\n}\n\n.loading[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin: auto;\n    align-self: center;\n}\n\n.disclaimer[_ngcontent-%COMP%] {\n    width: 50em;\n    text-align: center;\n    margin: auto;\n    text-transform: uppercase;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-weight: 100;\n    font-size: smaller;\n}\n\n.source[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n}\n\n.source[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 1em;\n    height: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsaURBQWlEO0lBQ2pELGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiAyMzYgMjM2KTtcbn1cblxuLmxvZ2luLWZvcm0taW5uZXIge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1pbi13aWR0aDogNTBlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcbn1cblxuLmxvZ2luLWZvcm0tb3V0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYgMjM2IDIzNik7XG59XG5cbi5sb2dpbi1mb3JtLWlucHV0cyB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogMjVlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubG9naW4tZm9ybS1vciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZGlzYWJsZS1jbGljayB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4ubG9naW4tc3RlcCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggbGlnaHRncmF5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IC0yZW07XG4gICAgcGFkZGluZzogMmVtO1xufVxuXG4ubG9hZGluZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOWM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubG9hZGluZyBkaXYge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5kaXNjbGFpbWVyIHtcbiAgICB3aWR0aDogNTBlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xufVxuXG4uc291cmNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNvdXJjZSBpbWcge1xuICAgIG1hcmdpbjogMWVtO1xuICAgIGhlaWdodDogMmVtO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _connector_service__WEBPACK_IMPORTED_MODULE_5__["ConnectorService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map