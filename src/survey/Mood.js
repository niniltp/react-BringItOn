import React, {Component} from 'react';
import {Button, Fade} from 'reactstrap';
import './Survey.css';
import './Button.css'
import angry from '../img/angry.png'
import happy from '../img/happy.png'
import sad from '../img/sad.png'
import fine from '../img/fine.png'
import soso from '../img/so-so.png'
import {Link} from "react-router-dom";

class Mood extends Component {
    constructor(props) {
        super(props);

        this.state = {
            medias: this.props.location.state.medias,
            rSelected: 0,
            mood: "..."
        };

    }

    setRSelected = (i) => {
        this.setState({rSelected: i}, () => {
            this.selectMood();
        });
    }

    selectMood = () => {
        if (this.state.rSelected === 1) {
            this.setState({mood: "angry"});
        }
        if (this.state.rSelected === 2) {
            this.setState({mood: "sad"});
        }
        if (this.state.rSelected === 3) {
            this.setState({mood: "so_so"});
        }
        if (this.state.rSelected === 4) {
            this.setState({mood: "fine"});
        }
        if (this.state.rSelected === 5) {
            this.setState({mood: "happy"});
        }
    }

    next = () => {
        if (this.state.mood !== "...") {
            return (
                <Fade timeout={1000} style={{transition: '2s'}}>
                    <Link to={{pathname: '/time', state: {medias: this.state.medias, mood: this.state.mood}}}><Button
                        className="btn-color-continue btn btn-animate"><span>Continue</span></Button></Link>
                </Fade>
            )
        }
    };

    render() {
        console.log(this.state.medias);
        return (
            <div>
                <Fade timeout={1000} style={{transition: '2s'}}>
                    <header className="Survey-header">
                        <h1>How are you doing today ?</h1>
                    </header>
                </Fade>
                <div className="Center">
                    <Fade timeout={1500} style={{transition: '2s'}}>
                        <Button className="Button-mood" onClick={() => this.setRSelected(1)}
                                active={this.state.rSelected === 1}><img src={angry} alt="angryMood"/></Button>
                    </Fade>
                    <Fade timeout={1700} style={{transition: '2s'}}>
                        <Button className="Button-mood" onClick={() => this.setRSelected(2)}
                                active={this.state.rSelected === 2}><img src={sad} alt="sadMood"/></Button>
                    </Fade>
                    <Fade timeout={1900} style={{transition: '2s'}}>
                        <Button className="Button-mood" onClick={() => this.setRSelected(3)}
                                active={this.state.rSelected === 3}><img src={soso} alt="sosoMood"/></Button>
                    </Fade>
                    <Fade timeout={2100} style={{transition: '2s'}}>
                        <Button className="Button-mood" onClick={() => this.setRSelected(4)}
                                active={this.state.rSelected === 4}><img src={fine} alt="fineMood"/></Button>
                    </Fade>
                    <Fade timeout={2300} style={{transition: '2s'}}>
                        <Button className="Button-mood" onClick={() => this.setRSelected(5)}
                                active={this.state.rSelected === 5}><img src={happy} alt="happyMood"/></Button>
                    </Fade>
                </div>
                {this.state.mood !== "..." ?  <Fade timeout={500} style={{transition: '2s'}}>
                    <h4 className="select-Mood Center">I am {this.state.mood}</h4>
                </Fade> : ""}


                <div className="Continue-mood">
                    {this.next()}
                </div>
            </div>
        );
    }
}

export default Mood;