import portfolioPerformance from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance function test", () => {
    it("Performance gain test", () =>{
        const expectedOutput = {
            initialInvestment: 10000,
            currentValue: 12000,
            profitOrLoss: 2000,
            percentageChange: 20,
            performanceSummary: "The portfolio has gained significantly"
        }

        expect(portfolioPerformance(10000, 12000)).toStrictEqual(expectedOutput)
    })

    it("Performance loss test", () =>{
        const expectedOutput = {
            initialInvestment: 10000,
            currentValue: 9500,
            profitOrLoss: -500,
            percentageChange: -5,
            performanceSummary: "The portfolio has lost slightly"
        }

        expect(portfolioPerformance(10000, 9500)).toStrictEqual(expectedOutput)
    })
    it("Performance no change test", () =>{
        const expectedOutput = {
            initialInvestment: 10000,
            currentValue: 10000,
            profitOrLoss: 0,
            percentageChange: 0,
            performanceSummary: "The portfolio has not changed"
        }

        expect(portfolioPerformance(10000, 10000)).toStrictEqual(expectedOutput)
    })
})