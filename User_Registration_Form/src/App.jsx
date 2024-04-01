import React, { useState } from "react";

import "./App.css";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Home from "./Components/Home";

function App() {

const [loggedIn, setLoggedIn] = useState(false);
const [toggleForm, setToggleForm] = useState(false);


//Since states can be changed directly from the child component using props.

const IsLoggedIn =()=> {
  setLoggedIn(!loggedIn)
}

const ToggleForm =()=> {
  setToggleForm(!toggleForm);
};

 return (
  <>
  {loggedIn ? ( <Home IsLoggedIn={IsLoggedIn} /> ) : (
  toggleForm ? ( <Login ToggleForm={ToggleForm} IsLoggedIn={IsLoggedIn} />) : ( <SignUp ToggleForm={ToggleForm} /> ) ) }
 </>
 )
}

export default App;

//loggedIn ? (Home) : ( toggleForm ? (Login) : (SignUp)  )