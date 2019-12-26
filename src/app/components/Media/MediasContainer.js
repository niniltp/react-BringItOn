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
                    {this.props.media && this.props.media.length > 0 ?
                        this.props.medias.map((media, key) => {
                            return <Col sm="4" key={key}><MediaModal media={media}/></Col>
                        }) : <Col sm="12"> <h3 className="MediaContainer-noContent text-center">Sorry, no  {this.props.title[0].toLowerCase() + this.props.title.slice(1)} corresponding to your mood was found :c</h3></Col>}
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