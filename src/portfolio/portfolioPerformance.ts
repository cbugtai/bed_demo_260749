/**
 * calculate the performance of a financial portfolio and return performance Summaries
 * 
 * @param initial - starting balance of the portfolio
 * @param current - current balance of the portfolio
 * @returns - sumamry of the portfolio
 */
export function calculatePortfolioPerformance(initial:number, current:number): any {
	let initialInvestment:number = initial;
	let currentValue:number = current;

	const profitOrLoss:number = currentValue - initialInvestment;

	const percentageChange:number = (profitOrLoss / initialInvestment) * 100;

	let performanceSummary:string;
    switch(true){
        case percentageChange >= 20:
            performanceSummary = `The portfolio has gained significantly`;
            break;
        case percentageChange >= 10:
            performanceSummary = `The portfolio has gained moderately`;
            break;
        case percentageChange >= 0.1:
            performanceSummary = `The portfolio has gained slightly`;
            break;
        case percentageChange === 0:
            performanceSummary = `The portfolio has not changed`;
            break;
        case percentageChange <= -20:
            performanceSummary = `The portfolio has lost significantly`;
            break;
        case percentageChange <= -10:
            performanceSummary = `The portfolio has lost moderately`;
            break;
        case percentageChange <= -0.1:
            performanceSummary = `The portfolio has lost slightly`;
            break;
        default:
            performanceSummary = `unexpected result`;
            break;
    }

	return {
		initialInvestment,
		currentValue,
		profitOrLoss,
		percentageChange,
		performanceSummary,
	};
}

interface Assets {
    house:number;
    stock:number;
    bond:number;
}

/**
 * Identifies the Largest Holding you have
 * 
 * @param assets - The holdings you have and how much they're worth
 * @returns {string} - The largest holdingamong your assets 
 */
export function largestHolding(assets:Assets): any {
    if (assets.house > assets.stock){
        if (assets.house > assets.bond){
            return "House"
        } else {
            return "Bond"
        }
    } else if (assets.stock > assets.bond){
        if (assets.stock > assets.house){
            return "Stock"
        } else {
            return "House"
        }
    } else if (assets.bond > assets.house){
        if (assets.bond > assets.stock){
            return "Bond"
        } else {
            return "Stock"
        }
    }
}

/**
 * Returns the percentage of your totla portfolio is invested in each asset type
 * 
 * @param assets - The holdings you have and how much they're worth
 * @returns {string} - a summary of how much % each asset is worth compared to your total portfolio
 */
export function assetAllocationPercentage(assets:Assets): string {
    let bondValue:number = assets.bond
    let houseValue:number = assets.house
    let stockValue:number = assets.stock

    let totalValue:number = (bondValue + houseValue + stockValue)

    let bondPercentage:number  = Math.round((bondValue/totalValue) * 100)
    let housePercentage:number = Math.round((houseValue/totalValue) * 100 )
    let stockPercentage:number = Math.round((stockValue/totalValue) * 100 )

    return `${stockPercentage}% of your money is in Stocks, ${bondPercentage}% in Bonds and the rest, ${housePercentage}% is in your House.`
}

export default { calculatePortfolioPerformance, largestHolding, assetAllocationPercentage}