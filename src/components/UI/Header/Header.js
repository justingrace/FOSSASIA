import React from "react"
import classes from "./Header.scss"

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className={classes.points}>125</div>
				<div className={classes.menu}>
				</div>
			</header>
		)
	}
}


export default Header
