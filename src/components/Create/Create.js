import "./Create.css";
import { useAuth } from "../../Context/AuthContext";
import { db } from "../../Firebase/firebase";
import { Redirect } from "react-router-dom";
import { useState } from "react";
const Create = ({ history }) => {
  const user = useAuth();
  const [error, setError] = useState("");

  const createSubmitHandler = (e) => {
    e.preventDefault();

    if (e.target.heroName.value.length > 1000) {
      return setError(
        "Заглавието на приказката трябва да бъде максимум 1000 знака!"
      );
    }

    if (e.target.heroDescription.value.length > 10000) {
      return setError("Приказката трябва да бъде максимум 10000 знака!");
    }

    var spellNames = Array.from(e.target.spellName).map((spell) => spell.value);
    var spellCds = Array.from(e.target.spellCd).map((spell) => spell.value);
    var spellDesc = Array.from(e.target.spellDescription).map(
      (spell) => spell.value
    );
    var spellImgUrls = Array.from(e.target.spellImageURL).map(
      (spell) => spell.value
    );
    var spellDmgs = Array.from(e.target.spellDmg).map((spell) => spell.value);

    var newHeroSpells = [
      {
        spellName: spellNames[0],
        spellCd: spellCds[0],
        spellDescription: spellDesc[0],
        spellImageURL: spellImgUrls[0],
        spellDmg: spellDmgs[0],
      },
      {
        spellName: spellNames[1],
        spellCd: spellCds[1],
        spellDescription: spellDesc[1],
        spellImageURL: spellImgUrls[1],
        spellDmg: spellDmgs[1],
      },
      {
        spellName: spellNames[2],
        spellCd: spellCds[2],
        spellDescription: spellDesc[2],
        spellImageURL: spellImgUrls[2],
        spellDmg: spellDmgs[2],
      },
      {
        spellName: spellNames[3],
        spellCd: spellCds[3],
        spellDescription: spellDesc[3],
        spellImageURL: spellImgUrls[3],
        spellDmg: spellDmgs[3],
      },
    ];
    const hero = {
      heroName: e.target.heroName.value,
      heroDescription: e.target.heroDescription.value,
      heroImageURL: e.target.heroImageURL.value,
      heroClass: e.target.heroClass.value,
      createdBy: user.currentUser.email,
      heroSpells: newHeroSpells,
    };
    db.collection("heroes")
      .add(hero)
      .then(() => {
        history.push("/all");
      });
  };
  if (!user.currentUser) {
    return <Redirect exact to="/"></Redirect>;
  }
  return (
    <>
      <h2>МОЯТА ПРИКАЗКА И ЛЮБИМИ ГЕРОИ КЪМ НЕЯ</h2>
      {error && <p className="alert">{error}</p>}
    
      <form onSubmit={createSubmitHandler}>
        <div className="create-hero">
          <fieldset>
            <p className="field">
              <label htmlFor="heroName">ЗАГЛАВИЕ НА ПРИКАЗКАТА</label>
              <span className="input">
                <input
                  type="text"
                  name="heroName"
                  id="heroName"
                  placeholder="ЗАГЛАВИЕ"
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
                  placeholder="ПРИКАЗКА"
                  required
                ></textarea>
              </span>
            </p>
            <p className="field">
              <label htmlFor="heroImageURL">ИЗОБРАЖЕНИЕ ЗА КОРИЦА</label>
              <span className="input">
                <input
                  type="text"
                  name="heroImageURL"
                  id="heroImageURL"
                  placeholder="ЛИНК..."
                  required
                />
                <span className="actions"></span>
              </span>
            </p>
            <p className="field">
              <label htmlFor="heroClass">Жанр</label>
              <span className="input">
                <select required type="text" name="heroClass">
                  <option value="Фантастика">Фантастика</option>
                  <option value="Детски">Детски</option>
                  <option value="Класика">Класика</option>
                  <option value="Други">Други</option>
                </select>
              </span>
            </p>
          </fieldset>
          <fieldset>
            <p className="field">
              <label htmlFor="spellName">Име на героя</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellName"
                  placeholder="Име"
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellImageURL">Изображение</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellImageURL"
                  placeholder="Линк..."
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellCd">Положителни черти</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellCd"
                  placeholder="Положителни черти"
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellDmg">Отрицателни черти</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellDmg"
                  placeholder="Отрицателни черти"
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellDescription">Друго</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellDescription"
                  placeholder="."
                  required
                />
              </span>
            </p>
          </fieldset>
          <fieldset>
            <p className="field">
              <label htmlFor="spellName">Име на героя</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellName"
                  placeholder="Име"
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellImageURL">Изображение</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellImageURL"
                  placeholder="Линк..."
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellCd">Положителни черти</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellCd"
                  placeholder="Положителни черти"
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellDmg">Отрицателни черти</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellDmg"
                  placeholder="Отрицателни черти"
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellDescription">Друго</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellDescription"
                  placeholder="."
                  required
                />
              </span>
            </p>
          </fieldset>
          <fieldset>
            <p className="field">
              <label htmlFor="spellName">Име на героя</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellName"
                  placeholder="Име"
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellImageURL">Изображение</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellImageURL"
                  placeholder="Линк..."
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellCd">Положителни черти</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellCd"
                  placeholder="Положителни черти"
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellDmg">Отрицателни черти</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellDmg"
                  placeholder="Отрицателни черти"
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellDescription">Друго</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellDescription"
                  placeholder="."
                  required
                />
              </span>
            </p>
          </fieldset>
          <fieldset>
            <p className="field">
              <label htmlFor="spellName">Име на героя</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellName"
                  placeholder="Име"
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellImageURL">Изображение</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellImageURL"
                  placeholder="Линк..."
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellCd">Положителни черти</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellCd"
                  placeholder="Положителни черти"
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellDmg">Отрицателни черти</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellDmg"
                  placeholder="Отрицателни черти"
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellDescription">Друго</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellDescription"
                  placeholder="."
                  required
                />
              </span>
            </p>
          </fieldset>
        </div>
        <button type="submit" className="create-button">
          СЪЗДАЙ
        </button>
      </form>
    </>
  );
};

export default Create;
