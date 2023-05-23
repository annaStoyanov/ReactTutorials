import { data } from "../../SpeakerData";
import SpeakersList from "./SpeakersList";
import Header from "./Header";
import SpeakersToolbar from "./SpeakersToolbar";
import { useState } from 'react';

const Speakers = () => {
    const [themeVal, setThemeState] = useState('light');

    return (
        <div className={themeVal === "light" ? "conatiner-fluid light" : "conatiner-fluid dark"}>
            <Header />
            <SpeakersToolbar themeName={themeVal} setThemeState={setThemeState} />
            <SpeakersList data={data} />
        </div>
    );
}

export default Speakers;