System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Keg;
    return {
        setters:[],
        execute: function() {
            Keg = (function () {
                function Keg(name, brand, alcoholContent, price) {
                    this.name = name;
                    this.brand = brand;
                    this.alcoholContent = alcoholContent;
                    this.price = price;
                    this.pints = 124;
                }
                Keg.prototype.getFullPercent = function () {
                    return 100 - this.pints / 124 * 100;
                };
                Keg.prototype.sellPint = function () {
                    if (this.pints > 0) {
                        this.pints--;
                    }
                };
                Keg.prototype.getPriceColor = function () {
                    if (this.price > 5) {
                        return "red";
                    }
                    else if (this.price < 5) {
                        return "white";
                    }
                    else if (this.price === 5) {
                        return "yellow";
                    }
                };
                return Keg;
            }());
            exports_1("Keg", Keg);
        }
    }
});
//# sourceMappingURL=keg.module.js.map