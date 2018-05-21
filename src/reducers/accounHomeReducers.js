import { fetchConstants } from '../constants';

export function accountHomeHasErrored(state = false, action) {
    switch (action.type) {
        case fetchConstants.HAS_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
}

export function accountHomeIsLoading(state = false, action) {
    switch (action.type) {
        case fetchConstants.IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function accountHomeFetchDataSuccess(state = {}, action) {
    switch (action.type) {
        case fetchConstants.FETCH_DATA_SUCCESS:
            return action.item;
        default:
            return state;
    }
}

export function accountHomeFetchData(url) {
    return (dispatch) => {
        dispatch(accountHomeIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(accountHomeIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((item) => dispatch(accountHomeFetchDataSuccess(item)))
            .catch(() => dispatch(accountHomeHasErrored(true)));
    };
}