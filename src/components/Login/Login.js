import React from "react";
import classes from "./Login.scss";
import {Route, withRouter} from 'react-router-dom';
import FBLogo from '../../../assets/fb.svg';
import GLLogo from '../../../assets/gl.svg';
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";


class Login extends React.Component{
	state = {
		redirect: false
	}

	componentDidMount() {
		const userData = sessionStorage.getItem("userData");
		// console.log("USER EXISTS");
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
		console.log(response);
		this.signUp(response, "facebook");
	};
	responseGoogle = response => {
		console.log(response);
		console.log(response.Zi.id_token);
		this.signUp(response, "google");

	};

	render(){
		return (
			<div className={classes.Login}>

				{/*{this.state.redirect && <Route to="/main" />}*/}
				<div className={classes.logo}></div>
				<div className={classes.buttons}>
					{/*<div onClick={this.handleFBClick} className={classes.fb}>*/}
						{/*<img src={FBLogo} alt=""/>*/}
						{/*<p>Login with Facebook</p>*/}
					{/*</div>*/}


					{/*<div className={classes.gl}>*/}
						{/*<img src={GLLogo} alt=""/>*/}
						{/*<p>Login with Google</p>*/}

					{/*</div>*/}
				</div>

				<GoogleLogin
					clientId="392862027300-a4i9hiqarhho1hj4kveu55epe61oi2kl.apps.googleusercontent.com"
					buttonText="Login"
					onSuccess={this.responseGoogle}
					onFailure={this.responseGoogle}
				/>

				<FacebookLogin
					appId="1143888412437924"
					autoLoad={false}
					fields="name,email"
					onClick={this.componentClicked}
					callback={this.responseFacebook}
				/>
			</div>
		)
	}


}
export default withRouter(Login);
