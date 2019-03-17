import React from "react"
import classes from "./Header.scss"
import Coin from "../../../../assets/coins.svg"
import {Link} from 'react-router-dom';
import Leaderboard from '../../../../assets/leaderboard.svg';
import DictionaryIcon from '../../../../assets/dict.jpeg';
import GameIcon from '../../../../assets/game.jpeg';

class Header extends React.Component {

	state = {
		userData: {}
	}

	toggleMenu = (menu) => {
		if(menu.classList.contains("active")) menu.classList.remove("active")
		else {
			menu.classList.add("active");
		}
	}
	toggleIcons = (extendedMenu) => {

		if(extendedMenu.classList.contains("showIcons")) extendedMenu.classList.remove("showIcons");
		else setTimeout(()=>{extendedMenu.classList.add("showIcons")}, 150)
	}
	onMenuClick = () => {
		let menu = document.getElementById("menu");
		let extendedMenu = document.getElementById("extendedMenu");

		this.toggleMenu(menu);
		this.toggleIcons(extendedMenu);
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		if(this.state.userData.points != nextProps.points){
			console.log("[]SHOULD UPDATE?")
			console.log(nextProps.points)
			this.setState()
			return true;
		}
		else return false;
	}

	componentDidMount() {

		let userData = JSON.parse(sessionStorage.getItem("userData"));
		if(userData) {
			this.setState(prev => ({userData}))
		}

	}

	render() {
		return (
			<header>
				<div className={classes.points}>
					<Link to="/main">
						<img src={Coin} alt=""/>
					</Link>

					<p>{this.state.userData.points}</p>
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


export default Header
