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
import {StoreType} from "./redux/State";

type PropsType = {
    store: StoreType
}

function App({store}: PropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Nav friends={store.getState().nav.friends}/>
                <div className={"container"}>

                    <Route exact path={"/"} render={
                        () => <Profile
                            state={store.getState().posts}
                            dispatch={store.dispatch.bind(store)}
                        />}/>
                    <Route path={"/Dialogs"} render={
                        () => <Dialogs
                            state={store.getState().dialogs}
                            dispatch={store.dispatch.bind(store)}
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
