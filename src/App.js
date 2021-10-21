/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Password } from "@mui/icons-material";
import Navigation from "./component/Navi/Navigation";
import Home from "./component/Navi/Home"
import About from './component/Navi/About'
import Error from './component/Navi/Error'
// import db from './db.json'

function App() {
 //login
//  const adminUser  = {
//    email: "admin@admin.com",
//    password: "admin123"
//  }
//  const [user, setUser] = useState({name:"", email:""});
//  const [error, setError] = useState("");
//  const Login = details => {
//    console.log(details);
//    if(details.email == adminUser.email  && details.password == adminUser.password){
//      console.log("Logged in");
//      setUser({
//        name: details.name,
//        email: details.email
//      });
      
//    }
//    else{
//      setError("Details do not match!!");
//    }
//  }
//  const Logout = () => {
//    setUser({name:"", email:""});
//  }
  return (
    // <div className="App">
    //   {(user.email != "")?(
    //     <div className="welcome">
    //       <h2>Welcome, <span>{user.name}</span></h2>
    //       <button onClick={Logout}>Logout</button>
    //     </div>
    //   ):(
    //     <LoginForm Login={Login} error={error}/>
    //   )}
      
    // </div>
    <header className="App-header">
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/:somestring" component={Error}/>
        </Switch>
      </Router>
        
      </header>
  );
}
export default App;
