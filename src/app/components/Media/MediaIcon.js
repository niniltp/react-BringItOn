import React, {Component} from 'react';
import './MediaIcon.css';
import {Card, CardImg} from "reactstrap";

class MediaIcon extends Component {
    displayMediaIcon = () => {
        return (
            <div className="MediaIcon">
                <Card>
                    {this.props.media.image ?
                        <CardImg className="MediaIcon-img" top width="100%" src={this.props.media.image}
                                 alt={"illustration of " + this.props.media.title}/> : ''}
                </Card>
            </div>
        )
    };

    render() {
        return (
            this.displayMediaIcon()
        );
    }
}

export default MediaIcon;