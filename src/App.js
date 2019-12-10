import React from 'react';
import './App.css';
import MediaFinalResults from "./app/Scenes/MediaFinalResults/MediaFinalResults";
import Mood from "./survey/Mood";
import MediaChoice from "./app/components/Media/MediaChoice";
import {BrowserRouter, Route} from 'react-router-dom';
import Time from "./survey/Time";
import { determineResults } from "./app/service/processing"

const medias = [
    {
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
    },
    {
        title: "Spider-man: Into the Spider-Verse",
        description: "Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from other dimensions to stop a threat for all realities.",
        image: "http://fr.web.img6.acsta.net/r_1920_1080/pictures/18/11/13/11/42/1696141.jpg",
        actors: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"],
        duration: "1h 57m"
    }];

{/*<MediaFinalResults medias={medias}/>*/}

function App() {
    console.log(determineResults("angry", "60", ["movies", "series", "musics"]));
    return (
        <BrowserRouter>
            <Route exact path="/" component={MediaChoice}/>
            <Route exact path="/mood" component={Mood}/>
            <Route exact path="/time" component={Time}/>
            <Route exact path="/media_final_result" component={MediaFinalResults}/>
        </BrowserRouter>
    );
}

export default App;
