import React from 'react';
import './App.css';
import MediaCard from "./app/components/Media/MediaCard";
import {Container} from "reactstrap";
import MediaFinalResults from "./app/Scenes/MediaFinalResults/MediaFinalResults";
import Mood from "./survey/Mood";
import MediaChoice from "./app/components/Media/MediaChoice";
import {BrowserRouter, Route} from 'react-router-dom';
import Time from "./survey/Time";
import test, { determineResults } from "./app/service/processing"

const mediaTest = {
    title: "Spider-man: Into the Spider-Verse",
    description: "Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from other dimensions to stop a threat for all realities.",
    image: "http://fr.web.img6.acsta.net/r_1920_1080/pictures/18/11/13/11/42/1696141.jpg",
    actors: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"],
    duration: "1h 57m"
};


function App() {
    console.log(determineResults("angry","60",["movies","series","musics"]));
    return (
        <BrowserRouter>
            <Route exact path="/" component={MediaChoice}/>
            <Route exact path="/mood" component={Mood}/>
            <Route exact path="/time" component={Time}/>
        </BrowserRouter>
    );
}

export default App;
