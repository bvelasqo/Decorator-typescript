import { SQLDecorator } from "./Decorator";

export class EncryptionDecorator extends SQLDecorator {
    constructor(dataSource: SQLDecorator) {
        super(dataSource);
    }
    readData(): any {
        const dataToEncrypt = this.getDataSource().readData();
        return this.encrypt(dataToEncrypt);
    }
    writeData(data: any): void {
        const encryptedData = this.encrypt(data);
        this.getDataSource().writeData(encryptedData);
    }
    private encrypt(data: string): any {
        return data.concat(" Encrypted - ");
    }
}
