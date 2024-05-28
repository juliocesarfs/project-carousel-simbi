export function formatToCurrency(value: string): string {
    const numberValue = parseFloat(value);

    if (isNaN(numberValue)) {
        throw new Error("Invalid number format");
    }

    const formattedValue = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(numberValue);

    return formattedValue;
}
