System.register(['angular2/core', './keg.module', './kegList.component', './newKeg.component', './header.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, keg_module_1, kegList_component_1, newKeg_component_1, header_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (keg_module_1_1) {
                keg_module_1 = keg_module_1_1;
            },
            function (kegList_component_1_1) {
                kegList_component_1 = kegList_component_1_1;
            },
            function (newKeg_component_1_1) {
                newKeg_component_1 = newKeg_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.kegs = [
                        new keg_module_1.Keg("Coors Keg", "Coors", 8, 4.00),
                        new keg_module_1.Keg("Budweiser Keg", "Budweiser", 9, 6.00),
                        new keg_module_1.Keg("Bud Light Keg", "Bud Light", 6, 3.00)
                    ];
                }
                AppComponent.prototype.addKeg = function (kegData) {
                    this.kegs.push(new keg_module_1.Keg(kegData.name, kegData.brand, kegData.alcoholContent, kegData.price));
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [kegList_component_1.KegListComponent, newKeg_component_1.NewKegComponent, header_component_1.HeaderComponent],
                        template: "\n    <header-view></header-view>\n    <new-keg (onCreateKeg)=\"addKeg($event)\"></new-keg>\n    <keg-list [kegList]=\"kegs\"></keg-list>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map