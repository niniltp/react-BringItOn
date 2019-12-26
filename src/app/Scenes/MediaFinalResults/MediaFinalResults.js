import React, {Component} from 'react';
import {Container, Fade} from "reactstrap";
import Fullpage, {FullpageNavigation, FullpageSection, FullPageSections} from "@ap.cx/react-fullpage";
import ArrowDown from "../../components/Animations/ArrowDown";
import MediasContainer from "../../components/Media/MediasContainer";
import './MediaFinalResults.css';
import {firstLetterUpperCase} from "../../utilities/textFormater";

class MediaFinalResults extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mediasGp: this.props.location.state.medias,
            mood: this.props.location.state.mood
        };
    }

    displayFirstSection = () => {
        return (<FullpageSection key={0} style={{
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
        </FullpageSection>);
    };

    displaySections = () => {
        let sections = [];

        /* First section */
        sections.push(this.displayFirstSection());

        /* Medias sections */
        for (const key in this.state.mediasGp) {
            if (this.state.mediasGp.hasOwnProperty(key)) {
                sections.push(
                    <FullpageSection key={key} style={{
                        height: '100vh',
                        padding: '1em',
                    }}>
                        <Container><MediasContainer title={key} medias={this.state.mediasGp[key]}/></Container>
                    </FullpageSection>)
            }
        }

        return sections;
    };

    render() {
        return (
            <div className="MediaFinalResults">
                <Fullpage>
                    <FullpageNavigation/>
                    <FullPageSections>
                        {this.displaySections()}
                    </FullPageSections>
                </Fullpage>
            </div>
        );
    }
}

export default MediaFinalResults;
