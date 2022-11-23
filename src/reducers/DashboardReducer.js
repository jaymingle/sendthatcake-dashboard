import { actions } from "../actions/dashboardActions";

const initialState = {
    gStats: {},
    
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.getStatistics:
            return { ...state, ...action.payload };
        default:
            return state ;
    }
};

export default reducer;
