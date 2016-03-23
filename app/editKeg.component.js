System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var EditKegComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EditKegComponent = (function () {
                function EditKegComponent() {
                    this.onCloseForm = new core_1.EventEmitter();
                }
                EditKegComponent.prototype.closeForm = function () {
                    this.onCloseForm.emit(new Object());
                };
                EditKegComponent = __decorate([
                    core_1.Component({
                        selector: 'edit-keg',
                        inputs: ['keg'],
                        outputs: ['onCloseForm'],
                        template: "\n    <div class=\"editForm\">\n      <label for=\"name\">Keg Name</label><input type=\"text\" [(ngModel)]=\"keg.name\">\n      <label for=\"brand\">Keg brand</label><input type=\"text\" [(ngModel)]=\"keg.brand\">\n      <label for=\"alcoholContent\">Alcohol Content</label><input type=\"number\" [(ngModel)]=\"keg.alcoholContent\">\n      <label for=\"price\">Price/Pint</label><input min=\"0\" type=\"number\" [(ngModel)]=\"keg.price\">\n      <label for=\"pints\">Pint Level</label><input type=\"number\" min=\"0\" max=\"124\" [(ngModel)]=\"keg.pints\">\n      <button (click)=\"closeForm()\">Save Keg</button>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], EditKegComponent);
                return EditKegComponent;
            }());
            exports_1("EditKegComponent", EditKegComponent);
        }
    }
});
//# sourceMappingURL=editKeg.component.js.map