import React from 'react';
import './App.css';
import MediaFinalResults from "./app/Scenes/MediaFinalResults/MediaFinalResults";
import Mood from "./survey/Mood";
import MediaChoice from "./app/components/Media/MediaChoice";
import {BrowserRouter, Route} from 'react-router-dom';
import Time from "./survey/Time";
import Welcome from "./app/Scenes/Welcome/Welcome";
import Particles from "react-particles-js";
import {getParams} from "./app/components/Animations/particles";

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Welcome}/>
            <Route exact path="/medias" component={MediaChoice}/>
            <Route exact path="/mood" component={Mood}/>
            <Route exact path="/time" component={Time}/>
            <Route exact path="/results" component={MediaFinalResults}/>
            <Particles
                style={{
                    position: "fixed",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover"
                }}
                params={getParams(new Date())}/>
        </BrowserRouter>
    );
}

export default App;
