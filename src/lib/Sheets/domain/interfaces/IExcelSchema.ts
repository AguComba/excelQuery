export interface IExcelSchema {
    [key: string]:{
        required: boolean;
        transform?: (value: any) => any
    }
}