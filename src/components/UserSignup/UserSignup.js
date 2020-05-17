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
            ProfileDetails:{},
            sampleurl:"https://lh3.googleusercontent.com/a-/AOh14GhLZNPMS8l21quhP8oLIyqsZ22gy8ZcrTp_bXZh=s96-c"
         }
    }
    responseGoogle = (response)=> {
        this.setState({ ProfileDetails: response.profileObj})
        let api_url = "api/users/subscribe";
        let data = {
            fullname : this.state.ProfileDetails.name,
            email    : this.state.ProfileDetails.email,
            token    : '',
            subscribed : ''
        }
          getUserData
            .postUserdetails(api_url, data)
            .then(response => {
                console.log("Response Data...", response);
            });
        if(this.state.ProfileDetails.name){
            this.setState({ defalutProfile: false})
            this.setState({ fetchedProfile: true})
        }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className={`${this.state.defalutProfile ? "show" : "hide"}`}>
                <div className="default-img center">
                </div>
                <GoogleLogin 
                    clientId="4687849411-7o93g0cm040okm262ahdc8pjjelne21s.apps.googleusercontent.com"
                    buttonText="Google Sign in"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                </div>
                <div className={`${this.state.fetchedProfile ? "show" : "hide"}`}>
                <div className="center">
                    <img src={this.state.ProfileDetails.imageUrl} className='og-profile-img' />
                    <p className='user-name'>{this.state.ProfileDetails.name}</p>
                    <p className='user-email'>{this.state.ProfileDetails.email}</p>
                    <button class="next">Next</button>
                </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default UserLogin;