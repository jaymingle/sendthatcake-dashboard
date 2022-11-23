import {makeRequest} from '../api';
import Constants from '../utils/Constants';


// ----------EXPORT ACTIONS

export const actions = {
    getOrders: 'getOrders',
    makeOrder: 'pOrders',
    getSinOrder: 'sinOrder',
    updateOrder: 'updateOrder',
    deleteOrder: 'deleteOrder',


}

// ------------------DISPATCH METHODS

export const getOrder = (gOrder) => {
    return {
        type : actions.getOrders,
        payload: {gOrder: gOrder},
    }
}
export const makeOrder = (pOrder) => {
    return {
        type : actions.makeOrder,
        payload: pOrder,
    }
}
export const getSinOrder = (gSinOrder) => {
    return {
        type : actions.getSinOrder,
        payload: {gSinOrder: gSinOrder},
    }
}
export const updateOrder = (upOrder) => {
    return {
        type : actions.updateOrder,
        payload: upOrder,
    }
}
export const deleteOrder = (delo) => {
    return {
        type : actions.updateOrder,
        payload: delo,
    }
}






// ----------------------END DISPATCH METHODS


export const getOrderAsync = () => {
    return (dispatch) => {
        return makeRequest("orders", "get", {})
            .then((getO) => {
                return dispatch(getOrder(getO.data.data));
            })
            .catch((error) => {});
    };
};


export const makeOrderAsync = (data) => {
    return (dispatch) => {
        return makeRequest('orders/', "post", data, {})
            .then((postO) => {
                return dispatch(makeOrder(postO.data.data));
            })
            .catch((error) => {});
    };
};


export const getSinOrderAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`orders/${id}`, "get", {})
            .then((sinOrder) => {
                return dispatch(getSinOrder(sinOrder.data.data));
            })
            .catch((error) => {});
    };
};

export const updateOrderAsync = (id,status) => {
    return (dispatch) => {
        return makeRequest(`orders/${id}/status/${status}`, "post", {})
            .then((upO) => {
                return dispatch(updateOrder(getOrderAsync()));
            })
            .catch((error) => {});
    };
};
export const deleteOrderAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`orders/${id}`, "delete")
            .then((delOrder) => {
                return dispatch(getOrderAsync());
            })
            .catch((error) => {});
    };
};