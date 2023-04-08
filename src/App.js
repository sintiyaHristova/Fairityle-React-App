import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./Context/AuthContext";
import "./App.css";
import AllFairityles from "./components/AllFairityles/AllFairityles";
import OneFairityle from "./components/OneFairityle/OneFairityle";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import SignUp from "./components/User/SignUp";
import LogIn from "./components/User/LogIn";
import Create from "./components/Create/Create";
import MyFairityles from "./components/MyFairityles/MyFairityles";
import Edit from "./components/Edit/Edit";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Container className="wrapper">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/login" exact component={LogIn} />
            <Route path="/create" exact component={Create} />
            <Route path="/all" exact component={AllFairityles} />
            <Route path="/myHeroes" exact component={MyFairityles} />
            <Route path="/:heroId" exact component={OneFairityle} />
            <Route path="/:heroId/edit" exact component={Edit} />
          </Switch>
        </Container>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
