import React from "react"
import classes from "./Header.scss"
import Coin from "../../../../assets/coins.svg"
import {Link} from 'react-router-dom';

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
		this.toggleIcons();
		this.toggleMenu();
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
						<div className={classes.game}></div>
						<div className={classes.dictionary}></div>
						<div className={classes.leaderboard}></div>
					</div>
				</div>
			</header>
		)
	}
}


export default Header
