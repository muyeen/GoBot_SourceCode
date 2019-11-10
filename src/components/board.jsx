import React, { Component } from 'react';

import Bot from './bot';
import Tile from './tile';

class board extends Component {
     render() { 
        const boardStyle = {
            height: 80 * 5,
            width: 100 * 5,
        };
        return ( 
            <div style={boardStyle} className="board">
                <div>
                {this.props.tiles.map(tile => (
                    <Tile 
                    key={tile.id} 
                    possition={{x: tile.x, y: tile.y}}
                    onTeleport={this.props.onTeleport}
                   />
                ))}
                </div>
                <Bot position={this.props.botPosition} botMovingTime={this.props.botMovingTime}/>
            </div>
         );
    }
}
 
export default board;