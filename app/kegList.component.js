System.register(['angular2/core', './keg.component'], function(exports_1, context_1) {
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
    var core_1, keg_component_1;
    var KegListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (keg_component_1_1) {
                keg_component_1 = keg_component_1_1;
            }],
        execute: function() {
            KegListComponent = (function () {
                function KegListComponent() {
                }
                KegListComponent = __decorate([
                    core_1.Component({
                        selector: 'keg-list',
                        inputs: ['kegList'],
                        directives: [keg_component_1.KegComponent],
                        template: "\n    <keg-view *ngFor=\"#currentKeg of kegList\" [keg]=\"currentKeg\"></keg-view>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], KegListComponent);
                return KegListComponent;
            }());
            exports_1("KegListComponent", KegListComponent);
        }
    }
});
//# sourceMappingURL=kegList.component.js.map