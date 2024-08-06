import { createSlice } from "@reduxjs/toolkit";

/*----------------------Initial State----------------------*/
const initialState = {
  login: false,
  userData: null,
};

/*----------------------record slice----------------------*/
const userSlice = createSlice({
  name: "record",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.login = true;
      state.userData = action.payload;
    },
    setLogout: (state) => {
      state.login = false;
      state.userData = null;
    },
  },
});

export const { setAuth, setLogout } = userSlice.actions;

export default userSlice.reducer;
