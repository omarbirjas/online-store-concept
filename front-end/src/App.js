import React from 'react';
import {Homepage} from "./pages/Homepage.jsx"
import {HeaderBar} from "./containers/HeaderBar.jsx"
import './App.css';
import { ItemGallery } from './containers/ItemGallery.jsx';

function App() {
  return (
    <div className = "app">
      <HeaderBar/>
      <Homepage/>
    </div>
  );
}

export default App;
