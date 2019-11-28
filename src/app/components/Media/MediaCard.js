import React, {Component} from 'react';
import './MediaCard.css';
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import {convertMinutesToTime} from "../../utilities/timeConverter";

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
            categories: mediaData.categories ? mediaData.categories : [],
            duration: mediaData.duration ? mediaData.duration : '',
            date: mediaData.date ? mediaData.date : '',
            image: mediaData.image ? mediaData.image : '',
            language: mediaData.language ? mediaData.language : '',
            rating: mediaData.rating ? mediaData.rating : '',
            actors: mediaData.actors ? mediaData.actors : '', // array
            artists: mediaData.artists ? mediaData.artists : '', // array
            channel: mediaData.channel ? mediaData.channel : '',
            producers: mediaData.producers ? mediaData.producers : '', // array
            directors: mediaData.directors ? mediaData.directors : '' // array
        }
    };

    displayCard = () => {
        const durationInTime = this.state.media.duration ? convertMinutesToTime(this.state.media.duration) : 0;
        return (
            <div className="MediaCard">
                <Card body inverse style={{backgroundColor: '#333'}}>
                    {this.state.media.image ?
                        <CardImg top width="100%" className="MediaCard-img" src={this.state.media.image}
                                 alt={"illustration of " + this.state.media.title}/> : ''}
                    <CardBody className="MediaCard-content">
                        {this.state.media.title ?
                            <CardTitle className="MediaCard-title">{this.state.media.title}</CardTitle> : ''}
                        {this.state.media.description ?
                            <CardText className="MediaCard-body">{this.state.media.description}</CardText> : ''}
                        {this.state.media.rating ?
                            <small className="text-muted">Rating: {this.state.media.rating}/5<br/></small> : ''}
                        {this.state.media.date ?
                            <small className="text-muted">Released
                                date: {this.state.media.date}</small> : ''}
                        {this.state.media.duration && this.state.media.date ? <small
                            className="text-muted"> ({durationInTime.hours}h {durationInTime.minutes}min)<br/></small> : ''}
                        {this.state.media.duration && !this.state.media.date ?
                            <small
                                className="text-muted">Duration: {durationInTime.hours}h {durationInTime.minutes}min<br/></small> : ''}
                        {this.state.media.actors ? <small
                            className="text-muted">Cast: {this.state.media.actors.join(', ')}<br/></small> : ''}
                        {this.state.media.producers ? <small
                            className="text-muted">Cast: {this.state.media.producers.join(', ')}<br/></small> : ''}
                        {this.state.media.directors ? <small
                            className="text-muted">Cast: {this.state.media.directors.join(', ')}<br/></small> : ''}
                        {this.state.media.artists ? <small
                            className="text-muted">Cast: {this.state.media.artists.join(', ')}<br/></small> : ''}
                        {this.state.media.categories ? <small
                            className="text-muted">Categories: {this.state.media.categories.join(', ')}<br/></small> : ''}
                        {this.state.media.language ? <small
                            className="text-muted">Language: {this.state.media.language}<br/></small> : ''}
                    </CardBody>
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