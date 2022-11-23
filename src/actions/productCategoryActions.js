import { makeRequest } from "../api";
import Constants from "../utils/Constants";
import Noty from 'noty';
import Swal from 'sweetalert2'

//EXPORT ACTIONS

export const actions = {
    addProductCategory: "postProductCategory",
    getProductCategory: "getProductCategory",
    updateProductCategory: "updateProductCategory",
    deleteProductCategory: "deleteProductCategory",
    getSinProductCategory: "getSinProductCategory",
};

export const addProductCategory = (data) => {
    return {
        type: actions.addProductCategory,
        payload: { prodCat: data },
    };
};

export const getProductCategory = (prodcat) => {
    return {
        type: actions.getProductCategory,
        payload: { prodcat: prodcat },
    };
};

export const getSinProductCategory = (sinPSize) => {
    return {
        type: actions.getSinProductCategory,
        payload: { prodCatS: sinPSize },
    };
};

export const updateProductCategory = (data) => {
    return {
        type: actions.updateProductCategory,
        payload: {prodCat: data},
    };
};

export const deleteProductCategory = (userProductCategory) =>{
    return {
        type: actions.postProductCategory,
        payload: {prodCat: userProductCategory},
    }
}




// ASNYNC
export const addProductCategoryAsync = (data) => {
    return (dispatch) => {
               
        return makeRequest("product-categories", "post", data, {})
            .then((addpS) => {
                Swal.fire({
                    title: 'Nice',
                    text: 'Your new category has been added',
                    icon: 'success',
                  })
                console.log("Sending Category request", addpS.data.message);
                console.log("Category success message", addpS.data.message);
                return dispatch(addProductCategory(addpS.data.data));
                // if(addpS.data.status.toString()=== '200'){
                //     console.log("Success creating ProductCategory");
                

                // }
                // else{
                //     new Noty({
                //         // type: 'danger',
                //         text: 'Failed to create category. Try again in a moment',
                //         theme: 'red',
                        
                //     }).show();
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


export const getProductCategoryAsync = () => {
    return (dispatch) => {
        console.log("Making GET CAT Request")
        return makeRequest("product-categories", "get", {}, {})
            .then((getCa) => {
                console.log("Get Categories Async", getCa.data.data)
                return dispatch(getProductCategory(getCa.data.data));
            })
            .catch((error) => {});
    };
};


export const getSinProductCategoryAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`product-categories/${id}`, "get", id, {})
            .then((getSinC) => {
                return dispatch(getSinProductCategory(getSinC.data.data));
            })
            .catch((error) => {});
    };
};

export const updateProductCategoryAsync = (id,data) => {
    return (dispatch) => {
        return makeRequest(`product-categories/${id}`, "put", data, {})
            .then((upCat) => {

                return dispatch((getProductCategoryAsync()));
                // return dispatch(updateProductCategory(getProductCategoryAsync()));
            })
            .catch((error) => {});
    };
};

export const deleteProductCategoryAsync = (id) => {
    return (dispatch) => {
        return Swal.fire({
            title: 'Are you sure you want to delete this category?',
            text: "You may not be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#eb05b1',
            cancelButtonColor: '#d33',
            confirmButtonText: 'I am damn sure!'
        }).then((result) => {
            if (result.isConfirmed) {
        return makeRequest(`product-categories/${id}`, "delete", {})
            }
        })
            .then((delProductCategory) => {
                Swal.fire({
                    title: "It's gone for good!",
                    text:"Category deleted successfully",
                    icon: "success",
                })
                return dispatch(getProductCategoryAsync());
            })
            .catch((error) => {
                Swal.fire({
                    title: "Oops!! Something weird must have happened!",
                    text: "Failed to delete category",
                    icon: 'error'
                })
            });
    };
};
