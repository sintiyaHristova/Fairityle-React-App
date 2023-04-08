import { useRef, useState } from "react";
import "./User.css";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const SignUp = () => {
  let emailRef = useRef();
  let passwordRef = useRef();
  let confirmPasswordRef = useRef();
  const { signUp } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const history = useHistory();

  async function signUpHandle(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Паролата не съвпада!");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      history.push("/login");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }
  if (currentUser) {
    return <Redirect exact to="/" />;
  }
  return (
    <>
      <form onSubmit={signUpHandle} className="col-md-4 offset-4 user-box">
        <h3>Регистрация</h3>
        {error && <p className="alert-login">{error}</p>}
        <div className="form-group">
          <label>Имейл</label>
          <input
            type="email"
            ref={emailRef}
            className="form-control"
            placeholder="Напишете имейл"
            required
          />
        </div>
        <div className="form-group">
          <label>Парола</label>
          <input
            type="password"
            ref={passwordRef}
            className="form-control"
            placeholder="Напишете парола"
            required
          />
        </div>
        <div className="form-group">
          <label>Потвърди паролата</label>
          <input
            type="password"
            className="form-control"
            ref={confirmPasswordRef}
            placeholder="Потвърдете паролата"
            required
          />
        </div>
        <button disabled={loading} className="btn btn-info btn-lg btn-block">
          Регистрация
        </button>
        <div>
          <p>
            Вече имате акаунт? <Link to="login">Вход</Link>!
          </p>
        </div>
      </form>
    </>
  );
};

export default SignUp;
