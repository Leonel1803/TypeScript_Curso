namespace Utility{
    export namespace Taxes{
        export function calculateIva(price: number): number{
            return (price * .21) * price;
        }
        export function calculatePenaltyIva(price: number): number{
            return (price * .30) * price;
        }
    }
}