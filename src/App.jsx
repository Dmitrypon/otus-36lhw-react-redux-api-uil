import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import { login } from "./redux/authSlice";

const App = () => {
  const dispatch = useDispatch();
  //const isAuthenticated = useSelector((state) => state.auth.value);
  //const user = useSelector((state) => state.user.value);
  const user = useSelector((state) => {
    console.log("Redux State:", state); // Проверяем, что в стейте
    return state.user?.value; // Защита от ошибки (если user undefined, не вызовет ошибку)
  });

  //React.useEffect(() => {
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser && !user) {  // Диспатчим только если user ещё не загружен!
      dispatch(login(JSON.parse(savedUser)));
    }
  }, [dispatch, user]); 
  
  return (
    <Routes> 
      <Route path="/" element={user ? <Navigate replace to="/home" /> : <Navigate replace to="/login" />} />
      <Route path="/home" element={user ? <HomePage /> : <Navigate replace to="/login" />} />
      <Route path="/login" element={user ? <Navigate replace to="/home" /> : <Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;