import React, {Component} from 'react';
import {Button} from "reactstrap";
import './BackButton.css';

class BackButton extends Component {
    render() {
        return (
            <Button className="BackButton" onClick={this.props.back}>&#8249;</Button>
        )
    }
}

export default BackButton;
