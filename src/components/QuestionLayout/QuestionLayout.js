import React from "react"
import classes from "./QuestionLayout.scss"
import Question from "../Question/Question"
import Header from "../UI/Header/Header"

class QuestionLayout extends React.Component {
	render() {
		return (
			<div className={classes.QuestionLayout}>
				<div className={classes.bgOverlay}></div>
				<Header />
				<Question/>
			</div>
		)
	}
}

export default QuestionLayout
