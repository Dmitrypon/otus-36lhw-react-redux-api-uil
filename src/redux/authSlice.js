import { createSlice } from '@reduxjs/toolkit';  // Импортируем функцию для создания слайса

// Начальное состояние
const initialState = {
  isAuthenticated: false, // Пользователь не авторизован по умолчанию
  user: null,             // Данные пользователя (пока пустые)
};
 
// Функция для сохранения пользователя в localStorage
const saveUserToLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user)); // Сохраняем данные пользователя в localStorage
};
 
// Функция для удаления данных пользователя из localStorage
const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user'); // Удаляем данные пользователя из localStorage
};
 
// Создание слайса для управления состоянием аутентификации
const authSlice = createSlice
({
  name: 'auth',  // Название слайса
  initialState,  // Начальное состояние
  reducers: 
  {
    login: (state, action) => {  // Логика для входа пользователя
      state.isAuthenticated = true; // Устанавливаем статус авторизации
      state.user = action.payload;  // Сохраняем данные пользователя в Redux
      saveUserToLocalStorage(action.payload);  // Сохраняем пользователя в localStorage
    },
    logout: (state) => {  // Логика для выхода пользователя
      state.isAuthenticated = false;  // Снимаем статус авторизации
      state.user = null;  // Убираем данные пользователя
      removeUserFromLocalStorage();  // Удаляем данные пользователя из localStorage  },
    },
 },
});

// Экспортируем экшены для использования в компонентах
export const { login, logout } = authSlice.actions;

export default authSlice.reducer; // Экспортируем редьюсер