import React, { Component } from 'react';
import Login from '../login/Login';
import Register from '../register/Register';
import LoginSide from '../../components/Login_Side/LoginSide';


class AuthPage extends Component {
    render() {
        return (
            <div className="bg-white">
                <div className="container-fluid no-padding h-100">
                    <div className="row flex-row h-100 bg-white">
                        <LoginSide />
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12 my-auto no-padding">
                            <div className="authentication-form-2 mx-auto">
                                <div className="tab-content" id="animate-tab-content">
                                    <Login />
                                    <Register />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default AuthPage;