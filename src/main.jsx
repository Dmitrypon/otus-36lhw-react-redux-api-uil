import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store'; // Импортируем объект store для Redux
import App from './App'; // Импортируем основной компонент приложения

// Восстанавливаем состояние из localStorage
const savedUser = localStorage.getItem('user'); // Получаем данные пользователя из localStorage

if (savedUser) {                       // Если данные пользователя есть в localStorage
  const user = JSON.parse(savedUser); // Парсим данные пользователя из JSON
  store.dispatch({
    type: 'auth/login', // Диспатчим экшн для логина
    payload: user,  // Передаем данные пользователя в Redux
  });
}

// Рендерим компонент App внутри провайдера Redux (Provider)
// Это позволяет любому компоненту в приложении иметь доступ к хранилищу Redux
ReactDOM.createRoot(document.getElementById('root')).render(
 // Оборачиваем приложение в Provider для работы с Redux
 <Provider store={store}> 
    <App /> 
  </Provider>
);