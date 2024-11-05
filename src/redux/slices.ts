import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGenericPayload } from "../types/redux";

const treasurSlice = createSlice({
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
    // addNewClaim: (state, action: PayloadAction<IGenericPayload>) => {},
    approveClaim: (state, action: PayloadAction<IGenericPayload>) => {
      state -= action.payload.amount!;
    },
  },
});
