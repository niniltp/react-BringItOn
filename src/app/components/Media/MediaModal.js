import React, {Component} from 'react';
import './MediaCard.css';
import {Modal} from "reactstrap";
import MediaCard from "./MediaCard";
import MediaIcon from "./MediaIcon";

class MediaModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        console.log("hey");
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen
        }));
    };

    displayModal = () => {
        return (
            <div onClick={this.toggle} className="test">
                <MediaIcon media={this.props.media}/>
                <Modal isOpen={this.state.isOpen} onClick={this.toggle}>
                    <MediaCard media={this.props.media}/>
                </Modal>
            </div>
        )
    };

    render() {
        return (
            this.displayModal()
        );
    }
}

export default MediaModal;