export interface IClaim {
  id: string;
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
  age: number;
}

export interface IGenericPayload {
  id?: string;
  amount?: number;
  policyId?: string;
}
