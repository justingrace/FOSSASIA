import React from 'react';
import Leaderboard from './components/Leaderboard/Leaderboard';
import {Switch, Route} from 'react-router-dom';
import QuestionLayout from "./components/QuestionLayout/QuestionLayout";
import MainMenu from "./components/MainMenu/MainMenu";
import Login from "./components/Login/Login"
import Translator from "./components/Translator/Translator"

class AppRouter extends React.Component{
    state = {
        auth: false
    }
    componentDidMount() {
        const userData = JSON.parse(sessionStorage.getItem("userData"));
        if(userData) this.setState({auth: true})
    }

    render(){
       return(
           <Switch>
               <Route path='/auth' component={Login}/>
               <Route path='/question' component={QuestionLayout}/>
               <Route path='/translator' component={Translator}/>
               <Route path='/main' component={MainMenu}/>
               <Route path='/leaderboard' component={Leaderboard}/>
               {/*<Route path='/dictionary' component={Translator}/>*/}

               <Route path='/' component={MainMenu}/>
           </Switch>
       )
   }
}


export default AppRouter;
