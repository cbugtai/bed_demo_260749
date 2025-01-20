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

export default calculatePortfolioPerformance