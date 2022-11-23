import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import InputField from '../../components/inputField/InputField';
import {forgottenPwdAsync} from '../../actions/loginActions'
import { connect } from 'react-redux';



class ForgotPassword extends Component {
    state={
        forgot_email: "",
        errors: {},
    }
    render(){
        return(
            <div className="container-fluid h-100 overflow-y" style={{backgroundColor:'grey'}}>
            <div className="row flex-row h-100">
                <div className="col-12 my-auto">
                    <div className="password-form mx-auto" style={{borderTop:'solid 5px pink', borderBottom: 'solid 5px pink'}}>
                        <div className="logo-centered">
                            <a href="http://sendthatcake.com">
                                <img src="assets/img/logo.png" alt="logo"/>
                            </a>
                        </div>
                        <h3>Password Recovery</h3>
                        <p className='text-center'>It's okay if you forgot your password. Kindly provide the email associated with your account to reset it</p>
                        <form>
                            <div className="group material-input">
                            <span className=""><i className={`la la-${"user-clock"}`}></i></span>
                            <InputField
                                className={"form-control"}
                                type={'email'}
                                placeholder={'Email'}
                                name={'forgot_email'}
                                onChange={(e) => this.onChange(e)}
                            />
                                <span className='errors'>{this.state.errors.forgot_email} </span>
							    <span className="highlight"></span>
							    <span className="bar red"></span>
                            </div>
                        </form>
                        <div className="button text-center">
                            <a onClick = {this.forgotPassword} className="btn btn-lg btn-gradient-01 text-white">
                                Reset Password
                            </a>
                        </div>
                        <div className="back">
                            <Link to='/auth'>Sign In Instead</Link>
                        </div>
                    </div>        
                </div>
            </div>
        </div>  
        

        )
    }

    forgotPassword = (e) => {
        let error = false;
        const errors = {...this.state.errors}
        if(this.state.forgot_email?.length < 1){
            errors.forgot_email = "Please provide a registered email to reset your password";
            error = true;
            
          }else{
            delete errors.forgot_email;
          }
          this.setState({errors})
          console.log("Error,", error)
          if(error){
            return;
            
          }
        e.preventDefault();
        //     if(!this.ha..lolndleValidation()){
        //       return 
        //    }
        console.log("ForgotPwd Details", this.state.forgot_email); 
        // this.props.forgotPassword(this.state.forgot_email);
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
}

    const mapStateToProps = (state) => {
    
        return {
            user: state.login.user,
        }
    }
    
    const mapDispatchToProps = (dispatch) => {
        return {
            forgotPassword: (email) => dispatch(forgottenPwdAsync(email)),
        }
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);