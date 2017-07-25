"use strict";
var router_1 = require("@angular/router");
var not_found_component_1 = require("../components/not-found/not-found.component");
var map_component_1 = require("../components/map/map.component");
var about_author_component_1 = require("../components/about-author/about-author.component");
var sign_up_component_1 = require("../components/sign-up/sign-up.component");
var sign_in_component_1 = require("../components/sign-in/sign-in.component");
var appRoutes = [
    {
        path: "",
        component: sign_up_component_1.SignUpComponent
    },
    {
        path: "signup",
        component: sign_up_component_1.SignUpComponent
    },
    {
        path: "signin",
        component: sign_in_component_1.SignInComponent
    },
    {
        path: "about",
        component: about_author_component_1.AboutAuthorComponent
    },
    {
        path: "dashboard",
        component: map_component_1.MapComponent
    },
    {
        path: "**",
        component: not_found_component_1.NotFoundComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=route.config.js.map