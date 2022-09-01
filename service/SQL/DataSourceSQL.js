"use strict";
exports.__esModule = true;
exports.DataSourceSQL = void 0;
var DataSourceSQL = /** @class */ (function () {
    function DataSourceSQL() {
    }
    DataSourceSQL.prototype.readData = function () {
        return "Your Data read from SQL - ";
    };
    DataSourceSQL.prototype.writeData = function (data) {
        console.log(data.concat(" Data written to SQL"));
    };
    return DataSourceSQL;
}());
exports.DataSourceSQL = DataSourceSQL;
