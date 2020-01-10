import React from 'react';
import NavBar from './components/NavBar/NavBar.jsx';

import './main.css';
import data from './data/navigation.json';

const App = () => (
  <div className="app-container">
    <NavBar destinations={data.cities} />
    {/* IN ACTUAL PRODUCTION, YOU MAY INSERT A SWITCH COMPONENT TO INCLUDE ROUTES */}
  </div>
);

export default App;
