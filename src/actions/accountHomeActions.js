import { fetchConstants } from '../constants';
import * as accountHomeService from '../services/accountHomeService';

export function accountHomeFetchData(url) {
    return (dispatch) => {

        dispatch(accountHomeIsLoading(true));
        accountHomeService.accountHomeFetchData(url).then(
            item => {
                        dispatch(accountHomeIsLoading(false));
                        dispatch(accountHomeFetchDataSuccess(item));
                    },
            error => {
                dispatch(accountHomeHasErrored(true));
            }
        ).catch(() => dispatch(accountHomeHasErrored(true)));
    };

    function accountHomeIsLoading(bool) {
        return {
            type: fetchConstants.IS_LOADING,
            isLoading: bool
        };
    }

    function accountHomeHasErrored(bool) {
        return {
            type: fetchConstants.HAS_ERRORED,
            hasErrored: bool
        };
    }

    function accountHomeFetchDataSuccess(item) {
        return {
            type: fetchConstants.FETCH_DATA_SUCCESS,
            item
        };
    }
}