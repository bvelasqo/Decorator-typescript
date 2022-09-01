import { SQLDecorator } from "./Decorator";

export class CompressionDecorator extends SQLDecorator {
    constructor(dataSource: SQLDecorator) {
        super(dataSource);
    }
    readData(): any {
        const dataToCompress = this.getDataSource().readData();
        return this.compress(dataToCompress);
    }
    writeData(data: any): void {
        const compressedData = this.compress(data);
        this.getDataSource().writeData(compressedData);
    }
    private compress(data: string): any {
        return data.concat(" Compressed - ");
    }
}