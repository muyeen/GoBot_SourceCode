import React, { Component } from 'react';
import { 
    FaChevronDown,
    FaChevronLeft,
    FaChevronRight,
    FaChevronUp 
} from "react-icons/fa";
class navigator extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="navigator">
                <div>
                    <button 
                    onClick={() => this.props.onNavigatorClick({x: 0, y: -1})} 
                    className="btn goUpButton"
                    ><FaChevronUp /></button>
                </div>
                <div>
                    <button 
                    onClick={() => this.props.onNavigatorClick({x: -1, y: 0})} 
                    className="btn goLeftButton"
                    ><FaChevronLeft /></button>

                    <button 
                    onClick={() => this.props.onNavigatorClick({x: 1, y: 0})} 
                    className="btn goRightButton"
                    ><FaChevronRight /></button>
                </div>
                <div>
                    <button 
                    onClick={() => this.props.onNavigatorClick({x: 0, y: 1})} 
                    className="btn goDownButton"
                    ><FaChevronDown /></button>
                </div>
                
            </div>
         );
    }
}
 
export default navigator;