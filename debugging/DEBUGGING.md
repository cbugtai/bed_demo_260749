# Debugging Analysis

## Scenario 1: calculatePortfolioPerformance Execution

-   **Breakpoint Location:** portfolioPerfomance.ts Line 14
-   **Objective:** How the calculatePortfolioPerformance function works

### Debugger Observations

-   **Variable States:** Key variables include {initialInvestment: 10000, currentValue: 12000, profitOrLoss: 2000, percentageChange: 20}
-   **Call Stack:** function is called from the app.ts with the arguments {initial: 10000, current: 12000}
-   **Behavior:** Once the function gets called, it uses the initial and current arguments to calculate 
                profitOrLoss and uses the value from that to calculate percentageChange.

### Analysis

-   I learned that the calculatePortfolioPerformance function's logic is working as intended.
-   No unexpected behavior observed.
-   No areas of improvement found at this part of the code at this time.
-   Understanding how this function works allows me to understand how the rest of the code that uses this function better.

## Scenario 2: assetAllocationPercentage Execution

-   **Breakpoint Location:** portfolioPerfomance.ts Line 102
-   **Objective:** If the assetAllocaionPercentage is working as intended

### Debugger Observations

-   **Variable States:** {
                            houseValue: 120000,
                            stockValue: 15000,
                            bondValue: 10000,
                            totalValue: 145000,
                            housePercentage: 83,
                            stockPercentage: 10,
                            bondPercentage: 7
                        }
-   **Call Stack:** function is called win the app.ts with the argument (assets {house: 120000,stock: 15000,bond: 10000,})
-   **Behavior:** once the function is called it calculated the total value of all assets then 
                uses that total value to calculate the percentage of each asset 

### Analysis

-   That the function is working as intended
-   No unexpected behavior is observed at this time.
-   Yes. the code is currently too rigid, making the code more dynamic would improve maintainability of this code
-   Understanding how this function works allows me to understand how the rest of the code that uses this function better.

## Scenario 3: Determine the body of the response from an endpoint 

-   **Breakpoint Location:** app.test.ts Line 33
-   **Objective:** Determine whats in the body of the response when this endpoint is called

### Debugger Observations

-   **Variable States:** {
                            status: "Ok",
                            uptime: 2.0777751,
                            timestamp: "2025-01-31T17:39:02.614Z",
                            version: "1.0.0",
                        }
-   **Call Stack:** app.test.ts awaits a response from the get("/api/v1/health") endpoint
-   **Behavior:** app.test.ts calls the endpoint, gets a response then compares that response to the expected responses

### Analysis

-   The "GET api/v1/health" test is working as expected.
-   No unexpected behavior observed.
-   Instead of just checking if the property exists, a more specific test using the response values can be done.
-   It shows me what i can expect to get for a response from this endpoint.