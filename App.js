import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './schedulingComponents/Home';
import {BrowserRouter as Router, Switch, Route}
from "react-router-dom";
import Chat from "./chatComponents/Chat";



function App() {
  
  return (
    <Router>
    <div className="App" currentView="Month">
        <Header/>

        <Switch>
        <Route path = "/chat">
          
           <Chat />
        </Route>


        /* Home Page(Default Path)*/
        <Route path = "/">
          <Home />
        </Route>
      </Switch>  
    </div>
    </Router>

  );
}

export default App;
