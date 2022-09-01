import { DataSource } from "../DataSource";

export class SQLDecorator implements DataSource {
    private wrapper: DataSource;
    constructor(dataSource: DataSource) {
        this.wrapper = dataSource;
    }
    readData(): any {
        return this.wrapper.readData();
    }
    writeData(data: any): void {
        this.wrapper.writeData(data);
    }

    getDataSource(): DataSource {
        return this.wrapper;
    }
}
