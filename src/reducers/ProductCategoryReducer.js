import { actions } from "../actions/productCategoryActions";

const initialState = {
    prodcat: [],
    prodCatS: [],
    sinPSize:[],
    
};

const reducer = (state = initialState, action) => {
    // console.log("Inside Category Reducer", action.payload);
    switch (action.type) {
        case actions.addProductCategory:
            return { ...state, ...action.payload };
        case actions.getProductCategory:
            console.log("getProductCat");
            return { ...state, ...action.payload };
        case actions.getSinProductCategory:
            return { ...state, ...action.payload };
        case actions.updateProductCategory:
            return { ...state, ...action.payload };
        case actions.deleteProductCategory:
            return { ...state, ...action.payload };
        default:
            return state ;
    }
};

export default reducer;
