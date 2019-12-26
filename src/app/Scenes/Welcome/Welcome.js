import React, {Component} from 'react';
import {Button, Fade} from "reactstrap";
import {Link} from "react-router-dom";
import './Welcome.css';

class Welcome extends Component {
    render() {
        return (
            <div className={"Welcome"}>
                <Fade timeout={1000} style={{transition: '2s'}}>
                    <h1>Hi !</h1>
                </Fade>
                <Fade timeout={2500} style={{transition: '2s'}}>
                    <Link to={{pathname: '/medias'}}><Button
                        className="btn-color-continue btn btn-animate"><span>Bring it on</span></Button></Link>
                </Fade>
            </div>
        )
    }
}

export default Welcome;
