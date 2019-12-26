import React, {Component} from 'react';
import './MediaChoice.css';
import { Button, Container } from 'reactstrap';
import movie from '../../../img/clapperboard.svg';
import music from '../../../img/vinyl.svg';
import serie from '../../../img/home-theater.svg';
import {Link} from "react-router-dom";

class MediaChoice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movieSelected: false,
            musicSelected: false,
            tvShowSelected: false,
            rSelected: "",
            medias: []
        };
    }

    selectMedia = (media) => {
        const index = this.state.medias.indexOf(media);

        if(index >= 0){
            const newMedia = this.state.medias.filter((m) => {
                return m !== media;
            });

            this.setState({
                medias: newMedia
            }, () => {

            });

            // this.state.media.splice(index, 1);
            console.log(this.state.medias);
        }
        else{
            const newMedia = this.state.medias.concat(media);
            this.setState({
                medias: newMedia
            });
            // this.state.media.push(media);
            console.log(this.state.medias);
        }
    };

    buttonChoice = () => {
        return (
            <div className="Media">
                <div className="row">
                    <Button className="col-2" onClick={() => this.selectMedia("movies")} active={this.state.medias.includes("movies")}><img src={movie} alt="movies"/></Button>
                    <Button className="col-2" onClick={() => this.selectMedia("series")} active={this.state.medias.includes("series")}><img src={serie} alt="series"/></Button>
                    <Button className="col-2" onClick={() => this.selectMedia("musics")} active={this.state.medias.includes("musics")}><img src={music} alt="musics"/></Button>
                </div>
            </div>
        );
    };

    buttonGoOn = () => {
        return (
            <div className="Validation">
                <Button outline size="lg" color="secondary" >Bring it on !</Button>
            </div>
        )
    };

    next = () =>{
        if( this.state.medias.length === 0){
            return (
                <Button className="btn-color-continue btn btn-animate" onClick={this.alertMedias}><span>Continue</span></Button>
            )
        }
        else{
            return(
                <Link to={{pathname:'/mood', state: {medias:this.state.medias}}}><Button className="btn-color-continue btn btn-animate"><span>Continue</span></Button></Link>
            )
        }
    }

    alertMedias = () =>{
        alert("Choose your medias pls");
    }

    render() {
        console.log(this.state.medias);
        return (
            <Container className="container-fluid">
                <h1>What do you want to do ?</h1>
                {this.buttonChoice()}
                <div className="Validation">
                    {this.next()}
                </div>
            </Container>
        )
    }

}

export default MediaChoice;
