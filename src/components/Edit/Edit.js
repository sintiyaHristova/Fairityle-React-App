import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { db } from "../../Firebase/firebase";
import "./Edit.css";
const Edit = () => {
  const [hero, setHero] = useState({});
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    db.collection("heroes")
      .doc(params.heroId)
      .get()
      .then((snapshot) => {
        setHero(snapshot.data());
      });
  }, [params.heroId]);

  const onSubmitEditHandler = (e) => {
    e.preventDefault();

    let heroId = params.heroId;
    let updatedHero = {
      ...hero,
      heroName: e.target.heroName.value,
      heroDescription: e.target.heroDescription.value,
      heroImageURL: e.target.heroImageURL.value,
      heroClass: e.target.heroClass.value,
    };

    db.collection("heroes")
      .doc(heroId)
      .update(updatedHero)
      .then(history.push(`/${heroId}`));
  };

  return (
    <div className="editFairityle">
      <form onSubmit={onSubmitEditHandler}>
        <fieldset>
          <p className="field">
            <label htmlFor="heroName">ЗАГЛАВИЕ</label>
            <span className="input">
              <input
                type="text"
                name="heroName"
                id="heroName"
                placeholder="Name"
                defaultValue={hero.heroName}
                required
              />
              <span className="actions"></span>
            </span>
          </p>
          <p className="field">
            <label htmlFor="heroDescription">ПРИКАЗКА</label>
            <span className="input">
              <textarea
                rows="3"
                cols="30"
                type="text"
                name="heroDescription"
                id="heroDescription"
                placeholder="Description"
                defaultValue={hero.heroDescription}
                required
              ></textarea>
            </span>
          </p>
          <p className="field">
            <label htmlFor="heroImageURL">.</label>
            <span className="input">
              <input
                type="text"
                name="heroImageURL"
                id="heroImageURL"
                placeholder="Link of your hero Image"
                required
                defaultValue={hero.heroImageURL}
              />
              <span className="actions"></span>
            </span>
          </p>
          <p className="field">
            <label htmlFor="heroClass">ЖАНР</label>
            <span className="input">
              <select required type="text" name="heroClass">
                <option value="Фантастика">Фантастика</option>
                <option value="Детски">Детски</option>
                <option value="Класика">Класика</option>
                <option value="Друго">Друго</option>
              </select>
            </span>
          </p>
        </fieldset>
        <button className="save">ЗАПАЗИ</button>
      </form>
    </div>
  );
};

export default Edit;
