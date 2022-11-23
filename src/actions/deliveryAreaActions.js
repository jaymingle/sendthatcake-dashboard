import Swal from 'sweetalert2';
import {makeRequest} from '../api';
import Constants from '../utils/Constants';


export const actions = {
    getDeliveryArea: 'getDeliveryArea',
    addDeliveryArea: 'addDeliveryArea',
    getSinDeliveryArea: 'getsinDeliveryArea',
    updateDeliveryArea: 'updateDeliveryArea',
    deleteDeliveryArea: 'deleteDeliveryArea',


}

// ------------------DISPATCH METHODS

export const getDeliveryArea = (gDeliveryArea) => {
    return {
        type : actions.getDeliveryArea,
        payload: {delivery:gDeliveryArea},
    }
}
// export const addDeliveryArea = (pDeliveryArea) => {
//     return {
//         type : actions.addDeliveryArea,
//         payload: {delivery:pDeliveryArea},
//     }
// }
// export const getSinDeliveryArea = (gSinDeliveryArea) => {
//     return {
//         type : actions.getSinDeliveryArea,
//         payload: gSinDeliveryArea,
//     }
// }
// export const updateDeliveryArea = (upDeliveryArea) => {
//     return {
//         type : actions.updateDeliveryArea,
//         payload: upDeliveryArea,
//     }
// }






export const getDeliveryAreaAsync = () => {
    return (dispatch) => {
       
        return makeRequest("delivery-area", "get", {})
            .then((getO) => {
                return dispatch(getDeliveryArea(getO.data.data));
            })
            .catch((error) => {
                
            });
    };
};


export const addDeliveryAreaAsync = (data) => {
    return (dispatch) => {
        Swal.fire({
            title: "Great!",
            text:"Delivery Area added successfully",
            icon: "success",
        })
        return makeRequest('delivery-area', "post", data, {})
            .then((postO) => {
                return dispatch(getDeliveryAreaAsync());
            })
            .catch((error) => {
                Swal.fire({
                    title: "Sorry!!",
                    text:"Looks like your area was not added. Try again later.",
                    icon: "success",
                })
            });
    };
};


export const getSinDeliveryAreaAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`delivery-area/${id}`, "get", {})
            .then((sinDeliveryArea) => {
                // return dispatch(getSinDeliveryArea();
            })
            .catch((error) => {});
    };
};

export const updateDeliveryAreaAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`delivery-area/${id}`, "put", id, {})
            .then((upO) => {
                return dispatch(getDeliveryAreaAsync());
            })
            .catch((error) => {});
    };
};
export const deleteDeliveryAreaAsync = (id) => {
    return (dispatch) => {
        return Swal.fire({
            title: 'Are you sure you want to delete this area?',
            text: "You may not be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#eb05b1',
            cancelButtonColor: '#d33',
            confirmButtonText: 'I am damn sure!'
        }).then((result) => {
            if (result.isConfirmed) {
        return makeRequest(`delivery-area/${id}`, "delete", id, {})
            }
        })
            .then((delDeliveryArea) => {
                Swal.fire({
                    title: "It's gone for good!",
                    text:"Delivery Area was deleted successfully",
                    icon: "success",
                })
                return dispatch(getDeliveryAreaAsync());
            })
            .catch((error) => {
                Swal.fire({
                    title: "Something bad happened!",
                    text:"Area was not deleted",
                    icon: "error",
                })
            });
    };
};