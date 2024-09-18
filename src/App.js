import './App.css';
import React from 'react';
import MyComponent from './components/MyComponent';  // Correctly capitalized
import Calculator from './components/Caculator';

function App() {
  return (
    <div>
      <MyComponent />  {/* Correctly capitalized usage */}
      <Calculator/>
    </div>
  );
}

export default App;
