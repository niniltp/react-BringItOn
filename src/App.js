import React from 'react';
import './App.css';
import MediaCard from "./app/components/Media/MediaCard";
import {Container} from "reactstrap";
import MediaFinalResults from "./app/Scenes/MediaFinalResults/MediaFinalResults";
import Mood from "./survey/Mood";

const mediaTest = {
    title: "Spider-man: Into the Spider-Verse",
    description: "Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from other dimensions to stop a threat for all realities.",
    image: "http://fr.web.img6.acsta.net/r_1920_1080/pictures/18/11/13/11/42/1696141.jpg",
    actors: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"],
    duration: "1h 57m"
};



function App() {
    return (
        <MediaFinalResults/>
    );
}

export default App;
