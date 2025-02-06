import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
     <div>
      <h1>404 Страница не найдена</h1>
      <p>К сожалению, страница, которую вы ищете, не существует.</p>
      <Link to="/home">Вернуться на главную</Link>
      </div>
  )
};
 
export default NotFound;