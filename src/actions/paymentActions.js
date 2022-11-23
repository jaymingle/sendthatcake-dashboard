import { makeRequest } from "../api";
import Constants from "../utils/Constants";

//EXPORT ACTIONS

export const actions = {
    getPayment: "getPayment",
   
};



export const getPayment = (payments) => {
    return {
        type: actions.getPayment,
        payload: { payments: payments },
    };
};



// ASYNC CALL




export const getPaymentAsync = (ref) => {
    return (dispatch) => {
        return makeRequest(`payments/${ref}`, "get", {}, {})
        // console.log("Payment Details From Paystack", getP.data.data)
            .then((getP) => {
                return dispatch(getPayment(getP.data.data));
            })
            .catch((error) => {});
    };
};
