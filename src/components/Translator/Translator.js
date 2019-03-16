import React from "react"
import classes from "./Translator.scss"
import Header from "../UI/Header/Header"

class Translator extends React.Component {
	state = {
		input: "",
		output: "hha"
	}
	handleInputChange = e => {
		this.setState({input: e.target.value});
	}

	submitForm = e => {
		e.preventDefault();
		console.log(this.state.input);

		fetch('https://quirky-locket.glitch.me/findWord', {
			method: 'post',
			body: JSON.stringify({word:this.state.input}),
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
		}).then(function(response) {
			return console.log(response.json())
		}).then(data => console.log(data))
	}
	handleCrossClick = (e) => {
		e.target.classList.add("rotateMe");
		setTimeout(()=>{document.getElementById("closeIcon").classList.remove("rotateMe")}, 1000)
		this.setState({input: ""})
	}
	render() {
		return (
			<div className={classes.Translator}>
				<Header/>
				<div className={classes.top} onClick={()=>{document.getElementById("inputField").focus()}}>
					<form autoComplete={"false"} onSubmit={this.submitForm}>
						{/*<textarea className={classes.inputField} type="text" value={this.state.input} onChange={this.handleInputChange} />*/}
						{/*<input type="submit"/>*/}
						<input autoFocus={true} id={"inputField"} type="text"className={classes.inputField} type="text" value={this.state.input} onChange={this.handleInputChange}  />
						<i id="closeIcon" onClick={this.handleCrossClick} className="material-icons">close</i>
					</form>
					<div className={classes.submitButton} onClick={this.submitForm}></div>
				</div>

				<div className={classes.bottom}>
					{this.state.output}
				</div>

			</div>
		)
	}
}

export default Translator