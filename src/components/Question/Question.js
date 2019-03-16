import React from "react"
import classes from "./Question.scss"

class Question extends React.Component {

	state = {
		answer: "",
		url: "https://www.loremflickr.com/220/220"
	}
	submitForm = e => {
		e.preventDefault();
		console.log(this.state.answer);
		this.setState({url: "https://www.loremflickr.com/300/300"})
	}
	onAnswerChange = e => {
		this.setState({answer:e.target.value})
		console.log(e.target.value);
	}

	componentDidMount() {
		document.querySelector("input").focus();
	}

	render() {
		return (
			<div className={classes.Question}>
					<form onSubmit={this.submitForm} action="">
						<div style={{height: 300, width: 300, background: '#2b2b2b', borderRadius: '8px'}}></div>
						{/*<img src={this.state.url} alt="img"/>*/}
						<div className={classes.languages}>
							<p className={classes.english}>Cat</p>
							<p className={classes.lao}>haha</p>
						</div>
						<input autoFocus={true} type="text" name="answer" value={this.state.answer} onChange={this.onAnswerChange} className={classes.textInput} />
					</form>
			</div>
		)
	}
}

export default Question
