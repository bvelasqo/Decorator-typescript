"use strict";
exports.__esModule = true;
exports.SQLDecorator = void 0;
var SQLDecorator = /** @class */ (function () {
    function SQLDecorator(dataSource) {
        this.wrapper = dataSource;
    }
    SQLDecorator.prototype.readData = function () {
        return this.wrapper.readData();
    };
    SQLDecorator.prototype.writeData = function (data) {
        this.wrapper.writeData(data);
    };
    SQLDecorator.prototype.getDataSource = function () {
        return this.wrapper;
    };
    return SQLDecorator;
}());
exports.SQLDecorator = SQLDecorator;
