System.register(['angular2/core', './keg.component', './editKeg.component', './lowKeg.pipe'], function(exports_1, context_1) {
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
    var core_1, keg_component_1, editKeg_component_1, lowKeg_pipe_1;
    var KegListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (keg_component_1_1) {
                keg_component_1 = keg_component_1_1;
            },
            function (editKeg_component_1_1) {
                editKeg_component_1 = editKeg_component_1_1;
            },
            function (lowKeg_pipe_1_1) {
                lowKeg_pipe_1 = lowKeg_pipe_1_1;
            }],
        execute: function() {
            KegListComponent = (function () {
                function KegListComponent() {
                    this.editVisible = false;
                    this.filterKeg = "all";
                }
                KegListComponent.prototype.onCloseForm = function () {
                    this.editVisible = false;
                };
                KegListComponent.prototype.editKeg = function (keg) {
                    this.selectedKeg = keg;
                    this.editVisible = true;
                };
                KegListComponent.prototype.toggleFilter = function () {
                    if (this.filterKeg == "low")
                        this.filterKeg = "all";
                    else
                        this.filterKeg = "low";
                };
                KegListComponent = __decorate([
                    core_1.Component({
                        selector: 'keg-list',
                        inputs: ['kegList'],
                        pipes: [lowKeg_pipe_1.LowKegPipe],
                        directives: [keg_component_1.KegComponent, editKeg_component_1.EditKegComponent],
                        template: "\n    <button class=\"btn\" (click)=\"toggleFilter()\">Toggle Low Kegs</button>\n    <keg-view *ngFor=\"#currentKeg of kegList | LowKegPipe:filterKeg\" [keg]=\"currentKeg\" (onEditKeg)=\"editKeg($event)\"></keg-view>\n    <edit-keg *ngIf=\"editVisible\" [keg]=\"selectedKeg\" (onCloseForm)=\"onCloseForm()\"></edit-keg>\n  "
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