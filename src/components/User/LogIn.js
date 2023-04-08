import { useRef, useState } from "react";
import "./User.css";
import { Link, useHistory, Redirect } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const LogIn = () => {
  let emailRef = useRef();
  let passwordRef = useRef();
  const { logIn } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { currentUser } = useAuth();

  async function logInHandle(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await logIn(emailRef.current.value, passwordRef.current.value).then(
        () => {
          history.push("/");
        }
      );
    } catch (err) {
      if (err.message === "The email address is badly formatted.") {
        setError("Invalid email! Please try again.");
      } else if (
        err.message ===
        "The password is invalid or the user does not have a password."
      ) {
        setError("Invalid password!");
      } else if (
        err.message ===
        "There is no user record corresponding to this identifier. The user may have been deleted."
      ) {
        setError("No such user! Please register.");
      } else {
        setError(err.message);
      }
    }
    setLoading(false);
  }
  if (currentUser) {
    return <Redirect exact to="/" />;
  }
  return (
    <form onSubmit={logInHandle} className="col-md-4 offset-4 user-box">
      <h3>ВХОД</h3>
      {error && <p className="alert-login">{error}</p>}
      <div className="form-group">
        <label>Имейл</label>
        <input
          type="email"
          ref={emailRef}
          className="form-control"
          placeholder="Напишете имейл"
        />
      </div>
      <div className="form-group">
        <label>Парола</label>
        <input
          type="password"
          ref={passwordRef}
          className="form-control"
          placeholder="Напишете парола"
        />
      </div>
      <div>
        <button disabled={loading} className="btn btn-info btn-lg btn-block">
          ВХОД
        </button>
      </div>
      <div>
        <p>
          Нямате акаунт? <Link to="signup">Регистрация</Link>!
        </p>
      </div>
    </form>
  );
};

export default LogIn;
