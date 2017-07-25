"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var SignUpComponent = (function () {
    function SignUpComponent(router) {
        this.router = router;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.session = JSON.parse(localStorage.getItem("session"));
        this.users = JSON.parse(localStorage.getItem("users"));
        this.initNewUser();
        if (this.session && this.session.auth) {
            this.router.navigate(['dashboard']);
        }
    };
    SignUpComponent.prototype.initNewUser = function () {
        this.newUser = {
            name: undefined,
            email: undefined,
            password: null,
            markers: []
        },
            this.confirmPassword = null;
    };
    SignUpComponent.prototype.signUpUser = function () {
        this.users.push(this.newUser);
        localStorage.setItem("session", JSON.stringify({ auth: true, email: this.newUser.email }));
        localStorage.setItem("users", JSON.stringify(this.users));
        // this.router.navigate(['dashboard']);
        console.log(localStorage.getItem("users"));
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    core_1.Component({
        selector: 'sign-up',
        templateUrl: './sign-up.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=sign-up.component.js.map