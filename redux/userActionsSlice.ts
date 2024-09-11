import { createSlice } from "@reduxjs/toolkit";

export const userActionsSlice = createSlice({
  name: "userActions",
  initialState: {
    value: [],
    // value: {},

  },
  reducers: {
    addUserAction: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value = [...state.value, action.payload];
      // state.value = action;

    },
  },
});

export const { addUserAction } = userActionsSlice.actions;

export default userActionsSlice.reducer;
