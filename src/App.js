import React from 'react';
import './App.css';
import MediaCard from "./app/components/Media/MediaCard";
import {Container} from "reactstrap";

const mediaTest = {
    title: "The Fifth Element",
        description: "In the colorful future, a cab driver unwittingly becomes the central figure in the search for a legendary cosmic weapon to keep Evil and Mr. Zorg at bay.",
        duration: 126,
        types: ["action","adventure","sci-fi"],
        actors: ["Bruce Willis","Milla Jovovich","Gary Oldman"],
        directors: ["Luc Besson"],
        producers: ["Patrice Ledoux"],
        date: "07/05/1997",
        image: "https://m.media-amazon.com/images/M/MV5BZWFjYmZmZGQtYzg4YS00ZGE5LTgwYzAtZmQwZjQ2NDliMGVmXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SY1000_CR0,0,696,1000_AL_.jpg",
        language: "english",
        rating: 4.2,
        tags: ["action","adventure","sci-fi"]
};

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hi !</h1>
            </header>
            <Container>
                <MediaCard media={mediaTest}/>
            </Container>
        </div>
    );
}

export default App;
