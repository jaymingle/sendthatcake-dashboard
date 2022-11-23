import { makeRequest } from "../api";
import Constants from "../utils/Constants";
import Noty from 'noty';


//EXPORT ACTIONS

export const actions = {
    Login: "Login",
    Logout: "Logout",
    Reset: "Reset",
    Register: "Register",
    VerifyPhone: "VerifyPhone",
    VerifyEmail: "VerifyEmail",
    ForgottenPwd: "ForgottenPwd",
};

// DISPATCH METHODS

export const login = (user) => {
    // user.type='vendor'
    return {
        type: actions.Login,
        payload: {user},
    };
};

export const logout = () => {
    // new Noty({
    //     text: 'You logged out successfully',
    //     theme: 'red',
        
    // }).show();
    return {
        type: actions.Logout,
        payload: {},
        
        
    };
    
};

export const reset = (usermail) => {
    return {
        type: actions.Reset,
        payload: usermail,
    };
};
export const forgotten = (userf) => {
    return {
        type: actions.ForgottenPwd,
        payload: userf,
    };
};

export const register = (data) => {
    return {
        type: actions.Register,
        payload: data,
    };
};

export const verifyEmail = (emailV) => {
    return {
        type: actions.VerifyEmail,
        payload: emailV,
    };
};

export const verifyPhone = (phoneV) => {
    return {
        type: actions.VerifyEmail,
        payload: phoneV,
    };
};


//LOGIN ASYNC METHODS

export const loginAsync = (username, password) => {
    // console.log("Retrieveing user", username);
    return (dispatch) => {
        console.log("Making request");
        {
        }
        return makeRequest("auth/login", "post", { username, password })
            .then((user) => {
                // console.log("user", user);
                // console.log("keys", Object.keys(user));
                // console.log("User retrieved successfuly", user.data.data);
                console.log("Customer info", user.data.data.phone);
                // const status = user.data.status;
                // if (status == 204) {
                //     dispatch(login({ error: user.data.message }));
                //     console.log("error =", user.data.message);
                // } else {
                    dispatch(login(user.data.data));
                    console.log("success", user.data.data);
                    // const username = user.data.data.firstName
                    // new Noty({
                    //     // type: 'danger',
                    //     text: `Welcome to your dashboard , ${username}`,
                    //     theme: 'red',
                        
                    // }).show();
                // }
            })
            .catch((exception) => {
                // dispatch(
                //     login({ name: "Customer", type: Constants.customer })
                // );
            //     if(user.data.data.role === Constants.admin){
            //         dispatch(login({name: "Administrator", type: Constants.admin}))
            //     }

            //     else if (user.data.data.role === Constants.vendor){
            //         dispatch(login({name: "Vendor", type: Constants.vendor}))
            //     }
            //     else {
            //         dispatch(login({name: 'Customer', type: Constants.customer}))
            //     }
            //     console.log("Some unknown error occured: ", exception);
            })
            .then(() => {
                //optional action
            });
    };
};

// export const logoutAsync = () => {
//     return (dispatch) => {
//         return makeRequest("auth/logout", "get", {})
//             .then((user1) => {
//                 dispatch(logout({ error: user1.data.message }));
//                 // console.log("error =", user1.data.message);
//             })
//             .catch((exception) => {
//                 console.log("Some unknown error occured: ", exception);
//             })
//             .then(() => {
//                 //optional action
//             });
//     };
// };

export const resetAsync = (email) => {
    console.log("Retrieveing user", email);
    return (dispatch) => {
        return makeRequest("auth/reset-password", "post", { email })
            .then((res) => {
                dispatch(reset({ error: res.data.data }));
                // console.log("error =", res.data.message);
            })
            .catch((exception) => {
                console.log("Some unknown error occured: ", exception);
            })
            .then(() => {
                //optional action
            });
    };
};
export const forgottenPwdAsync = (email) => { 
    console.log("Retrieveing user", email);
    return (dispatch) => {
        return makeRequest("auth/forgot-password", "post", { email })
            .then((frg) => {
                dispatch(forgotten({ error: frg.data.data }));
                // console.log("error =", res.data.message);
            })
            .catch((exception) => {
                console.log("Some unknown error occured: ", exception);
            })
            .then(() => {
                //optional action
            });
    };
};

export const registerAsync = (data) => {
    return (dispatch) => {
        return makeRequest("auth/register", "post", data )
            .then((regis) => {
                console.log("RegisterAsync")
                dispatch(register({regis }));
                return Promise.resolve(regis)
            })
            .catch((exception) => {
                console.log("Some unknown error occured: ", exception);
                    // alert("Error Registering Account")
                    new Noty({
                        // type: 'danger',
                        text: 'An error occured while creating your account. Please try again in a minute',
                        timeout: 8000,
                        theme: 'red',
                        
                    }).show();

                return Promise.reject(exception)
            })
            .then(() => {
                //optional action
            });
    };
};

export const verifyEmailAsync = (data) => {
    return (dispatch) => {
        return makeRequest("auth/verify-email", "post", { data })
            .then((Vem) => {
                dispatch(verifyEmail({ error: Vem.data.data }));
                // console.log("error =", res.data.message);
            })
            .catch((exception) => {
                console.log("Some unknown error occured: ", exception);
            })
            .then(() => {
                //optional action
            });
    };
};

export const verifyPhoneAsync = (data) => {
    return (dispatch) => {
        return makeRequest("auth/verify-phone", "post", data, {})
            .then((Vph) => {
                dispatch(verifyPhone({ error: Vph.data.data }));
                // console.log("error =", res.data.message);
            })
            .catch((exception) => {
                console.log("Some unknown error occured: ", exception);
            })
            .then(() => {
                //optional action
            });
    };
};
