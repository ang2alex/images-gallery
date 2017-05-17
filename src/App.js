import 'babel-polyfill';

import React from 'react';
import './styles/header.css';
import GalleryContainer from './containers/GalleryContainer.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Image Gallery</h2>
        </div>
        <GalleryContainer/>
      </div>
    );
  }
}

export default App;
