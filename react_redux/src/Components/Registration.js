import React, { useState } from 'react';
import "../CSS/Registration.css";
import { useDispatch ,useSelector} from "react-redux"
import { PostData ,authgo} from '../Redux/Actions/Action';
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom"

const Registration = () => {
	const Navigate = useNavigate();
	const {Name,Email}=useSelector((state)=>state.Post);
	if(Name){
		localStorage.setItem("Name",JSON.stringify(Name));
		localStorage.setItem("Email",JSON.stringify(Email));
		Navigate("/home");
	}
	
	//Google success Function

	const SuccessGoogle = async (res) => {

	   
	 
	   const result=await res?.profileObj;
	//   console.log(result);
	   const token=await res?.tokenId;
		dispatch(authgo({result,token}));
		localStorage.setItem("profile",JSON.stringify(result.name));
		localStorage.setItem("image",JSON.stringify(result.imageUrl));
		localStorage.setItem("EmailAuth",JSON.stringify(result.email));
	
		Navigate("/home");
	}

	// Google Failure Function 
	const FailureGoogle = () => {
		console.log("Something Went Wrong");
	}
	const dispatch = useDispatch();
	const [data, setdata] = useState({
		fname: "",
		lname: "",
		email: "",
		password: "",
		confirmPassword: ""
	});

	const change = (e) => {
		const { value, name } = e.target;

		setdata((olddata) => {

			if (name === "fname") {
				return {
					fname: value,
					lname: olddata.lname,
					email: olddata.email,
					password: olddata.password,
					confirmPassword: olddata.confirmPassword
				}

			} else if (name === "lname") {
				return {
					fname: olddata.fname,
					lname: value,
					email: olddata.email,
					password: olddata.password,
					confirmPassword: olddata.confirmPassword

				}
			}
			else if (name === "email") {
				return {
					fname: olddata.fname,
					lname: olddata.lname,
					email: value,
					password: olddata.password,
					confirmPassword: olddata.confirmPassword

				}
			}
			else if (name === "password") {
				return {
					fname: olddata.fname,
					lname: olddata.lname,
					email: olddata.email,
					password: value,
					confirmPassword: olddata.confirmPassword

				}
			}
			else if (name === "confirmPassword") {
				return {
					fname: olddata.fname,
					lname: olddata.lname,
					email: olddata.email,
					password: olddata.password,
					confirmPassword: value

				}
			}


		})
	}


	// Send the data to backend via redux by calling action---

	const Submit = (e) => {
		e.preventDefault();
		dispatch(PostData(data))

	}
	return (
		<>

			<div class="container">
				<div class="row">
					<div class="panel panel-primary">
						<div class="panel-body">
					<center>	<h2 style={{marginBottom:"15px",marginTop:"10px"}}>Create Account</h2></center>
							<form method="POST">
							
								<div class="form-group">
									<label class="control-label" for="signupName"  style={{marginBottom:"5px",fontWeight:"bold"}}>Fname</label>
									<input id="signupName" type="text" maxlength="50" class="form-control" onChange={change} name='fname' value={data.fname} autoComplete="off" />
								</div>
								<div class="form-group">
									<label class="control-label" for="signuplname"  style={{marginBottom:"5px",fontWeight:"bold"}}>Lname</label>
									<input id="signuplname" type="text" maxlength="50" class="form-control" onChange={change} name='lname' value={data.lname} autoComplete="off" />
								</div>
								<div class="form-group">
									<label class="control-label" for="signupEmail"  style={{marginBottom:"5px",fontWeight:"bold"}}>Email</label>
									<input id="signupEmail" type="email" maxlength="50" class="form-control" onChange={change}style={{marginBootom:"5px"}} name='email' value={data.email} autoComplete="off" />
								</div>

								<div class="form-group">
									<label class="control-label" for="signupPassword"  style={{marginBottom:"5px",fontWeight:"bold"}}>Password</label>
									<input id="signupPassword" type="password" maxlength="25" class="form-control" placeholder="at least 6 characters" length="40"  onChange={change} name='password' value={data.password} />
								</div>
								<div class="form-group">
									<label class="control-label" for="signupPasswordagain"  style={{marginBottom:"5px",fontWeight:"bold"}}>Confirm Password</label>
									<input id="signupPasswordagain" type="password" maxlength="25" class="form-control" onChange={change} name='confirmPassword' value={data.confirmPassword} />
								</div>
								<br />
								<div class="form-group">
									<button id="signupSubmit" type="submit" style={{paddingLeft:"32%",paddingRight:"32%",color:"white"}} className="btn btn-success btn-block " onClick={Submit} >Create Account</button> 
								</div>
								<br/>
								<GoogleLogin
									clientId="580781924413-k5ogv6nn7vrtkl5elvgc4hjcad00bi8q.apps.googleusercontent.com"
									render={renderProps => (
										<button onClick={renderProps.onClick}  style={{paddingLeft:"33%",paddingRight:"33%"}} disabled={renderProps.disabled} className='btn btn-primary'>Google SignIn</button>
									)}
									onSuccess={SuccessGoogle}
									onFailure={FailureGoogle}

									cookiePolicy='single_host_origin'
								/>
								<p class="form-group">By creating an account, you agree to our <a href="#">Terms of Use</a> and our <a href="#">Privacy Policy</a>.</p>
								<hr />
								<p>Already have an account? <a href="/Sign_in">Sign in</a></p>
							</form>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}

export default Registration;