import { configureStore } from '@reduxjs/toolkit'; // Импортируем функцию для создания хранилища
import authReducer from './authSlice'; // Импортируем редьюсер для аутентификации

// Конфигурируем хранилище Redux с использованием Redux Toolkit
export const store = configureStore({
  reducer: {
    auth: authReducer,  // Подключаем редьюсер для аутентификации
  },
});