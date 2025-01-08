// app.get("/",(req,res) => {
//     res.send("Hello World!");
// })

import request, { Response } from "supertest";

import app from "../src/app";

describe("GET /", () => {
    it("should return a 200 response with Hello World!", async () => {
        const response: Response = await request(app).get("/");

        expect(response.status).toBe(200);
        expect(response.text).toBe("Hello World!");
    })
})