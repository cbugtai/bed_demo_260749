//external imports
import express, { Express } from "express";
//import express from "express"
//import { Express } from "express"

// internal imports
import setupSwagger from "../config/swagger";

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

export default app;
