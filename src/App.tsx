import React from "react"
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {MyProjects} from "./myProgects/MyProjects";
import {Skills} from "./skills/Skills";
import {Contact} from "./contact/Contact";
import {Telework} from "./telework/Telework";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects/>
            <Telework/>
            <Contact/>
        </div>
    );
}

export default App;
