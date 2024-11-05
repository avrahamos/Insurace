export interface IClaim {
  id: string;
  name: string;
  policyId: string;
  approved: boolean;
  amount: number;
  createdAt: Date;
}
export interface IPolicy {
  id: string;
  name: string;
  price: number;
  createdAt: Date;
  age:number
}


