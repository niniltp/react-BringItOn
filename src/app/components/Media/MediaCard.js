import React, {Component} from 'react';
import './MediaCard.css';
import {Card, CardImg, CardText, CardTitle} from "reactstrap";

class MediaCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            media: {}
        }
    }

    componentDidMount() {
        //TODO: change origin of media (db)
        const mediaData = this.props.media;
        this.setState({
            media: this.convertReceivingMedia(mediaData)
        });
    }

    convertReceivingMedia = (mediaData) => {
        return {
            title: mediaData.title ? mediaData.title : '',
            description: mediaData.description ? mediaData.description : '',
            types: mediaData.types ? mediaData.types : [],
            duration: mediaData.duration ? mediaData.duration : '',
            date: mediaData.date ? mediaData.date : '',
            image: mediaData.image ? mediaData.image : '',
            language: mediaData.language ? mediaData.language : '',
            rating: mediaData.rating ? mediaData.rating : '',
            actors: mediaData.actors ? mediaData.actors : '', // array
            artists: mediaData.artists ? mediaData.artists : '', // array
            channel: mediaData.channel ? mediaData.channel : '', // array
            producers: mediaData.producers ? mediaData.producers : '', // array
            directors: mediaData.directors ? mediaData.directors : '' // array
        }
    };

    displayCard = () => {
        return (
            <div className="MediaCard">
                <Card body inverse style={{backgroundColor: '#333'}}>
                    {this.state.media.image ?
                        <CardImg top width="100%" className="MediaCard-img" src={this.state.media.image}
                                 alt={"illustration of " + this.state.media.title}/> : ''}
                    <div className="MediaCard-content">
                        {this.state.media.title ? <CardTitle>{this.state.media.title}</CardTitle> : ''}
                        {this.state.media.description ? <CardText>{this.state.media.description}</CardText> : ''}
                        {this.state.media.date ?
                            <CardText><small className="text-muted">Released
                                date: {this.state.media.date}</small> {this.state.media.duration ? <small
                                className="text-muted">({this.state.media.duration})</small> : ''}</CardText> : ''}
                        {this.state.media.duration && !this.state.media.date ?
                            <small className="text-muted">Duration: {this.state.media.duration}</small> : ''}

                        {this.state.media.actors ? <CardText><small
                            className="text-muted">Cast: {this.state.media.actors.join(', ')}</small></CardText> : ''}
                    </div>
                </Card>
            </div>
        )
    };

    render() {
        return (
            this.displayCard()
        );
    }
}

export default MediaCard;