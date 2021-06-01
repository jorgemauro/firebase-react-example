import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppBarCustom from "./components/AppBarCustom" 
const  App=()=>{
  return (
    <Router>
<AppBarCustom/>
<Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
