import { IExcelSchema } from "../interfaces/IExcelSchema";
import { ExcelRecord } from "./ExcelRecord";

export class ExcelValidator{
    static validate(data: Record<string, any>[], schema: IExcelSchema): ExcelRecord[] {
        if(!data || data.length === 0){
            throw new Error("El archivo esta vacio.")
        }

        return data.map((row) => new ExcelRecord(row, schema))
    }
}