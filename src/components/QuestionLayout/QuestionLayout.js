import React from "react"
import classes from "./QuestionLayout.scss"
import Question from "../Question/Question"
import Header from "../UI/Header/Header"

class QuestionLayout extends React.Component {

	state = {
		index: 0,
		changeWord: false,
		currentWord: {},
	}


	changeWord = () => {
		const url= "https://quirky-locket.glitch.me/getword";
		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				this.setState(prev => ({currentWord:{...data[0]}}))
			})
			.catch(err=>console.log(err))
	}
	componentDidMount() {
		this.changeWord();
	}


	incrementIndex = () => {
		this.changeWord();
	}

	render() {


		return (
			<div className={classes.QuestionLayout}>
				<Question question={this.state.currentWord} incrementIndex={this.incrementIndex} />
			</div>
		)
	}
}

export default QuestionLayout;
