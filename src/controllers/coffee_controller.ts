import Express from "express";
// OR import { Request, Response } from 'express'; as this is all we need
import * as coffeeService from "../services/coffee_service";
export const getCoffee = async (
  req: Express.Request<
    object,
    object,
    object,
    { coffeeName: string | undefined }
  >,
  res: Express.Response
) => {
  const { coffeeName } = req.query;
  const coffee = coffeeService.getCoffee(coffeeName);
  res.json(coffee).status(200);
};
