import request, { Response } from "supertest";

import app from "../src/app";

// app.get("/",(req,res) => {
//     res.send("Hello World!");
// })
describe("GET /", () => {
    it("should return a 200 response with Hello World!", async () => {
        const response: Response = await request(app).get("/");

        expect(response.status).toBe(200);
        expect(response.text).toBe("Hello World!");
    })
})

// app.get("/api/v1/health", (req, res) => {
//     res.json({
//         status: "Ok",
//         uptime: process.uptime(),
//         timestamp: new Date().toISOString(),
//         version: "1.0.0"
//     })
// })
describe("GET api/v1/health", () => {
    it("should return server health status", async () =>{
        const response: Response = await request(app).get("/api/v1/health");

        expect(response.status).toBe(200);
        expect(response.body.status).toBe("Ok");
        expect(response.body).toHaveProperty("uptime");
        expect(response.body).toHaveProperty("timestamp");
        expect(response.body.version).toBe("1.0.0");
    })
})