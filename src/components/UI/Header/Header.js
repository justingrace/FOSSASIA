import React from "react"
import classes from "./Header.scss"
import Coin from "../../../../assets/coins.svg"
import {Link} from 'react-router-dom';
import Leaderboard from '../../../../assets/leaderboard.svg';
import DictionaryIcon from '../../../../assets/dictionary.svg';
import GameIcon from '../../../../assets/game.svg';

class Header extends React.Component {

	toggleMenu = () => {
		let menu = document.getElementById("menu");
		if(menu.classList.contains("active")) setTimeout(()=>{menu.classList.remove("active")}, 150)
		else menu.classList.add("active");
	}
	toggleIcons = () => {
		let extendedMenu = document.getElementById("extendedMenu");
		if(extendedMenu.classList.contains("showIcons")) extendedMenu.classList.remove("showIcons");
		else setTimeout(()=>{extendedMenu.classList.add("showIcons")}, 150)
	}
	onMenuClick = () => {
		this.toggleMenu();
		this.toggleIcons();
	}

	render() {
		return (
			<header>
				<div className={classes.points}>
					<Link to="/main">
						<img src={Coin} alt=""/>
					</Link>

					<p>125</p>
				</div>
				<div id="menu" onClick={this.onMenuClick} className={classes.menu}>
					<i className="material-icons">home</i>
					<div id="extendedMenu" className={classes.extendedMenu}>
						<img className={classes.game} src={GameIcon} alt=""/>
						<img className={classes.dictionary} src={DictionaryIcon} alt=""/>
						<img className={classes.leaderboard} src={Leaderboard} alt=""/>
					</div>
				</div>
			</header>
		)
	}
}


export default Header
