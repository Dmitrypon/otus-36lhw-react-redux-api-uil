import { configureStore } from '@reduxjs/toolkit'; // Импортируем функцию для создания хранилища
import authReducer from './authSlice'; // Импортируем редьюсер для аутентификации

// Конфигурируем хранилище Redux с использованием Redux Toolkit
const store = configureStore({
  reducer: {
    user: authReducer,  // Подключаем редьюсер для аутентификации
  },
});

export default store;