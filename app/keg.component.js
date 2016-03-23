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
    var KegComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            KegComponent = (function () {
                function KegComponent() {
                    this.onEditKeg = new core_1.EventEmitter();
                }
                KegComponent.prototype.sellPint = function () {
                    this.keg.sellPint();
                };
                KegComponent.prototype.editKeg = function () {
                    this.onEditKeg.emit(this.keg);
                };
                KegComponent = __decorate([
                    core_1.Component({
                        selector: 'keg-view',
                        inputs: ['keg'],
                        outputs: ['onEditKeg'],
                        template: "\n    <div class=\"keg\" style=\"background:linear-gradient(white {{ keg.getFullPercent() }}%, #FBB117 {{ keg.getFullPercent() }}%)\">\n      <h3>{{ keg.name }}</h3>\n      <h5>{{ keg.alcoholContent }}%</h5>\n      <h5 class=\"price\" style=\"background: {{ keg.getPriceColor() }}\">{{ keg.price }}$/Pint </h5>\n      <p>{{ keg.brand }} Pints left: {{ keg.pints }}</p>\n      <button (click)=\"sellPint()\">Sell a Pint</button>\n      <button (click)=\"editKeg()\">Edit</button>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], KegComponent);
                return KegComponent;
            }());
            exports_1("KegComponent", KegComponent);
        }
    }
});
//# sourceMappingURL=keg.component.js.map