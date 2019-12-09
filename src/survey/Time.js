import React, { Component } from 'react';
import { Row, Col, Button, ButtonGroup, Container } from 'reactstrap';
import './Survey.css';
import {Link} from "react-router-dom";

class Time extends Component {
    constructor(props) {
        super(props);

        this.state = {
            medias: this.props.location.state.medias,
            mood: this.props.location.state.mood,
            rSelected: 0,
            time: ""
        };
        console.log(this.state.medias);
        console.log(this.state.mood);
    }

    // 20, 45, 60, 120, 999 ==> string
    setRSelected = (i) => {    
        this.setState({ rSelected : i} , () => {
            this.selectTime();
        });
    }

    selectTime = () => {
        if(this.state.rSelected === 1){
            this.setState({ time : "20"});
        }
        if(this.state.rSelected === 2){
            this.setState({ time : "45"});
        }
        if(this.state.rSelected === 3){
            this.setState({ time : "60"});
        }
        if(this.state.rSelected === 4){
            this.setState({ time : "120"});
        }
        if(this.state.rSelected === 5){
            this.setState({ time : "999"});
        }
    }

    display = () =>{
        if(this.state.rSelected === 1){
            return("20 min !");
        }
        if(this.state.rSelected === 2){
            return("45 min !");
        }
        if(this.state.rSelected === 3){
            return("1h !");
        }
        if(this.state.rSelected === 4){
            return("2h !");
        }
        if(this.state.rSelected === 5){
            return("Whatever !");
        }
        else return(" ... ?")
    }

    next = () =>{
        if(this.state.time === ""){
            alert("You didn't select a time :/");
        }
        else{
            //send info
        }
    }
  
    render(){
        return(
            <Container>
                <header className="Survey-header">
                    <h1>Do you have time ?</h1>
                </header>

                <div className="Center">
                    <div className="Timeline"></div>
                </div>
                   
                <div>
                    <ul className="a Center">
                        <li className="colorfont">
                            <Button className="Button-time" onClick={() => this.setRSelected(1)} active={this.state.rSelected === 1}></Button>
                        </li>
                        <li className="colorfont">
                            <Button className="Button-time" onClick={() => this.setRSelected(2)} active={this.state.rSelected === 1}></Button>
                        </li>
                        <li className="colorfont">
                            <Button className="Button-time" onClick={() => this.setRSelected(3)} active={this.state.rSelected === 1}></Button>
                        </li>
                        <li className="colorfont">
                            <Button className="Button-time" onClick={() => this.setRSelected(4)} active={this.state.rSelected === 1}></Button>
                        </li>
                        <li className="colorfont">
                            <Button className="Button-time" onClick={() => this.setRSelected(5)} active={this.state.rSelected === 1}></Button>
                        </li>
                    </ul>
                </div>

                <div className="text-time">
                    <ul className="a">
                        <li className="colorfont">20min</li>
                        <li className="colorfont">45min</li>
                        <li className="colorfont">1h</li>
                        <li className="colorfont">2h</li>
                        <li className="colorfont">Whatever</li>
                    </ul>
                </div>

                <div className="select-Time Center colorfont">
                    <h4>Let's go for {this.display()}</h4>
                </div>

                <div className="Continue-mood">
                    <Button className="btn btn-white btn-animate" onClick={() => this.next()}>Surprise me !</Button>
                </div>

            </Container> 
        ); 
    }  
}

export default Time;