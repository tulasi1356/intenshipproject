(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tulasi\Desktop\intenshipproject\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "4K/k":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth.service */ "u6mN");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










class RegistrationComponent {
    constructor(fb, router, auth, snackbar) {
        this.fb = fb;
        this.router = router;
        this.auth = auth;
        this.snackbar = snackbar;
        this.signupForm = this.fb.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            mobilenumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(10)]],
            dateofbirth: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8)]],
            confirmpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8)]],
        });
    }
    ngOnInit() {
    }
    Onsubmit() {
        this.auth.generalsignup(this.signupForm.value).subscribe(data => {
            console.log(data, 'datta');
            // this.matter = data;
            this.snackbar.open(data, "ok", { duration: 15000 });
            // this.signupLoader = false;
            // if(data.status){
            // // localStorage.setItem('forward',''); 
            // this.snackbar.open("An account verification mail is sent. Please check.","ok",{duration:20000});
            // this.router.navigate(['/login']);
        });
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 68, vars: 3, consts: [[2, "text-align", "center", "margin", "50px", "margin-top", "40px", "color", "#288cec", "font-size", "30px"], [1, "form", "example-form"], [3, "formGroup", "ngSubmit"], [1, "label"], [2, "color", "red"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "placeholder", "First Name", "formControlName", "firstname", 1, "textbox"], ["matInput", "", "placeholder", "Last Name", "formControlName", "lastname", 1, "textbox"], [1, "label1"], ["matInput", "", "placeholder", "Mobile Number", "formControlName", "mobilenumber", 1, "textbox"], ["matInput", "", "placeholder", "Date of birth", "formControlName", "dateofbirth", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["touchUi", ""], ["picker", ""], [1, "label3"], ["matInput", "", "placeholder", "Email", "formControlName", "email", 1, "textbox"], ["matInput", "", "placeholder", "Password", "formControlName", "password", 1, "textbox"], [1, "label2"], ["matInput", "", "placeholder", "Confirm Password", "formControlName", "confirmpassword", 1, "textbox"], ["mat-raised-button", ""]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_4_listener() { return ctx.Onsubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Dateofbirth");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "mat-datepicker-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "mat-datepicker", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  background-attachment: fixed;\n  background-size: cover;\n  width: 100%;\n  height: 90%;\n}\nbody[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\n  \n  color: #288cec;\n}\nbody[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: #288cec;\n}\nbody[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #288cec;\n}\nbody[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-moz-placeholder {\n  \n  color: #288cec;\n}\nbody[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  flex-basis: 60%;\n  text-align: center;\n}\nbody[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #288cec;\n  border-radius: 25px;\n  color: white;\n  width: 20%;\n}\nbody[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  margin-left: -21%;\n  font-weight: 400;\n  font-size: 14px;\n}\nbody[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .label1[_ngcontent-%COMP%] {\n  margin-left: -19%;\n  font-weight: 400;\n  font-size: 14px;\n}\nbody[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .label2[_ngcontent-%COMP%] {\n  margin-left: -18%;\n  font-weight: 400;\n  font-size: 14px;\n}\nbody[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .label3[_ngcontent-%COMP%] {\n  margin-left: -23%;\n  font-weight: 400;\n  font-size: 14px;\n}\nbody[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%] {\n  width: 400px;\n  font-family: Poppins;\n}\nbody[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  color: red;\n  font-family: Roboto;\n}\nbody[_ngcontent-%COMP%]   .signbuttons[_ngcontent-%COMP%] {\n  flex-basis: 20%;\n  margin-top: 30px;\n  margin-left: -200px;\n  font-family: Poppins;\n}\nbody[_ngcontent-%COMP%]   .signbuttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\nbody[_ngcontent-%COMP%]   .signbuttons[_ngcontent-%COMP%]   .mainbtn[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  margin-right: 35px;\n  color: white;\n  background-color: black;\n  font-weight: bold;\n}\nbody[_ngcontent-%COMP%]   .signbuttons[_ngcontent-%COMP%]   .togglebtn[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBRUEsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQUo7QUFDSTtFQUE4Qix3QkFBQTtFQUMxQixjQUFBO0FBRVI7QUFBTTtFQUFxQixnQkFBQTtFQUNuQixjQUFBO0FBR1I7QUFETTtFQUF5QixXQUFBO0VBQ3ZCLGNBQUE7QUFJUjtBQUZNO0VBQW9CLGdCQUFBO0VBQ2xCLGNBQUE7QUFLUjtBQUhJO0VBT0ksZUFBQTtFQUNBLGtCQUFBO0FBRFI7QUFOUTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQVFaO0FBSlE7RUFHSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUlaO0FBRFE7RUFHSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNaO0FBRVE7RUFHSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUZaO0FBS1E7RUFHSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUxaO0FBUVE7RUFFSSxZQUFBO0VBQ0Esb0JBQUE7QUFQWjtBQVdZO0VBRUksVUFBQTtFQUNBLG1CQUFBO0FBVmhCO0FBZ0JJO0VBR0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQWhCUjtBQWlCUTtFQUVJLGVBQUE7QUFoQlo7QUFrQlE7RUFFSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFqQlo7QUFtQlE7RUFHSSxvQkFBQTtFQUNBLGlCQUFBO0FBbkJaIiwiZmlsZSI6InJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjAwMCAxNTAwJyUzRSUzQ2RlZnMlM0UlM0NyZWN0IHN0cm9rZT0nJTIzZmZmZmZmJyBzdHJva2Utd2lkdGg9JzAuNycgd2lkdGg9JzEnIGhlaWdodD0nMScgaWQ9J3MnLyUzRSUzQ3BhdHRlcm4gaWQ9J2EnIHdpZHRoPSczJyBoZWlnaHQ9JzMnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIHBhdHRlcm5UcmFuc2Zvcm09J3NjYWxlKDQ1LjE1KSB0cmFuc2xhdGUoLTk3Ny44NSAtNzMzLjM5KSclM0UlM0N1c2UgZmlsbD0nJTIzZmFmYWZhJyBocmVmPSclMjNzJyB5PScyJy8lM0UlM0N1c2UgZmlsbD0nJTIzZmFmYWZhJyBocmVmPSclMjNzJyB4PScxJyB5PScyJy8lM0UlM0N1c2UgZmlsbD0nJTIzZjVmNWY1JyBocmVmPSclMjNzJyB4PScyJyB5PScyJy8lM0UlM0N1c2UgZmlsbD0nJTIzZjVmNWY1JyBocmVmPSclMjNzJy8lM0UlM0N1c2UgZmlsbD0nJTIzZjBmMGYwJyBocmVmPSclMjNzJyB4PScyJy8lM0UlM0N1c2UgZmlsbD0nJTIzZjBmMGYwJyBocmVmPSclMjNzJyB4PScxJyB5PScxJy8lM0UlM0MvcGF0dGVybiUzRSUzQ3BhdHRlcm4gaWQ9J2InIHdpZHRoPSc3JyBoZWlnaHQ9JzExJyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBwYXR0ZXJuVHJhbnNmb3JtPSdzY2FsZSg0NS4xNSkgdHJhbnNsYXRlKC05NzcuODUgLTczMy4zOSknJTNFJTNDZyBmaWxsPSclMjNlYmViZWInJTNFJTNDdXNlIGhyZWY9JyUyM3MnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB5PSc1JyAvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzEnIHk9JzEwJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMicgeT0nMScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzInIHk9JzQnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSczJyB5PSc4Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNCcgeT0nMycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzQnIHk9JzcnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc1JyB5PScyJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNScgeT0nNicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzYnIHk9JzknLyUzRSUzQy9nJTNFJTNDL3BhdHRlcm4lM0UlM0NwYXR0ZXJuIGlkPSdoJyB3aWR0aD0nNScgaGVpZ2h0PScxMycgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgcGF0dGVyblRyYW5zZm9ybT0nc2NhbGUoNDUuMTUpIHRyYW5zbGF0ZSgtOTc3Ljg1IC03MzMuMzkpJyUzRSUzQ2cgZmlsbD0nJTIzZWJlYmViJyUzRSUzQ3VzZSBocmVmPSclMjNzJyB5PSc1Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeT0nOCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzEnIHk9JzEnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxJyB5PSc5Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMScgeT0nMTInLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMicgeT0nNCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzMnIHk9JzInLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSczJyB5PSc2Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMycgeT0nMTEnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc0JyB5PSczJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNCcgeT0nNycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzQnIHk9JzEwJy8lM0UlM0MvZyUzRSUzQy9wYXR0ZXJuJTNFJTNDcGF0dGVybiBpZD0nYycgd2lkdGg9JzE3JyBoZWlnaHQ9JzEzJyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBwYXR0ZXJuVHJhbnNmb3JtPSdzY2FsZSg0NS4xNSkgdHJhbnNsYXRlKC05NzcuODUgLTczMy4zOSknJTNFJTNDZyBmaWxsPSclMjNlNWU1ZTUnJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHk9JzExJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMicgeT0nOScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzUnIHk9JzEyJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nOScgeT0nNCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzEyJyB5PScxJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTYnIHk9JzYnLyUzRSUzQy9nJTNFJTNDL3BhdHRlcm4lM0UlM0NwYXR0ZXJuIGlkPSdkJyB3aWR0aD0nMTknIGhlaWdodD0nMTcnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIHBhdHRlcm5UcmFuc2Zvcm09J3NjYWxlKDQ1LjE1KSB0cmFuc2xhdGUoLTk3Ny44NSAtNzMzLjM5KSclM0UlM0NnIGZpbGw9JyUyM2ZmZmZmZiclM0UlM0N1c2UgaHJlZj0nJTIzcycgeT0nOScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzE2JyB5PSc1Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTQnIHk9JzInLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxMScgeT0nMTEnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc2JyB5PScxNCcvJTNFJTNDL2clM0UlM0NnIGZpbGw9JyUyM2UwZTBlMCclM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMycgeT0nMTMnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc5JyB5PSc3Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTMnIHk9JzEwJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTUnIHk9JzQnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxOCcgeT0nMScvJTNFJTNDL2clM0UlM0MvcGF0dGVybiUzRSUzQ3BhdHRlcm4gaWQ9J2UnIHdpZHRoPSc0NycgaGVpZ2h0PSc1MycgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgcGF0dGVyblRyYW5zZm9ybT0nc2NhbGUoNDUuMTUpIHRyYW5zbGF0ZSgtOTc3Ljg1IC03MzMuMzkpJyUzRSUzQ2cgZmlsbD0nJTIzRjYwJyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyJyB5PSc1Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTYnIHk9JzM4Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNDYnIHk9JzQyJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMjknIHk9JzIwJy8lM0UlM0MvZyUzRSUzQy9wYXR0ZXJuJTNFJTNDcGF0dGVybiBpZD0nZicgd2lkdGg9JzU5JyBoZWlnaHQ9JzcxJyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBwYXR0ZXJuVHJhbnNmb3JtPSdzY2FsZSg0NS4xNSkgdHJhbnNsYXRlKC05NzcuODUgLTczMy4zOSknJTNFJTNDZyBmaWxsPSclMjNGNjAnJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzMzJyB5PScxMycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzI3JyB5PSc1NCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzU1JyB5PSc1NScvJTNFJTNDL2clM0UlM0MvcGF0dGVybiUzRSUzQ3BhdHRlcm4gaWQ9J2cnIHdpZHRoPScxMzknIGhlaWdodD0nOTcnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIHBhdHRlcm5UcmFuc2Zvcm09J3NjYWxlKDQ1LjE1KSB0cmFuc2xhdGUoLTk3Ny44NSAtNzMzLjM5KSclM0UlM0NnIGZpbGw9JyUyM0Y2MCclM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTEnIHk9JzgnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc1MScgeT0nMTMnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxNycgeT0nNzMnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc5OScgeT0nNTcnLyUzRSUzQy9nJTNFJTNDL3BhdHRlcm4lM0UlM0MvZGVmcyUzRSUzQ3JlY3QgZmlsbD0ndXJsKCUyM2EpJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScvJTNFJTNDcmVjdCBmaWxsPSd1cmwoJTIzYiknIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1Jy8lM0UlM0NyZWN0IGZpbGw9J3VybCglMjNoKScgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnLyUzRSUzQ3JlY3QgZmlsbD0ndXJsKCUyM2MpJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScvJTNFJTNDcmVjdCBmaWxsPSd1cmwoJTIzZCknIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1Jy8lM0UlM0NyZWN0IGZpbGw9J3VybCglMjNlKScgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnLyUzRSUzQ3JlY3QgZmlsbD0ndXJsKCUyM2YpJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScvJTNFJTNDcmVjdCBmaWxsPSd1cmwoJTIzZyknIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogQ2hyb21lL09wZXJhL1NhZmFyaSAqL1xyXG4gICAgICAgIGNvbG9yOiAjMjg4Y2VjO1xyXG4gICAgICB9XHJcbiAgICAgIDo6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTkrICovXHJcbiAgICAgICAgY29sb3I6ICMyODhjZWNcclxuICAgICAgfVxyXG4gICAgICA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSUUgMTArICovXHJcbiAgICAgICAgY29sb3I6ICMyODhjZWNcclxuICAgICAgfVxyXG4gICAgICA6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXHJcbiAgICAgICAgY29sb3I6ICMyODhjZWNcclxuICAgICAgfVxyXG4gICAgLmZvcm17XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4OGNlYztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmbGV4LWJhc2lzOjYwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLmxhYmVsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDotMjElO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIC8vIGNvbG9yOiAjMjg4Y2VjO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGFiZWwxXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDotMTklO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIC8vIGNvbG9yOiAjMjg4Y2VjO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGFiZWwyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDotMTglO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIC8vIGNvbG9yOiAjMjg4Y2VjO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGFiZWwzXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDotMjMlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIC8vIGNvbG9yOiAjMjg4Y2VjO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZXhhbXBsZS1mdWxsLXdpZHRoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDo0MDBweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC50ZXh0LWRhbmdlclxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjpyZWQ7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5zaWduYnV0dG9uc1xyXG4gICAge1xyXG4gICAgXHJcbiAgICAgICAgZmxleC1iYXNpczoyMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDozMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0Oi0yMDBweDtcclxuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICA6aG92ZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1haW5idG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MzVweDtcclxuICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2dnbGVidG5cclxuICAgIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration/registration.component */ "4K/k");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"]] }); })();


/***/ }),

/***/ "u6mN":
/*!*************************************!*\
  !*** ./src/service/auth.service.ts ***!
  \*************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class AuthService {
    constructor(http) {
        this.http = http;
        this.url = '/auth/signup';
        this.loginurl = '/auth/login';
    }
    generalsignup(details) {
        // console.log('details',details);
        return this.http.post(this.url, details);
    }
    generallogin(details) {
        console.log('details', details);
        return this.http.post(this.loginurl, details);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration/registration.component */ "4K/k");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', redirectTo: 'register', pathMatch: 'full' },
    { path: 'register', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth.service */ "u6mN");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









class LoginComponent {
    constructor(fb, router, auth, snackbar) {
        this.fb = fb;
        this.router = router;
        this.auth = auth;
        this.snackbar = snackbar;
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8)]],
        });
    }
    ngOnInit() {
    }
    showSnackbar(message) {
        console.log('snckbar');
        this.snackbar.open(message, "ok", { duration: 15000 });
    }
    Onsubmit() {
        this.auth.generallogin(this.loginForm.value).subscribe(data => {
            console.log(data, 'datta');
            if (data === 'password is incorrect') {
                // this.matter = data;
                this.showSnackbar('password is incorrect');
            }
            else if (data === 'account does not exit') {
                this.showSnackbar('signup first');
            }
            else {
                console.log('%c T', 'color:red', data);
                // this.auth.username = data;
                // this.router.navigate(['/home']);
                // this.showSnackbar(data);
                // this.matter = true;
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 40, vars: 1, consts: [[2, "text-align", "center", "margin", "50px", "margin-top", "10%", "color", "#288cec", "font-size", "30px"], [1, "images"], ["src", "../../assets/fb-icon.png", "width", "40px", "height", "40px", 1, "faceicon"], ["src", "../../assets/google-icon.png", "width", "40px", "height", "40px", 1, "googleicon"], [1, "linearea"], [1, "line"], [1, "or"], [1, "form", "example-form"], [3, "formGroup", "ngSubmit"], [1, "label3"], [2, "color", "red"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "placeholder", "Email", "formControlName", "email", 1, "textbox"], [1, "label"], ["matInput", "", "placeholder", "Password", "formControlName", "password", 1, "textbox"], [2, "color", "coral", "margin-left", "19%"], ["mat-raised-button", ""], [2, "color", "lightblue"], [2, "color", "#288cec"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "OR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_13_listener() { return ctx.Onsubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  background-attachment: fixed;\n  background-size: cover;\n  width: 100%;\n  height: 90%;\n}\nbody[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n  text-align: center;\n}\nbody[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .faceicon[_ngcontent-%COMP%] {\n  margin: 20px;\n  margin-right: 40px;\n  border: 3px solid #288cec;\n  box-shadow: 3px 5px #888888;\n  border-radius: 5px;\n}\nbody[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .googleicon[_ngcontent-%COMP%] {\n  margin: 20px;\n  border: 3px solid lightblue;\n  box-shadow: 3px 5px #888888;\n  margin-left: 40px;\n  border-radius: 5px;\n}\nbody[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\n  \n  color: #288cec;\n}\nbody[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: #288cec;\n}\nbody[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #288cec;\n}\nbody[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-moz-placeholder {\n  \n  color: #288cec;\n}\nbody[_ngcontent-%COMP%]   .linearea[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-content: center;\n  display: flex;\n}\nbody[_ngcontent-%COMP%]   .linearea[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  background: #f1f2f6;\n  height: 3px;\n  width: 15%;\n}\nbody[_ngcontent-%COMP%]   .linearea[_ngcontent-%COMP%]   .or[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #288cec;\n  text-align: center;\n  padding: 2px;\n  display: inline-block;\n  font-size: 13px;\n  font-weight: 600;\n  margin-left: -10px;\n  margin-top: -11.5px;\n}\nbody[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  flex-basis: 60%;\n  text-align: center;\n}\nbody[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #288cec;\n  border-radius: 25px;\n  color: white;\n  width: 20%;\n}\nbody[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  margin-left: -21%;\n  font-weight: 400;\n  font-size: 14px;\n}\nbody[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .label1[_ngcontent-%COMP%] {\n  margin-left: -19%;\n  font-weight: 400;\n  font-size: 14px;\n}\nbody[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .label2[_ngcontent-%COMP%] {\n  margin-left: -18%;\n  font-weight: 400;\n  font-size: 14px;\n}\nbody[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .label3[_ngcontent-%COMP%] {\n  margin-left: -23%;\n  font-weight: 400;\n  font-size: 14px;\n}\nbody[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%] {\n  width: 400px;\n  font-family: Poppins;\n}\nbody[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  color: red;\n  font-family: Roboto;\n}\nbody[_ngcontent-%COMP%]   .signbuttons[_ngcontent-%COMP%] {\n  flex-basis: 20%;\n  margin-top: 30px;\n  margin-left: -200px;\n  font-family: Poppins;\n}\nbody[_ngcontent-%COMP%]   .signbuttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\nbody[_ngcontent-%COMP%]   .signbuttons[_ngcontent-%COMP%]   .mainbtn[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  margin-right: 35px;\n  color: white;\n  background-color: black;\n  font-weight: bold;\n}\nbody[_ngcontent-%COMP%]   .signbuttons[_ngcontent-%COMP%]   .togglebtn[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFFQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFBSjtBQUNJO0VBQ0ksa0JBQUE7QUFDUjtBQUFRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBRVo7QUFBUTtFQUNJLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUVaO0FBRUk7RUFBOEIsd0JBQUE7RUFDMUIsY0FBQTtBQUNSO0FBQ007RUFBcUIsZ0JBQUE7RUFDbkIsY0FBQTtBQUVSO0FBQU07RUFBeUIsV0FBQTtFQUN2QixjQUFBO0FBR1I7QUFETTtFQUFvQixnQkFBQTtFQUNsQixjQUFBO0FBSVI7QUFGTTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBSVY7QUFIVTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFLWjtBQUhVO0VBQ00sZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBS2hCO0FBMEJJO0VBT0ksZUFBQTtFQUNBLGtCQUFBO0FBOUJSO0FBdUJRO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBckJaO0FBeUJRO0VBR0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUF6Qlo7QUE0QlE7RUFHSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQTVCWjtBQStCUTtFQUdJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBL0JaO0FBa0NRO0VBR0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFsQ1o7QUFxQ1E7RUFFSSxZQUFBO0VBQ0Esb0JBQUE7QUFwQ1o7QUF3Q1k7RUFFSSxVQUFBO0VBQ0EsbUJBQUE7QUF2Q2hCO0FBNkNJO0VBR0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQTdDUjtBQThDUTtFQUVJLGVBQUE7QUE3Q1o7QUErQ1E7RUFFSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUE5Q1o7QUFnRFE7RUFHSSxvQkFBQTtFQUNBLGlCQUFBO0FBaERaIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMDAwIDE1MDAnJTNFJTNDZGVmcyUzRSUzQ3JlY3Qgc3Ryb2tlPSclMjNmZmZmZmYnIHN0cm9rZS13aWR0aD0nMC43JyB3aWR0aD0nMScgaGVpZ2h0PScxJyBpZD0ncycvJTNFJTNDcGF0dGVybiBpZD0nYScgd2lkdGg9JzMnIGhlaWdodD0nMycgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgcGF0dGVyblRyYW5zZm9ybT0nc2NhbGUoNDUuMTUpIHRyYW5zbGF0ZSgtOTc3Ljg1IC03MzMuMzkpJyUzRSUzQ3VzZSBmaWxsPSclMjNmYWZhZmEnIGhyZWY9JyUyM3MnIHk9JzInLyUzRSUzQ3VzZSBmaWxsPSclMjNmYWZhZmEnIGhyZWY9JyUyM3MnIHg9JzEnIHk9JzInLyUzRSUzQ3VzZSBmaWxsPSclMjNmNWY1ZjUnIGhyZWY9JyUyM3MnIHg9JzInIHk9JzInLyUzRSUzQ3VzZSBmaWxsPSclMjNmNWY1ZjUnIGhyZWY9JyUyM3MnLyUzRSUzQ3VzZSBmaWxsPSclMjNmMGYwZjAnIGhyZWY9JyUyM3MnIHg9JzInLyUzRSUzQ3VzZSBmaWxsPSclMjNmMGYwZjAnIGhyZWY9JyUyM3MnIHg9JzEnIHk9JzEnLyUzRSUzQy9wYXR0ZXJuJTNFJTNDcGF0dGVybiBpZD0nYicgd2lkdGg9JzcnIGhlaWdodD0nMTEnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIHBhdHRlcm5UcmFuc2Zvcm09J3NjYWxlKDQ1LjE1KSB0cmFuc2xhdGUoLTk3Ny44NSAtNzMzLjM5KSclM0UlM0NnIGZpbGw9JyUyM2ViZWJlYiclM0UlM0N1c2UgaHJlZj0nJTIzcycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHk9JzUnIC8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMScgeT0nMTAnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyJyB5PScxJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMicgeT0nNCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzMnIHk9JzgnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc0JyB5PSczJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNCcgeT0nNycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzUnIHk9JzInLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc1JyB5PSc2Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNicgeT0nOScvJTNFJTNDL2clM0UlM0MvcGF0dGVybiUzRSUzQ3BhdHRlcm4gaWQ9J2gnIHdpZHRoPSc1JyBoZWlnaHQ9JzEzJyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBwYXR0ZXJuVHJhbnNmb3JtPSdzY2FsZSg0NS4xNSkgdHJhbnNsYXRlKC05NzcuODUgLTczMy4zOSknJTNFJTNDZyBmaWxsPSclMjNlYmViZWInJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHk9JzUnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB5PSc4Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMScgeT0nMScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzEnIHk9JzknLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxJyB5PScxMicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzInLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyJyB5PSc0Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMycgeT0nMicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzMnIHk9JzYnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSczJyB5PScxMScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzQnIHk9JzMnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc0JyB5PSc3Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNCcgeT0nMTAnLyUzRSUzQy9nJTNFJTNDL3BhdHRlcm4lM0UlM0NwYXR0ZXJuIGlkPSdjJyB3aWR0aD0nMTcnIGhlaWdodD0nMTMnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIHBhdHRlcm5UcmFuc2Zvcm09J3NjYWxlKDQ1LjE1KSB0cmFuc2xhdGUoLTk3Ny44NSAtNzMzLjM5KSclM0UlM0NnIGZpbGw9JyUyM2U1ZTVlNSclM0UlM0N1c2UgaHJlZj0nJTIzcycgeT0nMTEnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyJyB5PSc5Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNScgeT0nMTInLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc5JyB5PSc0Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTInIHk9JzEnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxNicgeT0nNicvJTNFJTNDL2clM0UlM0MvcGF0dGVybiUzRSUzQ3BhdHRlcm4gaWQ9J2QnIHdpZHRoPScxOScgaGVpZ2h0PScxNycgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgcGF0dGVyblRyYW5zZm9ybT0nc2NhbGUoNDUuMTUpIHRyYW5zbGF0ZSgtOTc3Ljg1IC03MzMuMzkpJyUzRSUzQ2cgZmlsbD0nJTIzZmZmZmZmJyUzRSUzQ3VzZSBocmVmPSclMjNzJyB5PSc5Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTYnIHk9JzUnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxNCcgeT0nMicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzExJyB5PScxMScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzYnIHk9JzE0Jy8lM0UlM0MvZyUzRSUzQ2cgZmlsbD0nJTIzZTBlMGUwJyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSczJyB5PScxMycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzknIHk9JzcnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxMycgeT0nMTAnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxNScgeT0nNCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzE4JyB5PScxJy8lM0UlM0MvZyUzRSUzQy9wYXR0ZXJuJTNFJTNDcGF0dGVybiBpZD0nZScgd2lkdGg9JzQ3JyBoZWlnaHQ9JzUzJyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBwYXR0ZXJuVHJhbnNmb3JtPSdzY2FsZSg0NS4xNSkgdHJhbnNsYXRlKC05NzcuODUgLTczMy4zOSknJTNFJTNDZyBmaWxsPSclMjNGNjAnJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzInIHk9JzUnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxNicgeT0nMzgnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc0NicgeT0nNDInLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyOScgeT0nMjAnLyUzRSUzQy9nJTNFJTNDL3BhdHRlcm4lM0UlM0NwYXR0ZXJuIGlkPSdmJyB3aWR0aD0nNTknIGhlaWdodD0nNzEnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIHBhdHRlcm5UcmFuc2Zvcm09J3NjYWxlKDQ1LjE1KSB0cmFuc2xhdGUoLTk3Ny44NSAtNzMzLjM5KSclM0UlM0NnIGZpbGw9JyUyM0Y2MCclM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMzMnIHk9JzEzJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMjcnIHk9JzU0Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNTUnIHk9JzU1Jy8lM0UlM0MvZyUzRSUzQy9wYXR0ZXJuJTNFJTNDcGF0dGVybiBpZD0nZycgd2lkdGg9JzEzOScgaGVpZ2h0PSc5NycgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgcGF0dGVyblRyYW5zZm9ybT0nc2NhbGUoNDUuMTUpIHRyYW5zbGF0ZSgtOTc3Ljg1IC03MzMuMzkpJyUzRSUzQ2cgZmlsbD0nJTIzRjYwJyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxMScgeT0nOCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzUxJyB5PScxMycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzE3JyB5PSc3MycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9Jzk5JyB5PSc1NycvJTNFJTNDL2clM0UlM0MvcGF0dGVybiUzRSUzQy9kZWZzJTNFJTNDcmVjdCBmaWxsPSd1cmwoJTIzYSknIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1Jy8lM0UlM0NyZWN0IGZpbGw9J3VybCglMjNiKScgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnLyUzRSUzQ3JlY3QgZmlsbD0ndXJsKCUyM2gpJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScvJTNFJTNDcmVjdCBmaWxsPSd1cmwoJTIzYyknIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1Jy8lM0UlM0NyZWN0IGZpbGw9J3VybCglMjNkKScgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnLyUzRSUzQ3JlY3QgZmlsbD0ndXJsKCUyM2UpJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScvJTNFJTNDcmVjdCBmaWxsPSd1cmwoJTIzZiknIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1Jy8lM0UlM0NyZWN0IGZpbGw9J3VybCglMjNnKScgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnLyUzRSUzQy9zdmclM0VcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAuaW1hZ2VzIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLmZhY2VpY29uIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICMyODhjZWM7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCA1cHggIzg4ODg4ODtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmdvb2dsZWljb24ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDVweCAjODg4ODg4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDo0MHB4IDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyBcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogQ2hyb21lL09wZXJhL1NhZmFyaSAqL1xyXG4gICAgICAgIGNvbG9yOiMyODhjZWM7XHJcbiAgICAgIH1cclxuICAgICAgOjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOSsgKi9cclxuICAgICAgICBjb2xvcjojMjg4Y2VjXHJcbiAgICAgIH1cclxuICAgICAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIElFIDEwKyAqL1xyXG4gICAgICAgIGNvbG9yOiMyODhjZWNcclxuICAgICAgfVxyXG4gICAgICA6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXHJcbiAgICAgICAgY29sb3I6IzI4OGNlY1xyXG4gICAgICB9XHJcbiAgICAgIC5saW5lYXJlYSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAubGluZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMWYyZjY7XHJcbiAgICAgICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm9yIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzI4OGNlYztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTEuNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAvLyAgIC5saW5lIHtcclxuICAgIC8vICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgYmFja2dyb3VuZDogI2YxZjJmNjtcclxuICAgIC8vICAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAvLyAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAvLyAgICAgICAgIC8vIGZsb2F0OiBsZWZ0O1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgIC5saW5lIHtcclxuICAgIC8vICAgICBiYWNrZ3JvdW5kOiAjZjFmMmY2O1xyXG4gICAgLy8gICAgIGhlaWdodDogM3B4O1xyXG4gICAgLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vIH1cclxuICAgIC8vIC5saW5lIHNwYW4ub3Ige1xyXG4gICAgLy8gICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAvLyAgICAgY29sb3I6ICMyODhjZWM7XHJcbiAgICAvLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gICAgIHBhZGRpbmc6IDJweDtcclxuICAgIC8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gICAgIGxlZnQ6IDUwJTtcclxuICAgIC8vICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAvLyAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIC8vICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICAvLyAgICAgbWFyZ2luLXRvcDogLTExLjVweDtcclxuICAgIC8vIH1cclxuICAgIC5mb3Jte1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzI4OGNlYztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmbGV4LWJhc2lzOjYwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLmxhYmVsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDotMjElO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIC8vIGNvbG9yOiMyODhjZWM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sYWJlbDFcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0Oi0xOSU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgLy8gY29sb3I6IzI4OGNlYztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxhYmVsMlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6LTE4JTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAvLyBjb2xvcjojMjg4Y2VjO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGFiZWwzXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDotMjMlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIC8vIGNvbG9yOiMyODhjZWM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5leGFtcGxlLWZ1bGwtd2lkdGhcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOjQwMHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgLnRleHQtZGFuZ2VyXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOnJlZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLnNpZ25idXR0b25zXHJcbiAgICB7XHJcbiAgICBcclxuICAgICAgICBmbGV4LWJhc2lzOjIwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOjMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6LTIwMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgIDpob3ZlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWFpbmJ0blxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDozNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvZ2dsZWJ0blxyXG4gICAgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map