import React from "react";

function IsUserLoggedIn(props) {

  return <ul>

    {Object.values(props).map(function (item) {
      return <li>{item.name + " " + item.isUserLoggedIn}</li>

    })}






  </ul>
}

export default IsUserLoggedIn;