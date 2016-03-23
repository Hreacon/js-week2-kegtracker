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
    var NewKegComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NewKegComponent = (function () {
                function NewKegComponent() {
                    this.onCreateKeg = new core_1.EventEmitter();
                }
                NewKegComponent.prototype.createKeg = function (newName, newBrand, newAlcoholContent, newPrice) {
                    console.log("Creating a new keg " + newName.value);
                    var ikeg = {
                        name: newName.value,
                        brand: newBrand.value,
                        alcoholContent: parseInt(newAlcoholContent.value),
                        price: parseInt(newPrice.value)
                    };
                    newName.value = "";
                    newBrand.value = "";
                    newAlcoholContent.value = "";
                    newPrice.value = "";
                    this.onCreateKeg.emit(ikeg);
                };
                NewKegComponent = __decorate([
                    core_1.Component({
                        selector: 'new-keg',
                        outputs: ['onCreateKeg'],
                        template: "\n    <form (submit)=\"createKeg(newName, newBrand, newAlcoholContent, newPrice)\">\n      <label for=\"name\">Keg Name</label><input type=\"text\" name=\"name\" #newName>\n      <label for=\"brand\">Keg brand</label><input type=\"text\" name=\"brand\" #newBrand>\n      <label for=\"alcoholContent\">Alcohol Content</label><input type=\"number\" name=\"AC\" #newAlcoholContent>\n      <label for=\"price\">Price/Pint</label><input type=\"number\" name=\"price\" #newPrice>\n      <input type=\"submit\" value=\"Add Keg\">\n    </form>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NewKegComponent);
                return NewKegComponent;
            }());
            exports_1("NewKegComponent", NewKegComponent);
        }
    }
});
//# sourceMappingURL=newKeg.component.js.map