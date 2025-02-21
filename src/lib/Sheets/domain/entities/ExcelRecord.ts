import { IExcelSchema } from "../interfaces/IExcelSchema";

export class ExcelRecord {
    [key:string]: any

    constructor(data: Record<string, any>, schema: IExcelSchema) {
        if(!schema){
            throw new Error("Esquema no definido")
        }

        Object.keys(schema).forEach((key) =>  {
            if (schema[key].required && (data[key] === undefined || data[key] === null)) {
                throw new Error(`El campo ${key} es obligatorio.`);
            }

            this[key] = schema[key].transform ? schema[key].transform(data[key]) : data[key];
        })
    }
}