import React from "react"
import classes from "./Question.scss"
import Header from "../UI/Header2/Header2";

class Question extends React.Component {

	state = {
		answer: "",
		userData: {}
	}

	toggleBgOverlay = () => {
		let bgOverlay = document.getElementById("bgOverlay");
		if(bgOverlay.classList.contains("active")) bgOverlay.classList.remove("active");
		else bgOverlay.classList.add("active");
	}
	submitForm = e => {
		e.preventDefault();


		fetch('https://quirky-locket.glitch.me/answer', {
			method: 'post',
			body: JSON.stringify({user_id:this.state.userData.user_id, _id:this.props.question._id , khmu: this.state.answer}),
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
		})
			.then((response) => {
				return response.json();
			})
			.then(data => {

				this.setState(prev => ({userData:{...prev.userData, points: prev.userData.points+5}}))
				this.toggleBgOverlay();

				setTimeout(()=> {
					this.props.incrementIndex();
					this.toggleBgOverlay();
					this.setState(prev =>({answer: ''}))
				},1000)
			});

	}

	skipWord = () => {
		this.props.incrementIndex();
		this.setState(prev =>({answer: ''}))
	}
	onAnswerChange = e => {
		this.setState({answer: e.target.value})
	}

	componentDidMount() {
		document.querySelector("input").focus();
		let userData = JSON.parse(sessionStorage.getItem("userData"));
		if(userData) this.setState({userData})
	}

	render() {
		return (
			<div className={classes.Question}>
				<Header points={this.state.userData.points} />



				<div id="bgOverlay" className={classes.bgOverlay}>
					<p>Good work!</p>
					<p>🙌🏽</p>
				</div>

				{
					<form autoComplete="off"  onSubmit={this.submitForm} action="">
						<div onClick={this.skipWord} className={classes.skipButton}>Skip</div>
						<div id="imageBox" className={classes.imageBox} style={{
							backgroundImage: `url(${this.props.question.url})`
						}}></div>
						<div className={classes.languages}>
							<p className={classes.english}>{this.props.question.word}</p>
							<p className={classes.lao}>{this.props.question.lao}</p>
						</div>
						<input autoFocus={true} type="text" name="answer" value={this.state.answer}
							   onChange={this.onAnswerChange} className={classes.textInput}/>
					</form>
				}
			</div>
		)
	}
}

export default Question
