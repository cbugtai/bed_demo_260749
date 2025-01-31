//external imports
import express, { Express } from "express";
//import express from "express"
//import { Express } from "express"

// internal imports
import setupSwagger from "../config/swagger";
import { timeStamp } from "console";

import * as portfolio from "./portfolio/portfolioPerformance"

const app: Express = express();

setupSwagger(app);

app.get("/",(req,res) => {
    res.send("Hello World!");
})

/**
 * @openapi
 * /tasks:
 *  get:
 *   summary: Retrieve a lists of tasks
 *   tags: [Tasks]
 *   responses:
 *    200:
 *     description: A list of tasks
 */
app.get("/tasks", (req, res) => {
    res.send("Retrieved Tasks")
})

app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "Ok",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0"
    })
})


app.get("/portfolio", (req, res) => {
    const result: any = portfolio.calculatePortfolioPerformance(10000, 12000)
    res.send(`Portfolio Summary = ${result.json}`)
})

const assets = {
    house:120000, 
    stock:15000, 
    bond:10000
}
app.get("/portfolio/allocation", (req, res) => {
    const result: any = portfolio.assetAllocationPercentage(assets)
    res.send(`Asset Allocation Percentages = ${result.json}`)
})

export default app;
