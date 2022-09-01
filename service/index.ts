import { CompressionDecorator } from "./SQL/CompressionDecorator";
import { DataSourceSQL } from "./SQL/DataSourceSQL";
import { SQLDecorator } from "./SQL/Decorator";
import { EncryptionDecorator } from "./SQL/EncryptionDecorator";

const sqlDataSource = new DataSourceSQL()
const sqlDataSourceDecorator = new SQLDecorator(sqlDataSource)
const sqlCompressionDecorator = new CompressionDecorator(sqlDataSourceDecorator)
const sqlEncryptionDecorator = new EncryptionDecorator(sqlCompressionDecorator)
sqlEncryptionDecorator.writeData("My Data")
console.log(sqlEncryptionDecorator.readData())
