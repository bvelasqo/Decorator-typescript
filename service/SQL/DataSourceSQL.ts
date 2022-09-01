import { DataSource } from "../DataSource";

export class DataSourceSQL implements DataSource {
    readData(): any {
        return "Your Data read from SQL - ";
    }
    writeData(data: string): void {
        console.log(data.concat(" Data written to SQL"));
    }
}