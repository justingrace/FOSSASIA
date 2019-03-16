import React from "react"
import classes from "./QuestionLayout.scss"
import Question from "../Question/Question"
import Header from "../UI/Header/Header"

class QuestionLayout extends React.Component {

	state = {
		index: 0,
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

	incrementIndex = () => {
		console.log(this.state.data.length);
		this.setState(prevState => ({index: ((prevState.index+1) % (prevState.data.length))}));
	}

	render() {


		return (
			<div className={classes.QuestionLayout}>
				<Header />
				<Question data={this.state.data[this.state.index]} incrementIndex={this.incrementIndex} />
			</div>
		)
	}
}

export default QuestionLayout;
