import React, { Component } from 'react';

class bot extends Component {
    state = { 
        botImgUrl: 'bot.png',
      
     }
    render() { 
        let botStyle = {
            top: this.props.position.y * 80 - 80,
            left: this.props.position.x * 100 - 100,
            height: 78,
            width: 98,
            transitionDuration: this.props.botMovingTime+'ms',
        };
        return ( 
            <div style={botStyle}  className="bot"> 
                <img className="botImg" src={this.state.botImgUrl}/>
            </div>
         );
    }
}
 
export default bot;