import "./Home.css";
import video from "../../Resoures/fairityle.mp4";
import { useAuth } from "../../Context/AuthContext";

const Home = () => {
  useAuth();
  return (
    <div className="home-page">
      <video type="vide/mp4" src={video} autoPlay={true} loop={true}></video>
      <p className="info-message">Разкажи ми приказка...</p>
    </div>
  );
};

export default Home;
