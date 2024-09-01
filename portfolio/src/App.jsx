import React, { useState } from 'react'; // Import useState from React
import './App.css';
import Navbar from './components/Navbar/Navbar'; // Ensure the import path is correct

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      {/* Additional UI elements can go here */}
    </>
  );
}

export default App;
