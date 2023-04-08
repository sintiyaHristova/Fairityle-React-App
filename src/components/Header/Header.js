import { NavLink, useHistory } from "react-router-dom";
import "./Header.css";
import { useAuth } from "../../Context/AuthContext";
const Header = () => {
  const { currentUser, logOut } = useAuth();
  const history = useHistory();
  function logOutHandle(e) {
    e.preventDefault();
    logOut();
    history.push("/");
  }

  return (
    <header>
      <nav className="navbar">
        <div className="navbar--link">
          <NavLink className="navbar--link-item" to="/">
            НАЧАЛО
          </NavLink>
          {currentUser && (
            <NavLink className="navbar--link-item" to="/myHeroes">
              МОИТЕ ПРИКАЗКИ
            </NavLink>
          )}
        </div>

        <div className="navbar--link">
          {!currentUser && (
            <NavLink className="navbar--link-item" to="/signup">
              РЕГИСТРАЦИЯ
            </NavLink>
          )}
          {!currentUser && (
            <NavLink className="navbar--link-item" to="/login">
              ВХОД
            </NavLink>
          )}
          {currentUser && (
            <NavLink className="navbar--link-item" to="/all">
              ВСИЧКИ ПРИКАЗКИ
            </NavLink>
          )}
           {!currentUser && (
            <NavLink className="navbar--link-item" to="/all">
              ВСИЧКИ ПРИКАЗКИ
            </NavLink>
          )}
         
          {currentUser && (
            <form onSubmit={logOutHandle}>
              <button className="navbar--link-item logoutbutton">ИЗХОД</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

