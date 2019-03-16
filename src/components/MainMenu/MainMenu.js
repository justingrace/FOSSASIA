import React from "react"
import classes from "./MainMenu.scss"
import DictIcon from "../../../assets/dictionary.svg"
import GameIcon from "../../../assets/game.svg"
import {Link} from "react-router-dom"


const MainMenu = () => {
	return (
		<div className={classes.MainMenuHome}>
			<div className={classes.top}>
				<Link to="question"><img src={GameIcon} alt=""/></Link>
			</div>

			<div className={classes.bottom}>
				<Link to="dictionary"><img src={DictIcon} alt=""/></Link>
			</div>
		</div>
	)
}
export default MainMenu
