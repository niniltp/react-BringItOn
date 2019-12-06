import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import './MediaContainer.css';
import MediaModal from "./MediaModal";

class MediaContainer extends Component {
    displayMediaContainer = () => {
        return (
            <div className="MediaContainer">
                <h2 className="MediaContainer-title">{this.props.title}</h2>
                <Row>
                    {this.props.medias ? this.props.medias.map((media, index) => (
                        <Col sm="4" key={index} index={index}><MediaModal media={media}/></Col>)) : <div><p>No media found.</p></div>}
                </Row>
            </div>
        )
    };

    render() {
        return (
            this.displayMediaContainer()
        );
    }
}

export default MediaContainer;