export const REPO_FETCH_DETAILS = 'app/repos/fetchRepoDetails';
export const REPO_FETCH_LIST = 'app/repos/fetchRepoList';
export const REPO_FETCH_USER = 'app/repos/fetchRepoUSER';

const initialState = {
    repos: [],
    repoInfo: {},
    user: {}
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case REPO_FETCH_DETAILS: {
            return {
                ...state,
                repoInfo: action.payload
            };
        }
        case REPO_FETCH_LIST: {
            return {
                ...state,
                repos: action.payload
            };
        }
        case REPO_FETCH_USER: {
            return {
                ...state,
                user: action.payload
            }
        }
        default:
            return state;
    }
}