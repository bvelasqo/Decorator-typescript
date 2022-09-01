export interface DataSource {
    readData(): any;
    writeData(data: any): void;
}
