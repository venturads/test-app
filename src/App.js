import React from 'react';
import './App.css';
import Todos from './components/Todos';
import ContactCard from './components/ContactCard';

function App() {
  return (
    <div className="App">
      <h1>my app</h1>
      <Todos />
      <ContactCard
        contact = {{name: "Mr Anderson", company: "Target", phone: "(909) 123-5555" }}
        />
    </div>
  );
}

export default App;
