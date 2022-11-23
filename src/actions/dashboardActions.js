import {makeRequest} from '../api';
import Constants from '../utils/Constants';


// ----------EXPORT ACTIONS

export const actions = {
    getStatistics: 'getStats',

}


export const getStats = (gStats) => {
    return {
        type : actions.getStatistics,
        payload: {gStats: gStats},
    }
}



export const getDashboardStatsAsync = () => {
    return (dispatch) => {
        return makeRequest("dashboard/statistics", "get", {})
            .then((getS) => {
                return dispatch(getStats(getS.data.data));
            })
            .catch((error) => {});
    };
};
