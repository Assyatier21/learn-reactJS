import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarOwn from "./components/NavbarOwn";
import Home from "./pages/Home";
import Create from "./pages/Create";
import NotFound from "./pages/NotFound";
import Blogdetails from "./components/Blogdetails";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarOwn />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/blogs/:id">
              <Blogdetails />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
