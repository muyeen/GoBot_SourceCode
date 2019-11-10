import React, { Component } from 'react';

class Tile extends Component {
    render() { 
        const tileStyle = {
            height: 78,
            width: 98,
        }
        return ( 
            <span
             className="tile" 
             style={tileStyle}
             onClick={() => this.props.onTeleport(this.props.possition)}
             ></span>
         );
    }
}
 
export default Tile;