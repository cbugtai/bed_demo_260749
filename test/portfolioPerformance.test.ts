import { calculatePortfolioPerformance, largestHolding, assetAllocationPercentage } from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance function test", () => {
    it("Performance gain test", () =>{
        const expectedOutput = {
            initialInvestment: 10000,
            currentValue: 12000,
            profitOrLoss: 2000,
            percentageChange: 20,
            performanceSummary: "The portfolio has gained significantly"
        }

        expect(calculatePortfolioPerformance(10000, 12000)).toStrictEqual(expectedOutput);
    })

    it("Performance loss test", () =>{
        const expectedOutput = {
            initialInvestment: 10000,
            currentValue: 9500,
            profitOrLoss: -500,
            percentageChange: -5,
            performanceSummary: "The portfolio has lost slightly"
        }

        expect(calculatePortfolioPerformance(10000, 9500)).toStrictEqual(expectedOutput);
    })
    it("Performance no change test", () =>{
        const expectedOutput = {
            initialInvestment: 10000,
            currentValue: 10000,
            profitOrLoss: 0,
            percentageChange: 0,
            performanceSummary: "The portfolio has not changed"
        }

        expect(calculatePortfolioPerformance(10000, 10000)).toStrictEqual(expectedOutput);
    })
})

describe("largestholding function test", () => {
    it("Should return largest asset", () => {
        expect(largestHolding({house:120000, stock:15000, bond:10000})).toBe("House")
        expect(largestHolding({house:10000, stock:120000, bond:15000})).toBe("Stock")
        expect(largestHolding({house:15000, stock:10000, bond:120000})).toBe("Bond")
    })
})

describe("assetAllocationPercentage function test", () =>{
    it("Should return asset allocation percentages", () => {
        const assets = {
            house:120000, 
            stock:15000, 
            bond:10000
        }

        expect(assetAllocationPercentage(assets)).toBe("10% of your money is in Stocks, 7% in Bonds and the rest, 83% is in your House.")
        expect(assetAllocationPercentage({house:0, stock:20000, bond:15000})).toBe(
            "57% of your money is in Stocks, 43% in Bonds and the rest, 0% is in your House.")
    })
})