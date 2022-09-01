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
exports.CompressionDecorator = void 0;
var Decorator_1 = require("./Decorator");
var CompressionDecorator = /** @class */ (function (_super) {
    __extends(CompressionDecorator, _super);
    function CompressionDecorator(dataSource) {
        return _super.call(this, dataSource) || this;
    }
    CompressionDecorator.prototype.readData = function () {
        var dataToCompress = this.getDataSource().readData();
        return this.compress(dataToCompress);
    };
    CompressionDecorator.prototype.writeData = function (data) {
        var compressedData = this.compress(data);
        this.getDataSource().writeData(compressedData);
    };
    CompressionDecorator.prototype.compress = function (data) {
        return data.concat(" Compressed - ");
    };
    return CompressionDecorator;
}(Decorator_1.SQLDecorator));
exports.CompressionDecorator = CompressionDecorator;
