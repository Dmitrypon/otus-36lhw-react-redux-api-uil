import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');  //  Состояние для email
  const [password, setPassword] = useState('');  // Состояние для пароля

  // Функция для обработки отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();  //  Предотвращаем перезагрузку страницы
    // Логика для регистрации (например, отправка данных на сервер)
  };
 
 return (
<div>
 <h2>Register</h2>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
