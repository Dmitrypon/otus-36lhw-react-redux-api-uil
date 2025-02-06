import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import "../styles/regCard.css";

const Register = () => {
  const [nickname, setNickname] = useState(""); // Состояние для имени пользователя
  const [email, setEmail] = useState(""); // Состояние для email
  const [password, setPassword] = useState(""); // Состояние для пароля

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Функция обработки отправки формы
  const handleRegister = (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы

    // Проверяем, заполнены ли все поля
    if (!nickname || !email || !password) {
      alert("Заполните все поля!");
      return;
    }

    // Диспатчим пользователя (можно заменить на `registerUser`)
    dispatch(login({ nickname, email, password, token: "fakeToken" }));

    navigate("/home");
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Регистрация</h2>
        <input
          type="text"
          name="nickname"
          placeholder="Имя пользователя"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Зарегистрироваться</button>
      </div>
    </div>
  );
};

export default Register;