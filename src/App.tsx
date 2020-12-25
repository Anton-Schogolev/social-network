import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Nav} from "./Components/Nav/Nav";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {ActionsTypes, StateType} from "./types/entities";

type PropsType = {
    state: StateType
    dispatch:(action:ActionsTypes)=>void
}

function App({state,dispatch}: PropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Nav friends={state.nav.friends}/>
                <div className={"container"}>

                    <Route exact path={"/"} render={
                        () => <Profile
                            state={state.posts}
                            dispatch={dispatch}
                        />}/>
                    <Route path={"/Dialogs"} render={
                        () => <Dialogs
                            state={state.dialogs}
                            dispatch={dispatch}
                        />}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
