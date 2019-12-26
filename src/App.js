import React from 'react';
import './App.css';
import MediaFinalResults from "./app/Scenes/MediaFinalResults/MediaFinalResults";
import Mood from "./survey/Mood";
import MediaChoice from "./app/components/Media/MediaChoice";
import {BrowserRouter, Route} from 'react-router-dom';
import Time from "./survey/Time";
import Welcome from "./app/Scenes/Welcome/Welcome";

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Welcome}/>
            <Route exact path="/medias" component={MediaChoice}/>
            <Route exact path="/mood" component={Mood}/>
            <Route exact path="/time" component={Time}/>
            <Route exact path="/results" component={MediaFinalResults}/>
        </BrowserRouter>
    );
}

export default App;
