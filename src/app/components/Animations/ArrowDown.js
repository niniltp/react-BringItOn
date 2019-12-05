/* FROM https://codepad.co/snippet/pure-css-arrow-down-bouncing-animation */

import React, {Component} from 'react';
import './ArrowDown.css';
import arrow from "../../img/arrow_down.svg";

class ArrowDown extends Component {
    render() {
        return (
            <div className="bounce">
                <img width="40" height="40" alt=""
                     src={arrow}/>
            </div>
        );
    }
}

export default ArrowDown;