import express, { Express } from "express";
//import express from "express"
//import { Express } from "express"

const app: Express = express();

app.get("/",(req,res) => {
    res.send("Hello World!");
})

export default app;
