import React from 'react';
import Leaderboard from './components/Leaderboard/Leaderboard';
import {Switch, Route} from 'react-router-dom';
import QuestionLayout from "./components/QuestionLayout/QuestionLayout";
import MainMenu from "./components/MainMenu/MainMenu";
import Login from "./components/Login/Login"

const AppRouter =  () => (

        <Switch>
            <Route path='/auth' component={Login}/>
            <Route path='/question' component={QuestionLayout}/>
            <Route path='/main' component={MainMenu}/>
            <Route path='/leaderboard' component={Leaderboard}/>

            <Route path='/' component={Leaderboard}/>
        </Switch>

);

export default AppRouter;
