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
import {AppPropsType} from "./redux/State";

type PropsType={
    state:AppPropsType
}

function App(props:PropsType) {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <Nav friends={props.state.nav.friends}/>
              <div className={"container"}>

                  <Route exact path={"/"} render={()=><Profile state={props.state.posts}/>}/>
                  <Route path={"/Dialogs"} render={()=><Dialogs state={props.state.dialogs}/>}/>
                  <Route path={"/news"} render={()=><News/>}/>
                  <Route path={"/music"} render={()=><Music/>}/>
                  <Route path={"/settings"} render={()=><Settings/>}/>
              </div>
          </div>
      </BrowserRouter>
  );
}
export default App;
