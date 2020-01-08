import {
    FETCH_COMPLETE,
    FETCH_PENDING,
    SERVER_ERROR,
    SUBMIT_COMPLETE,
    SUBMIT_PENDING,
    RESET_STATUS
} from '../reducers/ajaxStatusReducer';
import {
    REPO_FETCH_DETAILS, REPO_FETCH_LIST
} from '../reducers/repositoryReducer';
import axios from 'axios';

export function fetchRepoList(user) {
    return async (dispatch, getState) => {
        dispatch({
            type: FETCH_PENDING
        });
        try {
            const response = await axios({
                url: `https://api.github.com/users/${user}/repos`,
                method: 'get'
            });

            // console.log(response.data)

            dispatch({
                type: REPO_FETCH_LIST,
                payload: response.data
            });

            dispatch({
                type: FETCH_COMPLETE
            });
        } catch (error) {
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            });
        }
    };
}


export function getRepoDetail(user, repo) {
    return async (dispatch, getState) => {
        dispatch({
            type: FETCH_PENDING
        });
        try {
            const response = await axios({
                url: `https://api.github.com/repos/${user}/${repo}`,
                method: 'get'
            });

            console.log(response.data)

            dispatch({
                type: REPO_FETCH_DETAILS,
                payload: response.data
            });

            dispatch({
                type: FETCH_COMPLETE
            });
        } catch (error) {
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            });
        }
    };
}
