import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; // Router: allows us to use routes in our app Switch: only one route is rendered at a time. Route: renders a component when the path matches the current URL
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );

};



export default App;