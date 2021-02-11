import React from "react"
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {MyProjects} from "./myProgects/MyProjects";
import {Skills} from "./skills/Skills";
import {Contact} from "./contact/Contact";
import {Telework} from "./telework/Telework";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects/>
            {/*<Telework/>*/}
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
