import request from "supertest";
import { app } from "../app";

describe("Test home API endpoint request", () => {
  test("Homepoint GET should return correct message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Welcome to the Drinks API!");
  });
});
describe("Test coffeelover endpoint request", () => {
  test("coffeelover GET should return correct message", async () => {
    const res = await request(app).get("/coffeelover");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("I like coffee!");
  });
});
