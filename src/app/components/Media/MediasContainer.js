import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import './MediaContainer.css';
import MediaModal from "./MediaModal";

const mediaTest = {
    title: "The Fifth Element",
    description: "In the colorful future, a cab driver unwittingly becomes the central figure in the search for a legendary cosmic weapon to keep Evil and Mr. Zorg at bay.",
    duration: 126,
    types: ["action", "adventure", "sci-fi"],
    actors: ["Bruce Willis", "Milla Jovovich", "Gary Oldman"],
    directors: ["Luc Besson"],
    producers: ["Patrice Ledoux"],
    date: "07/05/1997",
    image: "https://m.media-amazon.com/images/M/MV5BZWFjYmZmZGQtYzg4YS00ZGE5LTgwYzAtZmQwZjQ2NDliMGVmXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SY1000_CR0,0,696,1000_AL_.jpg",
    language: "english",
    rating: 4.2,
    tags: ["action", "adventure", "sci-fi"]
};

class MediaContainer extends Component {
    displayMediaContainer = () => {
        return (
            <div className="MediaContainer">
                <h2 className="MediaContainer-title">{this.props.title}</h2>
                <Row>
                    <Col sm="4"><MediaModal media={mediaTest}/></Col>
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