import React from "react";
import { db } from "../../Firebase/firebase";
import "./OneFairityle.css";
import { Link } from "react-router-dom";

class OneFairityle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hero: {},
      heroSpells: [],
    };
  }
  componentDidMount() {
    db.collection("heroes")
      .doc(this.props.match.params.heroId)
      .get()
      .then((snapshot) =>
        this.setState({
          hero: snapshot.data(),
          heroSpells: snapshot.data().heroSpells,
        })
      );
  }
  render() {
    return (
      <div>
        <div className="current-fairityle">
          <div className="fairyinfo">
            <img
              className="faImg"
              src={this.state.hero.heroImageURL}
              alt=""
            ></img>
            <p>Жанр: {this.state.hero.heroClass}</p>
            <p>Заглавие: {this.state.hero.heroName}</p>
            <p>Приказка:</p>
            <p className="fairityle">{this.state.hero.heroDescription}</p>
            <p className="created-by">
              Създадена от: {this.state.hero.createdBy}
            </p>
          </div>
          <div className="fair-wrapper">
            <h4>Любими герои от приказката</h4>
            {this.state.heroSpells.length !== 0 ? (
              this.state.heroSpells.map((spell) => (
                <div key={spell.spellName} className="fairDetails">
                  <img
                    className="fairImg"
                    src={spell.spellImageURL}
                    alt=""
                  ></img>
                  <div>
                    <p className="fair-info">
                      <strong>Име на героя: </strong>
                      {spell.spellName}
                    </p>
                    <p className="fair-info">
                      <strong>Положителни черти: </strong>
                      {spell.spellCd}
                    </p>
                    <p className="fair-info">
                      <strong>Отрицателни черти: </strong>
                      {spell.spellDmg}
                    </p>
                    <p className="fair-info">
                      <strong>Друго: </strong>
                      {spell.spellDescription}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p></p>
            )}
          </div>
        </div>
        <Link to="/all" type="button" className="backBtn">
          НАЗАД
        </Link>
      </div>
    );
  }
}

export default OneFairityle;
