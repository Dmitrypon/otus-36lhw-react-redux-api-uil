import React from 'react';
import { useSelector } from 'react-redux';  // Хук для доступа к состоянию Redux
import { Navigate } from 'react-router-dom';  // Компонент для перенаправления на другую страницу
 
const HomePage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);  // Проверка авторизации из Redux
 
  if (!isAuthenticated) {  // Если пользователь не авторизован
    return <Navigate to="/login" />;  // Перенаправляем на страницу логина
  }
 
  return <div>Welcome to the Home Page!</div>;  // Если авторизован, показываем главную страницу
};
 
export default HomePage;