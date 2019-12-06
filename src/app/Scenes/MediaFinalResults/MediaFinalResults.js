import React from 'react';
import {Container, Fade} from "reactstrap";
import Fullpage, {FullpageNavigation, FullpageSection, FullPageSections} from "@ap.cx/react-fullpage";
import ArrowDown from "../../components/Animations/ArrowDown";
import MediasContainer from "../../components/Media/MediasContainer";
import './MediaFinalResults.css';

function MediaFinalResults(props) {
    return (
        <div className="MediaFinalResults">
            <Fullpage>
                <FullpageNavigation/>
                <FullPageSections>
                    <FullpageSection style={{
                        height: '100vh',
                        padding: '1em',
                    }}>
                        <header className="MediaFinalResults-header">
                            <Fade timeout={1000} style={{transition: '2s'}}>
                                <h1>Are you ready ?</h1>
                            </Fade>
                            <Fade className="downArrow" timeout={3000} style={{transition: '2s'}}>
                                <ArrowDown/>
                            </Fade>
                        </header>
                    </FullpageSection>

                    <FullpageSection style={{
                        height: '100vh',
                        padding: '1em',
                    }}>
                        <Container><MediasContainer title="Movies" medias={props.medias}/></Container>
                    </FullpageSection>
                    <FullpageSection style={{
                        height: '100vh',
                        padding: '1em',
                    }}>
                        <Container>
                            <MediasContainer title="TV Shows" medias={props.medias}/>
                        </Container>
                    </FullpageSection>
                    <FullpageSection style={{
                        height: '100vh',
                        padding: '1em',
                    }}>
                        <Container>
                            <MediasContainer title="Musics" medias={props.medias}g/>
                        </Container>
                    </FullpageSection>
                </FullPageSections>
            </Fullpage>
        </div>
    );
}

export default MediaFinalResults;
