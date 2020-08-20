import React from 'react';
import Container from './components/Container'
import Jumbotron from './components/Jumbotron';
//Renders Jumbotron and Container (containing state and all other components)
function App() {
  return (
    <div>
    <Jumbotron />
    <Container />
    </div>
  );
}

export default App;
