import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Menu from "./components/Menu.js";
import Home from "./Home.js";
function App() {
  return (
    <Router>
      <Menu/>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
