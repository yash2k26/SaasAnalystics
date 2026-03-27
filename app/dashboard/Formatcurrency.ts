export const formatAmount = (value: number, decimals = false) => {
    return new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: decimals ? 2 : 0,
        maximumFractionDigits: decimals ? 2 : 0,
    }).format(value)
}