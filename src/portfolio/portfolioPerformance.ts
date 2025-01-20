export function calculatePortfolioPerformance(): any {
	let initialInvestment:number = 10000;
	let currentValue:number = 12000;

	const profitOrLoss:number = initialInvestment - currentValue;

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
            performanceSummary = `No Change`;
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