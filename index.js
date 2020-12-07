import React, { Component } from 'react';
import { render } from 'react-dom';
import Tile from './Tile';
import Box from './Box';
import MainBox from './MainBox';
import Item from './Item';
import Grid, { HeaderGrid } from './Grid';
import './style.css';



const Tiles = Array.apply(null, Array(12)).map((x, i) => <Tile key={i} />);


class App extends Component {

  render() {
    return (
      <Box>
        {Tiles}
      </Box>
    );
  }
}

render(<App />, document.getElementById('root'));
