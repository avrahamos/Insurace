import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const treasurSlice = createSlice({
  name: "treasur",
  initialState: 7500,
  reducers: {
    addNewPolici: (state:number, action: PayloadAction) => {
        
    },
    deletePolici: (state, action: PayloadAction) => {},
    updatePolici: (state, action: PayloadAction) => {},
    addNewClaim: (state, action: PayloadAction) => {},
    deleteClaim: (state, action: PayloadAction) => {},
    updateClaim: (state, action: PayloadAction) => {},
    approveClaim: (state, action: PayloadAction) => {},
  },
});