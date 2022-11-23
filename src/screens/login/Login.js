import React, { Component } from 'react';
import InputField from '../../components/inputField/InputField';
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {loginAsync} from "../../actions/loginActions";
import './login.css';

class Login extends Component {
    state= {
        username: '',
        password: '',
        // loggedIn: false,
        // isLoading: false,
        // fields: {},
        errors: {},
    }
        // handleValidation(){
        //     let fields = this.state.fields;
        //     let errors = {};
        //     let formIsValid = true;
            
        //     if (!fields["username"]){
        //         formIsValid = false;
        //         errors["username"] = "Please enter a valid username or email to sign in"
        //     }

        //     if(!fields["password"]){
        //         formIsValid = false;
        //         errors["password"] = "Heads up!! You have to enter a password to continue"
        //     }

        //     this.setState({errors: errors})
        //     return formIsValid;

            
        // }

    onChange = (e) => {
        // console.log("event", e.target)
        // let fields = this.state.fields;
        // fields[field] =e.target.value;
        // this.setState({fields})
        this.setState({[e.target.name]: e.target.value})
    }
    // onChange = (field, e) => {
    //     // console.log("event", e.target)
    //     let fields = this.state.fields;
    //     fields[field] =e.target.value;
    //     this.setState({fields})
    //     // this.setState({[e.target.name]: e.target.value})
    // }
    render() {
        // const {isLoading} = this.state;
        console.log('user details', this.props.user.token);
        if (this.props.user.token){
            // return (window.location ='http://sendthatcake.test/dashboard');
            return <Redirect to='/' />
        }
        return (
            <div role="tabpanel" className="tab-pane show active" id="singin" aria-labelledby="singin-tab">
                <h3>Sign In To SendthatCake</h3>
                <form >
                    <div className="group material-input">
                    <span className=""><i className={`la la-${"envelope"}`}></i></span>
                        <InputField
                            className={'form-control'}
                            type={'email'}
                            placeholder={'Email'}
                            name={'username'}                        
                            onChange={this.onChange}
                            required={"required"}
                            // onChange={this.onChange.bind(this, "username")} onInput={e =>{this.setState({username:e.target.value}) }} required

                        />
                        <div className="login-error">{this.state.errors.username}</div>
                    </div>
                    <div className="group material-input">
                    <span className=""><i className={`la la-${"lock"}`}></i></span>
                        <InputField
                            className={'form-control'}
                            type={'password'}
                            placeholder={'Password'}
                            name={'password'}
                            onChange={this.onChange}
                            required={"required"}

                            // onChange={this.onChange.bind(this, "password")} onInput={e =>{this.setState({password:e.target.value}) }} required
                        />
                        <div className="login-error">{this.state.errors.password}</div>
                    </div>
               
                <div className="row">
                    <div className="col text-left">
                        <div className="styled-checkbox">
                            <input type="checkbox" name="checkbox" id="remember" />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                    </div>
                    <div className="col text-right">
                        <Link to='/forgot-password'>Forgot Password ? </Link>
                    </div>
                </div>
                <div className="sign-btn text-center">
                    <a onClick={this.login} type="submit" href="#" className="btn btn-lg btn-gradient-01 text-white">
                    {/* <a onClick={this.login} disabled ="isLoading" type="submit" className="btn btn-lg btn-gradient-01 text-white"> */}
                        Sign In
                                    </a>
                    {/* {isLoading && !this.props.user.error && <i className="fa fa-circle-o-notch fa-spin fa-lg fa-fw"></i>} */}
                </div>
            </form>
                {/* <div className="login-error">{this.props.user.error}</div> */}
            </div>
        )
    }
    login = (e) => {
        let error = false;
        const errors = {...this.state.errors};
        if(this.state.username?.length < 1){
            errors.username = 'A valid email is needed to continue';
            error = true;
            
          }else{
            delete errors.email;
          }
        if(this.state.password?.length < 1){
            errors.password = "Enter your account's password";
            error = true;
            
          }else{
            delete errors.password;
          }
          this.setState({errors})
          console.log("Error,", error)
          if(error){
            return;
            
          }
        e.preventDefault();
        //     if(!this.handleValidation()){
        //       return 
        //    }
        // console.log("Details", this.state.username, this.state.password); 
        this.props.login(this.state.username, this.state.password);
        // this.props.login(this.state.username, this.state.password).then(()=>{this.setState({isLoading: false})});
        // this.setState({isLoading: true});
    }

}
const mapStateToProps = (state) => {
    
    return {
        user: state.login.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => dispatch(loginAsync(username, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);