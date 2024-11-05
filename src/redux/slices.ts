import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IClaim, IGenericPayload, IPolicy } from "../types/redux";
import { v4 } from "uuid";
import { initialClaim, initialPolicy } from "./initial";

export const treasurSlice = createSlice({
  name: "treasur",
  initialState: 7500,
  reducers: {
    addNewPolici: (state: number, action: PayloadAction<IGenericPayload>) => {
      state += action.payload.amount!;
    },
    deletePolici: (state: number, action: PayloadAction<IGenericPayload>) => {
      state -= action.payload.amount!;
    },
    updatePolici: (state, action: PayloadAction<IGenericPayload>) => {
      state += action.payload.amount!;
    },
    approveClaim: (state, action: PayloadAction<IGenericPayload>) => {
      state -= action.payload.amount!;
    },
  },
});

export const claimsSlice = createSlice({
  name: "claims",
  initialState: [initialClaim],
  reducers: {
    addNewClaim: (state: IClaim[], action: PayloadAction<IGenericPayload>) => {
      state.push({...action.payload , id:v4() , createdAt:new Date() , approved:false} as IClaim);
    },
   
    approveClaim: (state: IClaim[], action: PayloadAction<IGenericPayload>) => {
      let claim = state.find((claim)=> claim.id=== action.payload.id)
      if (claim){
        claim.approved = true
      }
    },
  },
});



export const policiesSlice = createSlice({
  name: "policies",
  initialState: [initialPolicy],
  reducers: {
    addNewPolici: (
      state: IPolicy[],
      action: PayloadAction<IGenericPayload>
    ) => {
      state.push({
        ...action.payload , id:v4(), createdAt: new Date()
      }as IPolicy);
    },
    deletePolici: (
      state: IPolicy[],
      action: PayloadAction<IGenericPayload>
    ) => {
      state = state.filter((policy) => policy.id != action.payload.id);
    },
    updatePolici: (
      state: IPolicy[],
      action: PayloadAction<IGenericPayload>
    ) => {
      let policy = state.find((policy) => policy.id === action.payload.id!);
      if (policy) {
        policy.price = action.payload.amount!;
      }
    },
  },
});