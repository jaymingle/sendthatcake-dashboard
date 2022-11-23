import { actions } from "../actions/productActions";

const initialState = {
    products: [],
    prod: [],
    
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.createProduct:
            return { ...state, ...action.payload };
        case actions.getProducts:
            return { ...state, ...action.payload };
        case actions.getSinProduct:
            return { ...state, ...action.payload };
        case actions.updateProduct:
            return { ...state, ...action.payload };
        case actions.getProductComments:
            return { ...state, ...action.payload };
        case actions.getProductLikes:
            return { ...state, ...action.payload };
        case actions.deleteProduct:
            return { ...state, ...action.payload };
        default:
            return state ;
    }
};

export default reducer;
