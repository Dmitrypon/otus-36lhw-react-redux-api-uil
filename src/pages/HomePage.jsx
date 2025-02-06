import { Navigate, Link } from "react-router-dom"; // Добавили Link
import { useSelector, useDispatch } from "react-redux"; // Добавили useSelector, useDispatch
import { login, logout } from "../redux/authSlice"; // Импорт экшена (если он в userSlice)
import "../styles/homeStyle.css";

const HomePage = () => {  
  const user = useSelector((state) => state.user.value); 
  //const user = useSelector((state) => null);    // Вот так проверю
  //return <h1>Hello, {user.nickname}!</h1>;
  console.log("User in HomePage:", user); // Проверяем, есть ли пользователь 

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
 }; 

  // Если пользователь не авторизован, перенаправляем на страницу логина
   if (!user) { 
    return <Navigate to="/login" />;
  }

 // useEffect(() => {
 //   if (!dataLoaded) { // Проверяем, загружены ли данные
 //     dispatch(fetchData());
  //  }
  //}, [dispatch, dataLoaded]); //
  
  return (
<div className="home-container">
<h1>Home Page OTUS</h1>
<p>Выберите страницу:</p>
  <nav>
    <Link to="/login"><button>Login</button></Link>
    <Link to="/register"><button>Register</button></Link>
    <Link to="/notfound"><button>NotFound</button></Link>
    <button onClick={handleLogout}>Logout</button> 
  </nav>  
</div>
  );
};

export default HomePage;