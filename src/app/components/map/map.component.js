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
var MapComponent = (function () {
    function MapComponent(router) {
        this.router = router;
        this.title = 'My first AGM project';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.zoom = 20;
    }
    MapComponent.prototype.ngOnInit = function () {
        this.markers = [
            {
                lat: 51.673858,
                lng: 7.815982,
                label: 'A'
            },
            {
                lat: 51.373858,
                lng: 7.215982,
                label: 'B'
            },
            {
                lat: 51.723858,
                lng: 7.895982,
                label: 'C'
            }
        ];
        this.session = JSON.parse(localStorage.getItem("session")) || {};
        this.AuthUser();
    };
    MapComponent.prototype.mapClicked = function ($event) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng
        });
    };
    MapComponent.prototype.AuthUser = function () {
        if (this.session && this.session.auth) {
            var users = JSON.parse(localStorage.getItem('users'));
            for (var i = 0; i < users.length; i++) {
                if (users[i].email === this.session.email) {
                    this.user = users[i];
                }
            }
        }
        else {
            this.router.navigate(['signup']);
        }
    };
    return MapComponent;
}());
MapComponent = __decorate([
    core_1.Component({
        selector: "map",
        templateUrl: "./map.component.html"
    }),
    __metadata("design:paramtypes", [router_1.Router])
], MapComponent);
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map