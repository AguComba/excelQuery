import { IExcelSchema } from "../interfaces/IExcelSchema";

export const ExcelSchema: Record<string, IExcelSchema> = {
    migraciones: {
        cuenta: { required: true, transform: (value) => parseInt(value) },
        nombre: { required: true, transform: (value) => value.trim()}
    }
}