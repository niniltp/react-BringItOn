import React, {Component} from 'react';
import {Button, Col, Row} from "reactstrap";
import './MediaContainer.css';
import MediaModal from "./MediaModal";
import {firstLetterUpperCase} from "../../utilities/textFormater";
import {Link} from "react-router-dom";

class MediaContainer extends Component {
    displayNoResult = () => {
        return (<Col sm="12">
            <h3 className="MediaContainer-noContent text-center">Sorry,
                no {this.props.title} corresponding to your mood was found :c</h3>
            <Link to={{pathname: '/'}}><Button className="btn-color-continue btn btn-animate">Try again</Button></Link>
        </Col>)
    };

    displayMediaContainer = () => {
        return (
            <div className="MediaContainer">
                <h2 className="MediaContainer-title">{firstLetterUpperCase(this.props.title)}</h2>
                <Row>
                    {this.props.medias && this.props.medias.length > 0 ?
                        this.props.medias.map((media, key) => {
                            return <Col sm="4" key={key}><MediaModal media={media}/></Col>
                        }) : this.displayNoResult()}
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