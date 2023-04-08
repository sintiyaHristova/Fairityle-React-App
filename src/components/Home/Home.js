import "./Home.css";
import video from "../../Resoures/fairityle.mp4";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const Home = () => {
  useAuth();
  return (
    <div className="home-page">
      <video type="vide/mp4" src={video} autoPlay={true} loop={true}></video>
      <p className="info-message">Разкажи ми приказка...</p>
      <p className="login-message">
        <Link to="/all" className="login-btn">
          КАТАЛОГ
        </Link>
      </p>
    </div>
  );
};

export default Home;
