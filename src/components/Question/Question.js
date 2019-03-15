import React from "react"
import classes from "./Question.scss"

class Question extends React.Component {

	state = {
		answer: ""
	}
	submitForm = e => {
		e.preventDefault();
		console.log(this.state.answer);
	}
	onAnswerChange = e => {
		this.setState({answer:e.target.value})
		console.log(e.target.value);
	}
	render() {


		return (
			<div className={classes.Question}>
				<header></header>
				<div className={classes.questionInner}>
					<form onSubmit={this.submitForm} action="">
						<img src="https://www.placecage.com/300/300" alt="img"/>
						<input type="text" name="answer" value={this.state.answer} onChange={this.onAnswerChange} className={classes.textInput} />
						<button type="submit"></button>
					</form>

				</div>
			</div>
		)
	}
}

export default Question
