import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import './MediaContainer.css';
import MediaModal from "./MediaModal";

const mediaTest = {
    title: "Spider-man: Into the Spider-Verse",
    description: "Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from other dimensions to stop a threat for all realities.",
    image: "http://fr.web.img6.acsta.net/r_1920_1080/pictures/18/11/13/11/42/1696141.jpg",
    actors: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"],
    date: "Dec 14 2018",
    duration: 117,
    categories: ['animation', 'superheroes'],
    language: "English",
    rating: 4
};

class MediaContainer extends Component {
    constructor(props) {
        super(props);

    }

    displayMediaContainer = () => {
        return (
            <div className="MediaContainer">
                <h2 className="MediaContainer-title">{this.props.title}</h2>
                <Row>
                    <Col sm="4" ><MediaModal media={mediaTest}/></Col>
                    <Col sm="4"><MediaModal media={mediaTest}/></Col>
                    <Col sm="4"><MediaModal media={mediaTest}/></Col>
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