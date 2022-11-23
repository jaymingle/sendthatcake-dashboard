import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import InputField from '../../components/inputField/InputField';
import { verifyEmailAsync} from '../../actions/loginActions';
import {connect } from 'react-redux';



class VerifyEmail extends Component {
    render(){
        return(
            <div className="container-fluid h-100 overflow-y" style={{backgroundColor:'grey'}}>
            <div className="row flex-row h-100">
                <div className="col-12 my-auto">
                <div className="password-form mx-auto" style={{borderTop:'solid 5px pink', borderBottom: 'solid 5px pink'}}>
                        <div className="logo-centered">
                            <a href="db-default.html">
                                <img src="assets/img/logo.png" alt="logo"/>
                            </a>
                        </div>
                        <h3>Verify Email</h3>
                        <p className='text-center'>We just want to know if it's really you. Please check your email for a verification code</p>
                        <form>
                            <div className="group material-input">
                            <span className=""><i className={`la la-${"spin envelope-open-text"}`}></i></span>
                            <InputField
                                className={"form-control"}
                                type={'email'}
                                placeholder={'Verification code'}
                                name={'forgot_email'}
                                onChange={(e) => this.onChange(e)}
                            />
							    <span className="highlight"></span>
							    <span className="bar red"></span>
                            </div>
                        </form>
                        <div className="button text-center">
                            <a onClick = {this.verifyEmail} className="btn btn-lg btn-gradient-01 text-white">
                                Verify
                            </a>
                        </div>
                        <div className="back">
                            <p>Didn't get verification email? <a href="#" onClick={this.resend}>Resend</a></p>
                        </div>
                    </div>        
                </div>
            </div>
        </div>  
        

        )
    }
    resend = (e) => {
        e.preventDefault();
        //     if(!this.ha..lolndleValidation()){
        //       return 
        //    }
        console.log("resend code", this.state.email); 
        // this.props.resend(this.state.email);
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
}


    const mapStateToProps = (state) => {
        return {
        //   register: state.register,
        };
      };
      
      const mapDispatchToProps = (dispatch) => {
        return {
          verifyEmail: (data) => dispatch(verifyEmailAsync(data)),
        };
      };

      
export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
      