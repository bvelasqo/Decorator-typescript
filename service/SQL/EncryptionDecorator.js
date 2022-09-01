"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.EncryptionDecorator = void 0;
var Decorator_1 = require("./Decorator");
var EncryptionDecorator = /** @class */ (function (_super) {
    __extends(EncryptionDecorator, _super);
    function EncryptionDecorator(dataSource) {
        return _super.call(this, dataSource) || this;
    }
    EncryptionDecorator.prototype.readData = function () {
        var dataToEncrypt = this.getDataSource().readData();
        return this.encrypt(dataToEncrypt);
    };
    EncryptionDecorator.prototype.writeData = function (data) {
        var encryptedData = this.encrypt(data);
        this.getDataSource().writeData(encryptedData);
    };
    EncryptionDecorator.prototype.encrypt = function (data) {
        return data.concat(" Encrypted - ");
    };
    return EncryptionDecorator;
}(Decorator_1.SQLDecorator));
exports.EncryptionDecorator = EncryptionDecorator;
