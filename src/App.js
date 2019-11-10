import React, { Component } from 'react';
import './App.css';

import Navigator from './components/navigator';
import Board from './components/board';
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  state = { 
    rows: 5,
    columns: 5,
    botPosition: {
      x: 1, 
      y: 5
    },
    botMovingTime: 1000,
    tiles: []
  }

  componentDidMount = () => {
    const tiles = [
      { id: 1, y: 1, x: 1 },
      { id: 2, y: 1, x: 2 },
      { id: 3, y: 1, x: 3 },
      { id: 4, y: 1, x: 4 },
      { id: 5, y: 1, x: 5 },
      { id: 6, y: 2, x: 1 },
      { id: 7, y: 2, x: 2 },
      { id: 8, y: 2, x: 3 },
      { id: 9, y: 2, x: 4 },
      { id: 10, y: 2, x: 5 },
      { id: 11, y: 3, x: 1 },
      { id: 12, y: 3, x: 2 },
      { id: 13, y: 3, x: 3 },
      { id: 14, y: 3, x: 4 },
      { id: 15, y: 3, x: 5 },
      { id: 16, y: 4, x: 1 },
      { id: 17, y: 4, x: 2 },
      { id: 18, y: 4, x: 3 },
      { id: 19, y: 4, x: 4 },
      { id: 20, y: 4, x: 5 },
      { id: 21, y: 5, x: 1 },
      { id: 22, y: 5, x: 2 },
      { id: 23, y: 5, x: 3 },
      { id: 24, y: 5, x: 4 },
      { id: 25, y: 5, x: 5 },
    ];

    this.setState({tiles})
  }

  handleBotMove = (move) => {
    const botPosition = { 
      x: this.state.botPosition.x + move.x,
      y: this.state.botPosition.y + move.y
    }
    if (botPosition.x <= this.state.columns && botPosition.x > 0 && botPosition.y <= this.state.rows && botPosition.y > 0)
      this.setState({ botPosition, botMovingTime: 1000 })
  }

  handleTeleport = (destinationTile) => {
    // const a = destinationTile.x - this.state.botPosition.x;
    // const b = destinationTile.y - this.state.botPosition.y;

    // const botMovingTime = Math.sqrt( a * a + b * b ) * 1000;
    const tileDistance = this.getTileDistance(destinationTile, this.state.botPosition);
    const botMovingTime = tileDistance * 1000;
    this.setState({ botPosition : destinationTile, botMovingTime })
  }
  
  getTileDistance = (tile1, tile2) => {
    const a = tile1.x - tile2.x;
    const b = tile1.y - tile2.y;

    const distance = Math.sqrt( a * a + b * b ) ;
    return distance;
  }
  render() { 
    return ( 
      <div className="App">
      <div 
      className="board-wrap">
        <Board 
        rows={this.state.rows} 
        columns={this.state.columns} 
        tiles={this.state.tiles}
        botPosition={this.state.botPosition}
        onTeleport={this.handleTeleport}
        botMovingTime={this.state.botMovingTime}
        />
      </div>
      <div 
        style={{height: 80 * 5,}}
        className="navigator-wrap">
        <Navigator onNavigatorClick={this.handleBotMove}/>
      </div>
    </div>
     );
  }
}
 
export default App;
