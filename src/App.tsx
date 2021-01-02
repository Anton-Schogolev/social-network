import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import {Profile} from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Nav/>
                <div className={"container"}>
                    <Route exact path={"/"} render={() => <Profile/>}/>
                    <Route path={"/Dialogs"} render={() => <Dialogs/>}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                    <Route path={"/users"} render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
