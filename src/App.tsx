import React, {useEffect} from 'react';
import './App.css';
import Nav from "./Components/Nav/Nav";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {Login} from './Components/Login/Login';
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "./redux/reduxStore";
import {initialize} from "./redux/appReducer";
import {Preloader} from "./Components/common/Preloader";


function App() {
    const isAuth = useSelector<StateType,boolean>(state => state.auth.isAuth)
    const initialized = useSelector<StateType,boolean>(state => state.app.initialized)
    const dispatch = useDispatch()
    useEffect(()=>{dispatch(initialize())},[dispatch,isAuth])
    if(!initialized){
        return <Preloader/>
    }
    return (
        <HashRouter>
            <div className="App">
                <HeaderContainer/>
                <Nav/>
                <div className={"container"}>
                    <Route path={"/login"} render={() => <Login/>}/>
                    <Route path={"/profile/:userid?"} render={() => <ProfileContainer/>}/>
                    <Route path={"/Dialogs"} render={() => <Dialogs/>}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                    <Route path={"/users"} render={() => <UsersContainer/>}/>
                </div>
            </div>
        </HashRouter>
    );
}

export default (App);
