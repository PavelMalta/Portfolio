import React from "react"
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import { MyProjects } from "./myProgects/MyProjects";
import {Skills} from "./skills/Skills";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects/>
        </div>
    );
}

export default App;
