import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main, Delivery } from "components/template";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/:id">
            <Delivery />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
