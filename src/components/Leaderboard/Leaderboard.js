import React from 'react';
import classes from './Leaderboard.scss';
import Wreath from '../../../assets/wreath.svg';
import Wreath2 from '../../../assets/wreath2.svg';
import Wreath3 from '../../../assets/wreath3.svg';
import Header from "../UI/Header/Header"
import Spinner from '../../../assets/loader.svg';

let userIncluded = false
class Leaderboard extends React.Component {

    state = {
        currentUser: {
            user_id: "10215926829216372",
            display_name: "Justin Grace",
            points: 12
        },
        people: [],

    }


    compare = (a,b) => {
        if (a.points > b.points)
            return -1;
        if (a.points < b.points)
            return 1;
        return 0;
    }
    componentDidMount() {
        const url= "https://quirky-locket.glitch.me/leaderboard";
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                data = data.splice(0,7).sort(this.compare);
                this.setState(prev => ({people:data}))
            })
            .catch(err=>console.log(err))

        console.log(this.state.people)

    }

    render() {
    return (
        <div className={classes.Leaderboard}>
            <Header/>

                <h1>Leaderboard</h1>
                {this.state.people.length==0 && <div className={classes.spinner}><img src={Spinner} alt=""/></div>}
                {
                    this.state.people.map((person, index) => {
                        return (

                            <div key={person._id} className={[classes.person, person.user_id==this.state.currentUser.user_id?"you":null].join(" ")}>
                                {/*{person.user_id==this.state.currentUser.user_id && userIncluded=true}*/}
                                <div className={classes.left}>
                                    {index<3 && <img src={index==0 ? Wreath : (index==1 ? Wreath2 : Wreath3)} alt="" />}
                                    {/*{index==1 && <img src={Wreath2} alt="" />}*/}
                                    {index>2 && <div className={classes.noWreath}></div>}
                                    <p className={classes.name}>{person.display_name}</p>
                                </div>
                                <p className={classes.points}>{person.points}</p>
                            </div>
                        )
                    })
                }
                {/*<div className={classes.person}>*/}
                    {/*<div className={classes.left}>*/}
                        {/*<img src={Wreath} alt="" />*/}
                        {/*<p className={classes.name}>winner person</p>*/}
                    {/*</div>*/}
                    {/*<p className={classes.points}>120</p>*/}
                {/*</div>*/}

                {/*<div className={classes.person}>*/}
                    {/*<div className={classes.left}>*/}
                        {/*<img src={Wreath} alt="" />*/}
                        {/*<p className={classes.name}>second person</p>*/}
                    {/*</div>*/}

                    {/*<p className={classes.points}>120</p>*/}
                {/*</div>*/}

                {/*<div className={classes.person}>*/}
                    {/*<div className={classes.left}>*/}
                        {/*<img src={Wreath} alt="" />*/}
                        {/*<p className={classes.name}>third person</p>*/}
                    {/*</div>*/}

                    {/*<p className={classes.points}>120</p>*/}
                {/*</div>*/}

                {/*<div className={classes.person}>*/}
                    {/*<div className={classes.left}>*/}
                        {/*<div className={classes.noWreath}></div>*/}
                        {/*<p className={classes.name}>loser person</p>*/}
                    {/*</div>*/}
                    {/*<p className={classes.points}>120</p>*/}
                {/*</div>*/}

                {/*<div className={classes.person}>*/}
                    {/*<div className={classes.left}>*/}
                        {/*<img src={Wreath} alt="" />*/}
                        {/*<p className={classes.name}>loser person</p>*/}
                    {/*</div>*/}
                    {/*<p className={classes.points}>120</p>*/}
                {/*</div>*/}

                {/*<div className={classes.person}>*/}
                    {/*<div className={classes.left}>*/}
                        {/*<img src={Wreath} alt="" />*/}
                        {/*<p className={classes.name}>loser person</p>*/}
                    {/*</div>*/}
                    {/*<p className={classes.points}>120</p>*/}
                {/*</div>*/}

                {/*<div className={classes.person}>*/}
                    {/*<div className={classes.left}>*/}
                        {/*<img src={Wreath} alt="" />*/}
                        {/*<p className={classes.name}>loser person</p>*/}
                    {/*</div>*/}
                    {/*<p className={classes.points}>120</p>*/}
                {/*</div>*/}

        </div>
    );
  }
}

export default Leaderboard;
