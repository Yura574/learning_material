import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
<Rating/>
      <Accordion/>
    </div>
  );
}

export default App;

export function Rating(){
  return(
      <div>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
      </div>
  )
}

export function Star() {
  return(
      <div>
        Star
      </div>
  )
}

export function Accordion() {
  return (
      <div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
  )
}
