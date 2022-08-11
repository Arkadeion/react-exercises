import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Language = {
    en: {
        lang: 'English'
    },
    it: {
        lang: 'Italiano'
    }
}

/* export class DisplayLanguage extends React.Component {

    render() {
        return (
            <LanguageContext.Consumer>
                {(language) => {
                    return <h1>{Language[language].lang}</h1>
                }}
            </LanguageContext.Consumer>
        )
    }
} */

export function DisplayLanguage() {

    const language = useContext(LanguageContext);

    return (
        <div className="bg-white rounded-xl border-2 border-slate max-w-fit p-4 mt-4 mb-8">
            {language === 'en' ? <h1 className="text-2xl font-bold mb-4" >The current language is {Language[language].lang}</h1> : <></>}
            {language === 'it' ? <h1 className="text-2xl font-bold mb-4" >La lingua corrente è {Language[language].lang}</h1> : <></>}
        </div>
    )
}