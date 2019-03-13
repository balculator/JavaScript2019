import React, { Component } from "react";
import IsUserLoggedIn from "./IsUserLoggedIn";

// Import IsUserLoggedIn here

class App extends Component {
  render() {
    const Users = [
      {
        name: "Matty",
        isUserLoggedIn: false
      },
      {
        name: "Lucy",
        isUserLoggedIn: true
      },
      {
        name: "Petra",
        isUserLoggedIn: true
      }




    ];
    return (
      <div className="App">
        {IsUserLoggedIn(Users)}
      </div>
    );
  }
}

export default App;
