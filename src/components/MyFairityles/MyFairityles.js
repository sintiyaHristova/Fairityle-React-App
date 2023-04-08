import { Redirect, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../../Firebase/firebase";
import { Badge } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext";
import HeroCard from "../AllFairityles/Fairityle";
import "./MyFairityles.css";

const MyFairityles = () => {
  const [heroes, setHeroes] = useState([]);
  const { currentUser } = useAuth();

  function onDeleteHandler(heroId) {
    db.collection("heroes").doc(heroId).delete();
  }

  useEffect(() => {
    db.collection("heroes").onSnapshot((snapshot) => {
      const newHeroes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setHeroes(newHeroes.filter((h) => h.createdBy === currentUser.email));
    });
  }, [heroes, currentUser.email]);

  if (!currentUser) {
    return <Redirect exact to="/"></Redirect>;
  }
  return (
    <div className="text-center text-light">
      <h1>
        <Badge variant="info">Моите приказки и любими герои към тях</Badge>
      </h1>
      <Link className="fairityle-link" to="/create">
        Напиши своя авторска приказка
      </Link>
      <br />
      <div className="text-center border-warning">
        <section
          className="d-flex flex-row justify-content-center"
          style={{ width: "100%" }}
        >
          {heroes.map((hero) => (
            <div key={hero.heroImageURL} className="myFairityle">
              <HeroCard key={hero.id} {...hero} />
              <div key={hero.heroName}>
                <Link
                  key={hero.heroDescription}
                  to={`${hero.id}/edit`}
                  className="edit"
                >
                  Редактирай
                </Link>
                <button
                  onClick={() => onDeleteHandler(hero.id)}
                  key={hero.createdBy}
                  className="delete"
                >
                  Х
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default MyFairityles;
