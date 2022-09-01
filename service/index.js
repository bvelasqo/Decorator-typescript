"use strict";
exports.__esModule = true;
var CompressionDecorator_1 = require("./SQL/CompressionDecorator");
var DataSourceSQL_1 = require("./SQL/DataSourceSQL");
var Decorator_1 = require("./SQL/Decorator");
var EncryptionDecorator_1 = require("./SQL/EncryptionDecorator");
var sqlDataSource = new DataSourceSQL_1.DataSourceSQL();
var sqlDataSourceDecorator = new Decorator_1.SQLDecorator(sqlDataSource);
var sqlCompressionDecorator = new CompressionDecorator_1.CompressionDecorator(sqlDataSourceDecorator);
var sqlEncryptionDecorator = new EncryptionDecorator_1.EncryptionDecorator(sqlCompressionDecorator);
sqlEncryptionDecorator.writeData("My Data");
console.log(sqlEncryptionDecorator.readData());