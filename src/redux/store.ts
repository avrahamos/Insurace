import { configureStore } from "@reduxjs/toolkit";
import { claimsSlice, policiesSlice, treasurSlice } from "./slices";

export default configureStore({
  reducer: {
    trasure: treasurSlice.reducer,
    claims: claimsSlice.reducer,
    policy: policiesSlice.reducer,
  },
});

export const {
  addNewClaim,
  addNewPolici,
  approveClaim,
  deletePolici,
  updatePolici,
} = {
  ...treasurSlice.actions,
  ...claimsSlice.actions,
  ...policiesSlice.actions,
};
