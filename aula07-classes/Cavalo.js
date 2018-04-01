"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Animal_1 = require("./Animal");
var Cavalo = /** @class */ (function (_super) {
    __extends(Cavalo, _super);
    function Cavalo(nome) {
        return _super.call(this, nome) || this;
    }
    Cavalo.prototype.mover = function (distanciaEmMetros) {
        console.log('Trotando...');
        _super.prototype.mover.call(this, distanciaEmMetros);
    };
    return Cavalo;
}(Animal_1.Animal));
exports.Cavalo = Cavalo;
//# sourceMappingURL=Cavalo.js.map