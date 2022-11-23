import { actions } from "../actions/loginActions";

const initialState = {
    // role: "",
    user: {},
    // type: "vendor",
};

//ah wan simulate den see if edey work..ok
const reducer = (state = initialState, action) => {
    console.log("Action iz ", action);
    switch (action.type) {
        case actions.Login:
            return { ...state, ...action.payload };
        case actions.Register:
            return { ...state, ...action.payload };
        case actions.VerifyEmail:
            return { ...state, ...action.payload };
        case actions.VerifyPhone:
            return { ...state, ...action.payload };
        case actions.Reset:
            return { ...state, ...action.payload };
        case action.ForgottenPwd:
            return { ...state, ...action.payload };
        case actions.Logout:
            console.log("Logout is" )
            return { ...state, user:{} };
        default:
            return  state ;
    }
};

export default reducer;
