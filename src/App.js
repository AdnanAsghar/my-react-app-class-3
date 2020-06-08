import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './index.css';

function App(props) {
  return (
    <div>
     <p>Hello Handsome <strong>{props.name}</strong>!!</p>
     <br/>
     <ul>
       <li>Item 1</li>
       <li>Item 2</li>
       <li>Item 3</li>
     </ul>
    <br/>
    <ol className = "myItem">
       <li>Item 1</li>
       <li>Item 2</li>
       <li>Item 3</li>
     </ol>
     <br/>

     <p>Some JSX code below</p>
  <p>The sum to 5 and 10 is {5+10}</p>
    </div>
  );
}

export default App;
