import React from "react";
import classes from "./Login.scss";
import {Route, withRouter} from 'react-router-dom';

import Logo from '../../../assets/logo.jpeg';
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";


class Login extends React.Component{
	state = {
		redirect: false
	}

	componentDidMount() {
		const userData = sessionStorage.getItem("userData");
		if(userData) this.props.history.push('/main')
	}

	signUp = (res, type) => {
		let body;
		if (type == "facebook") {
			body = { id: res.id, displayName: name };
		} else if (type == "google") {
			body = { id: res.googleId, displayName: res.w3.ig };
		}

		fetch(`https://quirky-locket.glitch.me/signup/${type}`, {
			method: "post",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*"
			}
		})
			.then((response) => {
				return response.json();
			})
			.then(data => {
				// this.setState({redirect: true})
				sessionStorage.setItem("userData", JSON.stringify(data))
				this.props.history.push('/main')
			});

	};

	componentClicked = () => console.log("clicked");

	responseFacebook = response => {
		this.signUp(response, "facebook");
	};
	responseGoogle = response => {
		this.signUp(response, "google");

	};

	render(){
		return (
			<div className={classes.Login}>

				<img src={Logo} alt="" className={classes.logo} />
				<div className={classes.buttons}>
				</div>

				<GoogleLogin
					clientId="932926853812-uf7in7asn8kvvbukmbgq91no2sgc6ihq.apps.googleusercontent.com"
					buttonText="LOGIN"
					onSuccess={this.responseGoogle}
					onFailure={this.responseGoogle}
				/>

				<FacebookLogin
					appId="1143888412437924"
					autoLoad={false}
					fields="name,email"
					icon={"fa-facebook"}
					textButton="Login"
					disableMobileRedirect={true}
					onClick={this.componentClicked}
					callback={this.responseFacebook}
				/>
			</div>
		)
	}


}
export default withRouter(Login);
