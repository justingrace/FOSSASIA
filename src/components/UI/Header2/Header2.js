import React from "react"
import classes from "./Header2.scss"
import Coin from "../../../../assets/coins.svg"
import {Link} from 'react-router-dom';
import Leaderboard from '../../../../assets/leaderboard.svg';
import DictionaryIcon from '../../../../assets/dict.jpeg';
import GameIcon from '../../../../assets/game.jpeg';

class Header2 extends React.Component {

	state = {
		userData: {}
	}

	toggleMenu = (menu) => {
		if(menu.classList.contains("active")) menu.classList.remove("active")
		else {
			console.log("showing menu!" + Date.now());
			menu.classList.add("active");
		}
	}
	toggleIcons = (extendedMenu) => {

		if(extendedMenu.classList.contains("showIcons")) extendedMenu.classList.remove("showIcons");
		// else extendedMenu.classList.add("showIcons");
		else setTimeout(()=>{extendedMenu.classList.add("showIcons")}, 150)
	}
	onMenuClick = () => {
		let menu = document.getElementById("menu");
		let extendedMenu = document.getElementById("extendedMenu");
		console.log("click" + Date.now());

		this.toggleMenu(menu);
		this.toggleIcons(extendedMenu);
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		if(this.state.userData.points != nextProps.points){
			console.log("[]SHOULD UPDATE?")
			console.log(nextProps.points)
			return true;
		}
		else return false;
	}

	componentDidMount() {
		console.log("COMPONNENT DID MOUNT HEADER")

		// console.log("HEADER")
		let userData = JSON.parse(sessionStorage.getItem("userData"));
		if(userData) {
			this.setState(prev => ({userData}))
			// console.log("HEADER user data found");
		}


	}


	render() {
		return (
			<header>
				<div className={classes.points}>
					<Link to="/main">
						<img src={Coin} alt=""/>
					</Link>

					<p>{this.props.points}</p>
				</div>
				<div id="menu" onClick={this.onMenuClick} className={classes.menu}>
					<i className="material-icons">home</i>
					<div id="extendedMenu" className={classes.extendedMenu}>
						<Link to="question"><img style={{borderRadius: '50%'}} className={classes.game} src={GameIcon} alt=""/></Link>

						<Link to="translator"><img style={{borderRadius: '50%'}} className={classes.dictionary} src={DictionaryIcon} alt=""/></Link>

						<Link to="leaderboard"><img className={classes.leaderboard} src={Leaderboard} alt=""/></Link>
					</div>
				</div>
			</header>
		)
	}
}


export default Header2
