import React from 'react';
import './App.css';
import Nav from "./Components/Nav/Nav";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <HeaderContainer/>
                <Nav/>
                <div className={"container"}>
                    <Route path={"/profile/:userid"} render={() => <ProfileContainer/>}/>
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
