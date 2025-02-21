import XlsxPopulate from "xlsx-populate"

export class ExcelReader {
    async read(filePath: string): Promise<Record<string, any>[]> {
        const workbook = await XlsxPopulate.fromFileAsync(filePath)
        const worksheet = workbook.sheet("Cuentas a separar")

        if(!worksheet){
            throw new Error("No se encontro la hoja")
        }

        const headers: string[] = worksheet.range('A1:B1').value()[0].map((cell: string) => cell.toLowerCase() || '')

        const data: Record<string, any>[] = []

        worksheet.usedRange()?.value().forEach((row, rowNumber) => {
            if(rowNumber === 0) return

            const rowData: Record<string, any> = {}
            row.map((cell, index) => {
                rowData[headers[index]] = cell
            })

            data.push(rowData)
        })
    
        return data
    }
}

const reader = new ExcelReader()

const data = await reader.read('../../../../files/Cuentas.xlsx').catch(console.error)

console.log(data)