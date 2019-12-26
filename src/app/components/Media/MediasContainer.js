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
                    {this.props.medias.map((media, key) => {
                        return <Col sm="4"  key={key}><MediaModal media={media}/></Col>
                    })}
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