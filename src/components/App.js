/*import logo from '../images/logo.svg';
import '../styles/App.css';*/
//import React from "react";

import Users from "./Users";
import ActivitiesList from "./ActivitiesList";

function App({ name, lastname, age, subjects, ...props }) {
  //(props) = ({ name, lastname, age, subjects })
  //variables sin props
  //const name = "Cindy";
  //const lastname= "Yazán";

  console.log("PROPS", props);

  //se desestructura el objeto props para no utilizarlo muchas veces
  //destructuring assigment
  //const { name, lastname, age, subjects } = props;

  return (
    //<React.Fragment>
    <>
      <div className="greeting">
        Hola {name} {lastname}
      </div>
      <div className="age">Edad: {age}</div>

      <div>Subjects: </div>
      <ul>
        {subjects.map((subject) => {
          return <li>{subject}</li>;
        })}

        <li>{subjects[0]}</li>
        <li>{subjects[1]}</li>
      </ul>

      <Users />

      <ActivitiesList />
    </>

    //</React.Fragment>
    // variables van entre llaves

    /*
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App; //se exporta para que se vea por otros componentes
