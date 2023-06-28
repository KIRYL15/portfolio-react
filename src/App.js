import './App.css';
import React from 'react';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Footers from "./footers/Footers";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footers/>
        </div>
    );
}

export default App;
