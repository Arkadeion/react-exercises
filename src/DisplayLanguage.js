import React from "react";
import { LanguageContext } from "./LanguageContext";

const Language = {
    en: {
        lang: 'English'
    },
    it: {
        lang: 'Italiano'
    }
}

export class DisplayLanguage extends React.Component {

    render() {
        return (
            <LanguageContext.Consumer>
                {(language) => {
                    return <h1>{Language[language].lang}</h1>
                }}
            </LanguageContext.Consumer>
        )
    }
}