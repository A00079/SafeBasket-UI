import React from 'react';
import GoogleLogin from 'react-google-login';
import './UserLogin.css';
import getUserData from "../../rest/UserREST.js";



class UserLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            defalutProfile:true,
            fetchedProfile:false,
            ProfileImage:'',
            ProfileEmail:'',
            ProfileName:'',
            userLoginEmail:'',
            isDirectLogin:false,
            sampleurl:"https://lh3.googleusercontent.com/a-/AOh14GhLZNPMS8l21quhP8oLIyqsZ22gy8ZcrTp_bXZh=s96-c"
         }
    }
    responseGoogle = (response)=> {
        this.setState({ ProfileImage: response.profileObj.imageUrl})
        this.setState({ ProfileName: response.profileObj.name})
        this.setState({ ProfileEmail: response.profileObj.email})
        let api_url = "api/users/subscribe";
        let data = {
            fullname : response.profileObj.name,
            email    : response.profileObj.email,
            token    : '',
            subscribed : ''
        }
          getUserData
            .postUserdetails(api_url, data)
            .then(response => {
                console.log("Response Data...", response);
            });
        if(response.profileObj.name){
            this.setState({ defalutProfile: false})
            this.setState({ fetchedProfile: true})
        }
    }
    LoginUser = () =>{
        console.log('ProfileEmail',this.state.ProfileEmail)
        let api_url = "api/users/login";
        let data = {
            email: this.state.ProfileEmail,
        }
          getUserData
            .postUserdetails(api_url, data)
            .then(response => {
                console.log("Response Data...", response);
            });
    }
    userEmail = (e) =>{
        
        this.setState({ userLoginEmail: e.target.value})

        console.log('UserEmail',e.target.value)
    }
    DirectloginUser = ()=>{
        this.setState({ isDirectLogin: true})
    }
    directValidateLogin = ()=>{
        let api_url = "api/users/login";
        let data = {
            email: this.state.userLoginEmail
        }
        getUserData
        .postUserdetails(api_url, data)
        .then(response => {
            console.log("Response Data...", response);
        });
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className={`${this.state.isDirectLogin ? "hide" : "show"}`}>
                <div className={`${this.state.defalutProfile ? "show" : "hide"}`}>
                <div className="default-img center">
                </div>
                <GoogleLogin 
                    //development
                    // clientId="282259011280-okdjp2i41joegf6mlgco0frvpv6cada1.apps.googleusercontent.com"
                    //production
                    clientId="4687849411-7o93g0cm040okm262ahdc8pjjelne21s.apps.googleusercontent.com"
                    buttonText="Google Sign in"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                <button className="DirectLogin center" onClick={this.DirectloginUser}>Login</button>
                <button className="skip center">Skip</button>
                </div>
                <div className={`${this.state.fetchedProfile ? "show" : "hide"}`}>
                <div className="center">
                    <img src={this.state.ProfileImage || ""} alt="UserProfilleImage" className='og-profile-img' />
                    <p className='user-name'>{this.state.ProfileName}</p>
                    <p className='user-email'>{this.state.ProfileEmail}</p>
                    <button className="LoginSkip">Skip</button>
                    <button onClick={this.LoginUser} className="Login">Login</button>
                </div>
                </div>
                </div>
                <div className={`${this.state.isDirectLogin ? "show" : "hide"}`}>
                <div className="holder">
                    <div className="input-holder">
                        <input className="input" type="text" onChange={ e=>this.userEmail(e)} placeholder=" " />
                        <div className="placeholder">Email</div>
                    </div>
                    <button class="directnext" onClick={this.directValidateLogin}>Next</button>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default UserLogin;