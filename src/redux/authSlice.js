import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null, // Начальное состояние user
};

const authSlice = createSlice({
  //name: "auth",
  name: "user",
  
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload)); // Сохраняем в localStorage
    },
    logout: (state) => {
      state.value = null;
      localStorage.removeItem("user"); // Удаляем из localStorage
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;