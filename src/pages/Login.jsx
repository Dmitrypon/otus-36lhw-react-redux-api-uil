import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Хук для dispatch экшенов в Redux
import { login } from '../redux/authSlice'; // Импортируем экшн для логина
import { useNavigate } from 'react-router-dom'; // Хук для навигации между страницами
import '../styles/regCard.css'
 
const Login = () => {
  const [email, setEmail] = useState('');  // Состояние для email
  const [password, setPassword] = useState('');  // Состояние для пароля
  const dispatch = useDispatch();  // Хук для dispatch в Redux
  const navigate = useNavigate();  // Хук для перенаправления на другую страницу
 
  // Функция для обработки отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();  // Предотвращаем перезагрузку страницы
 
    // Проверяем, что email и пароль введены
    if (email && password) {
      const user = { email };  // Создаем объект с данными пользователя (в реальном приложении может быть больше данных)
      dispatch(login(user));  // Диспатчим экшн для логина
 
      // Сохраняем данные пользователя в localStorage
      localStorage.setItem('user', JSON.stringify(user));
 
      // Перенаправляем пользователя на главную страницу
      navigate('/home');
    }
  };
 
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}  // Обновляем значение email
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}  // Обновляем значение пароля
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
 
export default Login;