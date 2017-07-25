"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var core_2 = require("@agm/core");
var route_config_1 = require("./config/route.config");
var main_component_1 = require("./components/main/main.component");
var header_component_1 = require("./components/header/header.component");
var about_author_component_1 = require("./components/about-author/about-author.component");
var map_component_1 = require("./components/map/map.component");
var not_found_component_1 = require("./components/not-found/not-found.component");
var sign_up_component_1 = require("./components/sign-up/sign-up.component");
var sign_in_component_1 = require("./components/sign-in/sign-in.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            route_config_1.routing,
            core_2.AgmCoreModule.forRoot({
                apiKey: "AIzaSyD4rIQJPHbmkd0wj7eYzt2VxHNXUIE2U-I"
            })
        ],
        declarations: [
            main_component_1.MainComponent,
            header_component_1.HeaderComponent,
            about_author_component_1.AboutAuthorComponent,
            map_component_1.MapComponent,
            not_found_component_1.NotFoundComponent,
            sign_up_component_1.SignUpComponent,
            sign_in_component_1.SignInComponent
        ],
        bootstrap: [main_component_1.MainComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map