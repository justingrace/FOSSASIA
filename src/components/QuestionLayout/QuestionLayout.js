import React from "react"
import classes from "./QuestionLayout.scss"
import Question from "../Question/Question"
import Header from "../UI/Header/Header"

class QuestionLayout extends React.Component {

	state = {
		index: 0,
		changeWord: false,
		currentWord: {},
		data: [
			{
				en: 'water',
				image: 'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2016/63-scientistsdi.jpg',
				lo: 'ນ້ໍາ'
			},
			{
				en: 'fire',
				image: 'https://s.hdnux.com/photos/50/76/47/10742221/259/920x920.jpg',
				lo: 'ໄຟໄຫມ້'
			},
			{
				en: 'money',
				image: 'https://cdn.theculturetrip.com/wp-content/uploads/2018/04/img_3707.jpg',
				lo: 'ເງິນ'
			},

		]
	}

	setRerenderHeader = () => {
		this.setState(this.state);

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
		console.log(this.state.people)
	}


	incrementIndex = () => {
		console.log(this.state.data.length);
		this.changeWord();

		// this.setState(prevState => ({changeWord: true}));
	}

	render() {


		return (
			<div className={classes.QuestionLayout}>
				{/*<Header />*/}
				<Question rerenderHeader={this.setRerenderHeader } question={this.state.currentWord} data={this.state.data[this.state.index]} incrementIndex={this.incrementIndex} />
			</div>
		)
	}
}

export default QuestionLayout;
