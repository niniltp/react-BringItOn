import React, { Component } from 'react';
import { Row, Col, Button, ButtonGroup } from 'reactstrap';
import './Survey.css';
import angry from '../img/angry.png'
import happy from '../img/happy.png'
import sad from '../img/sad.png'
import fine from '../img/fine.png'
import soso from '../img/so-so.png'

class Mood extends Component {
    constructor(props) {
        super(props);

        this.state = {
            medias: this.props.location.state,
            rSelected: 0,
            mood: "..."
        };

    }

    setRSelected = (i) => {    
        this.setState({ rSelected : i} , () => {
            this.selectMood();
        });
    }

    selectMood = () => {
        if(this.state.rSelected === 1){
            this.setState({ mood : "angry"});
        }
        if(this.state.rSelected === 2){
            this.setState({ mood : "sad"});
        }
        if(this.state.rSelected === 3){
            this.setState({ mood : "so-so"});
        }
        if(this.state.rSelected === 4){
            this.setState({ mood : "fine"});
        }
        if(this.state.rSelected === 5){
            this.setState({ mood : "happy"});
        }
    }

    render(){
        console.log(this.state.medias);
        return(
            <div className="Mood-survey">
                <header className="Survey-header">
                    <h1>How are you doing today ?</h1>
                </header>
                <div className="Center">
                    <Button className="Button-mood" onClick={() => this.setRSelected(1)} active={this.state.rSelected === 1}><img src={angry} alt="angryMood"/></Button>
                    <Button className="Button-mood" onClick={() => this.setRSelected(2)} active={this.state.rSelected === 2}><img src={sad} alt="sadMood"/></Button>
                    <Button className="Button-mood" onClick={() => this.setRSelected(3)} active={this.state.rSelected === 3}><img src={soso} alt="fineMood"/></Button>
                    <Button className="Button-mood" onClick={() => this.setRSelected(4)} active={this.state.rSelected === 4}><img src={fine} alt="fineMood"/></Button>
                    <Button className="Button-mood" onClick={() => this.setRSelected(5)} active={this.state.rSelected === 5}><img src={happy} alt="happyMood"/></Button>
                </div>
                <h4 className="select-Mood Center">You are {this.state.mood}</h4>

                <div className="Continue-mood">
                    <Button className="Continue-button">Continue</Button>                        
                </div> 
            </div>
        ); 
    }  
}

export default Mood;