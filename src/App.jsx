import React from 'react';
import NavBar from './components/NavBar/NavBar.jsx';

import data from './data/navigation.json';

const App = () => (
  <div>
    <NavBar destinations={data.cities} />
  </div>
);

export default App;
