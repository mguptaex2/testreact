import './App.css';
import { Switch, Route} from "react-router-dom";
import Login  from "./Views/Login";
import Profile from './Views/Profile/Profile';
function App() {
  return (
    <div className="App">
    

     <Switch>
       <Route path="/login" component={Login} />
       <Route path="/profile" component={Profile} />

     </Switch>
    </div>
  );
}

export default App;
