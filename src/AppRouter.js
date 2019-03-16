import React from 'react';
import Home from './components/Home/Home';
import {Switch, Route} from 'react-router-dom';
import Question from "./components/QuestionLayout/QuestionLayout";
import MainMenu from "./components/MainMenu/MainMenu";

const AppRouter =  () => (
    <Switch>
        <Route path='/question' component={Question}/>
        <Route path='/main' component={MainMenu}/>

        <Route path='/' component={Home}/>
    </Switch>
);

export default AppRouter;
