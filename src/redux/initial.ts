import { v4 } from "uuid";
import { IClaim, IPolicy } from "../types/redux";

export const initialPolicy: IPolicy = {
  price: 1000,
  createdAt: new Date(),
  id: v4(),
  age: 45,
  name: "Jonny Jonnyahoo Jr",
};


export const initialClaim: IClaim = {
  id: v4(),
  amount: 1000,
  approved: true,
  createdAt: new Date(),
  policyId: initialPolicy.id,
};
