import { fetchConstants } from '../constants';

export function failure(bool) {
    return {
        type: fetchConstants.FETCH_FAILURE,
        hasErrored: bool
    };
}

export function request(bool) {
    return {
        type: fetchConstants.FETCH_REQUEST,
        isLoading: bool
    };
}

export function success(items) {
    return {
        type: fetchConstants.FETCH_SUCCESS,
        items
    };
}