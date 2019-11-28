import React from 'react';
import './App.css';
import {Button, Container} from "reactstrap";
import MediasContainer from "./app/components/Media/MediasContainer";

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <h1>Hi !</h1>
            </header>
            <Container>
                <MediasContainer title="Movies"/>
                <MediasContainer title="TV Shows"/>
                <MediasContainer title="Musics"/>
            </Container>
        </div>
    );
}

export default App;
