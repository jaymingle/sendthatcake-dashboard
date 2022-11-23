import React, { Component } from "react";
import InputField from "../../components/inputField/InputField";
import { connect } from "react-redux";
import { registerAsync } from "../../actions/loginActions";
import { Redirect } from "react-router";
import "./register.css";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      type: "customer",
      password: "",
      phone: "",
      verify: false,
      // checked    : 'vendor' ,
      checked1: "accepted",
      checked2: "accepted2",
      name: "",
      errors:{},
    };
    this.handleCheck = this.handleCheck.bind(this);
    this.handleCheck1 = this.handleCheck1.bind(this);
  }
  handleCheck(e) {
    console.log("target", e.target.checked);

    this.setState({
      type: e.target.checked ? "vendor" : "customer",
    });
    
  }
  handleCheck1(e) {
    this.setState({
      checked1: e.target.checked1,
    });
  }

  render() {
    // console.log('REgister Code', this.props.register.firstName);
    if (this.state.verify){
      return <Redirect to={{
        pathname: '/verify-phone',
        state: { phone: this.state.phone }}}/>
      
   }
  // <Redirect to='/dashboard/verify-email'/>
    return (
      <div
        role="tabpanel"
        className="tab-pane"
        id="signup"
        aria-labelledby="signup-tab"
      >
        <h3>Create An Account</h3>
        <form>
          <div className="group material-input">
          <span className=""><i className={`la la-${"user"}`}></i></span>
            <InputField
              type={"text"}
              placeholder={"First Name"}
              className="form-control"
              name={"firstName"}
              onChange={this.onChange}
            />
              <span className='errors'>{this.state.errors.firstName} </span>

            

            </div>

            <div className="group material-input">
            <span className=""><i className={`la la-${"user"}`}></i></span>
            <InputField
              className={"form-control"}
              type={"text"}
              placeholder={"Last Name"}
              name={"lastName"}
              onChange={this.onChange}
            />
              <span className='errors'>{this.state.errors.lastName} </span>

            </div>
            <div className="group material-input">
            <span className=""><i className={`la la-${"envelope"}`}></i></span>
            <InputField
              className={"form-control"}
              type={"email"}
              placeholder={"Email"}
              name={"email"}
              onChange={this.onChange}
            />
             <span className='errors'>{this.state.errors.email} </span>

          </div>
          <div className="group material-input">
          <span className=""><i className={`la la-${"phone"}`}></i></span>
            <InputField
              className={"form-control"}
              type={"phone"}
              placeholder={"Phone Number"}
              name={"phone"}
              onChange={this.onChange}
            />
              <span className='errors'>{this.state.errors.phone} </span>

            {/* <label>{'Email'}</label> */}
          </div>
          <div className="group material-input">
          <span className=""><i className={`la la-${"lock"}`}></i></span>
            <InputField
              className={"form-control"}
              type={"password"}
              placeholder={"Password"}
              name={"password"}
              onChange={this.onChange}
            />
              <span className='errors'>{this.state.errors.password} </span>

            {/* <label>{'Password'}</label> */}
          </div>
          {/* <div className="group material-input">
                            <InputField
                                type={'password'}
                                placeholder={'Confirm Password'}
                                name={'cpassword'}
                                onChange={this.onChange}
                            />  */}
          {/* <label>{'Confirm Password'}</label> */}
          {/* </div> */}
        </form>

        <div className="row">
          <div className="col text-left">
            <div className="styled-checkbox">
              <input
                className={"form-control"}
                id="checkbox_id"
                type="checkbox"
                checked={this.state.type === "vendor"}
                onChange={this.handleCheck}
              />

              <label htmlFor="checkbox_id">I am a Vendor</label>
            </div>
            {
            this.state.type === "vendor" ? (
              <div>
                <input className="form-control" maxLength="15" name='name' onChange={this.onChange} value={this.state.name} type="text" placeholder="What's your store name" />
              </div>

            ) : null
            }
            <span className='errors'>{this.state.errors.checked} </span>

          </div>
          <div className="col text-left">
            <div className="styled-checkbox">
              <input
                className={"form-control"}
                id="checkbox_id1"
                type="checkbox"
                checked1={this.state.checked1}
                onChange={this.handleCheck1}
              />

              <label htmlFor="checkbox_id1">
                I Agree to <a href="/terms">Terms</a>
              </label>
              <span className='errors'>{this.state.errors.checked1} </span>

            </div>
          </div>
        </div>
        <div className="sign-btn text-center">
          <a onClick={this.register} className="btn btn-lg btn-gradient-01 text-white">
            Sign Up
          </a>
        </div>
      </div>
    );
  }
  register = (e) => {
    let error =false;
    const errors = {...this.state.errors};
    if(this.state.firstName?.length < 1){
      errors.firstName = 'You must provide a first name';
      error = true;
      
    }else{
      delete errors.firstName;
    }
    if(this.state.lastName?.length < 1){
      errors.lastName = 'You forgot to give your last name';
      error = true;
      
    }else{
      delete errors.lastName;
    }
    if(this.state.email?.length < 1){
      errors.email = 'Enter a valid email. You cannot use an email that already exists';
      error = true;
      
    }else{
      delete errors.email;
    }
    if(this.state.phone?.length < 1){
      errors.phone = 'Provide a verifiable phone number for your account';
      error = true;
      
    }else{
      delete errors.phone;
    }
    if(this.state.password?.length < 1){
      errors.password = 'Enter a password';
      error = true;
      
    }else{
      delete errors.password;
    }
    if(this.state.checked== false){
      errors.checked1 = 'Please accept terms to continue';
      error = true;
      
    }else{
      delete errors.checked1;
    }
    this.setState({errors})
    console.log("Error,", error)
    if(error){
      return;
      
    }
    e.preventDefault();
    // console.log("Sign Up Details", this.state.firstName);
    // this.props.register(this.state.email, this.state.phone, this.state.firstName, this.state.lastName, this.state.password, this.state.cpassword, this.state.type);
    this.props.register(this.state).then(()=>{
        this.setState({
          verify: true,
        })
    })
      
    

    // <Redirect to='/dashboard/verify-email'/>

  };

  onChange = (e) => {
    console.log("event", e.target);
    this.setState({ [e.target.name]: e.target.value });
  };
  onCheck = (e) => {
    console.log("onCHEckevent", e.target);
    this.setState({ [e.target.name]: "vendor" });
  };
}

const mapStateToProps = (state) => {
  return {
    register: state.register,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (data) => dispatch(registerAsync(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
