import { makeRequest } from "../api";
import Constants from "../utils/Constants";
import Noty from 'noty';
import Swal from 'sweetalert2';

//EXPORT ACTIONS

export const actions = {
    createProduct: "createProduct",
    getProducts: "getProducts",
    updateProduct: "updateProduct",
    deleteProduct: "deleteProduct",
    getSinProduct: "getSinProduct",
    getProductComments: "getProductComments",
    getProductLikes: "getProductLikes",
};

export const createProduct = (data) => {
    return {
        type: actions.createProduct,
        payload: { prod: data },
    };
};

export const getProducts = (products) => {
    return {
        type: actions.getProducts,
        payload: { products: products },
    };
};

export const getSinProduct = (sinProduct) => {
    return {
        type: actions.getSinProduct,
        payload: { prod: sinProduct },
    };
};

export const updateProduct = (data) => {
    return {
        type: actions.updateProduct,
        payload: {prod: data},
    };
};

export const getProductComments = (prodc) =>{
    return {
        type: actions.getProductComments,
        payload: {prod: prodc},
    }
}
export const getProductLikes = (prodl) =>{
    return {
        type: actions.getProductLikes,
        payload: {prod: prodl},
    }
}
export const deleteProduct = (delp) =>{
    return {
        type: actions.deleteProduct,
        payload: {prod: delp},
    }
}



export const createProductAsync = (data) => {
    return (dispatch) => {
        return makeRequest("products", "post", data, {'Content-Type':'multipart/form-data'}, {})
            .then((createP) => {
                Swal.fire({
                    title: 'Way to go!',
                    text: 'Your new product has been added and is pending approval',
                    icon: 'success',
                  })
                console.log('add product dispatch', createP.data.data)
                // return dispatch(createProduct(getProductsAsync()));
                // if(response.data.status.toString()=== '200'){
                //     console.log("Success creating Product");

                // } 
                // else{
                //     console.log("Failed to create Product");
                // }
            })
            .catch((error) => {
                Swal.fire(
                    "Something isn't right",
                    "Sorry but we could'nt create your category at this time. Please try again later",
                    'error'
                  )
            });
    };
};


export const getProductsAsync = () => {
    return (dispatch) => {
        return makeRequest("products", "get", {}, {})
            .then((getP) => {
                console.log('get product dispatch', getP.data);
                console.log('All Products',getP.data.data)
                return dispatch(getProducts(getP.data.data));
            })
            .catch((error) => {});
    };
};


export const getSinProductAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`product/${id}`, "get", id, {})
            .then((getSinP) => {
                return dispatch(getSinProduct(getSinP.data.data));
            })
            .catch((error) => {});
    };
};


export const getProductCommentsAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`products/${id}/comments`, "get", id, {})
            .then((getPCom) => {
                return dispatch(getProductComments(getPCom.data.data));
            })
            .catch((error) => {});
    };
};

export const getProductLikesAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`products/${id}/likes`, "get", id, {})
            .then((getPL) => {
                return dispatch(getProductLikes(getPL.data.data));
            })
            .catch((error) => {});
    };
};

export const updateProductAsync = (id, data) => {
    return (dispatch) => {
        return makeRequest(`products/${id}`, "post", data,{'Content-Type':'multipart/form-data'}, {})
            .then((upProduct) => {
                return dispatch((getProductsAsync()));
            })
            .catch((error) => {});
    };
};


export const deleteProductAsync = (id) => {
    return (dispatch) => {
        return Swal.fire({
            title: 'Are you sure you want to delete this product?',
            text: "You may not be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#eb05b1',
            cancelButtonColor: '#d33',
            confirmButtonText: 'I am damn sure!'
        }).then((result) => {
            if (result.isConfirmed) {
        return makeRequest(`products/${id}`, "delete")
            }
        })
            .then((delProduct) => {
                Swal.fire({
                    title: "It's gone for good!",
                    text:"Product deleted successfully",
                    icon: "success",
                })
                return dispatch(getProductsAsync());
            })
            .catch((error) => {
                Swal.fire({
                    title: "Oops!! Something weird happened!!",
                    text:"Product could not be deleted. Please make sure it does not belong to an active category",
                    icon: "error",
                })
            });
    };
};
