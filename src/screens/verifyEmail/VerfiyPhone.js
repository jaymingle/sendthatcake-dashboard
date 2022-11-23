import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import InputField from '../../components/inputField/InputField';
import { verifyPhoneAsync } from '../../actions/loginActions';
import {connect} from 'react-redux';
import Swal from 'sweetalert2';


class VerifyPhone extends Component {
    state={
        code: '',
        phone: this.props.location.state.phone,
        resendVerificationCode: false,
    }
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
                        <img className="" width="80px" height="80px" src="assets/img/gif/phonelink-ring.gif" alt="anime-c" />
                        <h3>We just sent a verification code.</h3>
                        <p className='text-center'>Use this code to verify that it's really you</p>
                        <form>
                            <div className="group material-input">
                            <span className=""><i className={`la la-${"sms"}`}></i></span>
                            <InputField
                                className={"form-control"}
                                type={'number'}
                                placeholder={'Verification code'}
                                name={'code'}
                                onChange={(e) => this.onChange(e)}
                            />
							    <span className="highlight"></span>
							    <span className="bar red"></span>
                            </div>
                        </form>
                        <div className="button text-center">
                            <a onClick = {this.verify} className="btn btn-lg btn-gradient-01 text-white">
                                Verify
                            </a>
                        </div>
                        <div className="back">
                            <p>Didn't get verification email? <a href="#" onClick={this.resendCode}>Resend</a></p>
                        </div>
                    </div>        
                </div>
            </div>
        </div>  
        

        )
    }
  
    verify =(e)=>{
        e.preventDefault()
        this.props.verifyPhone(this.state).then(()=>{
            // Noty() here
            this.props.history.push('/auth/login')
        }).catch({
            //error here with swal
        })
    }
    resendCode = (e) => {
        e.preventDefault();
        //     if(!this.ha..lolndleValidation()){
        //       return 
        //    }
        console.log("Resending Phone Code"); 
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
          verifyPhone: (data) => dispatch(verifyPhoneAsync(data)),
        };
      };

      
export default connect(mapStateToProps, mapDispatchToProps)(VerifyPhone);