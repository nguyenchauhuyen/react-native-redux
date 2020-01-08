export const SERVER_ERROR = 'aspire/ajaxStatus/fetchDataServerError';
export const FETCH_PENDING = 'aspire/ajaxStatus/fetchPending';
export const FETCH_COMPLETE = 'aspire/ajaxStatus/fetchComplete';
export const SUBMIT_PENDING = 'aspire/ajaxStatus/submitPending';
export const SUBMIT_COMPLETE = 'aspire/ajaxStatus/submitComplete';
export const RESET_STATUS = 'aspire/ajaxStatus/resetStatus';

const initialState = {
    isServerError: false,
    isLoading: false,
    isSubmitting: false,
    isSubmitSuccess: false,
    serverStatus: '',
    serverMessage: '',
    serverErrors: [],
    sendForm: '',
    actionName: ''
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case SERVER_ERROR:
            return {
                ...state,
                isServerError: true,
                isLoading: false,
                isSubmitting: false,
                serverStatus: action.serverStatus,
                serverMessage: action.serverMessage,
                serverErrors: action.serverErrors
            };
        case FETCH_PENDING:
            return {
                ...state,
                isLoading: true,
                actionName: action.actionName
            };
        case FETCH_COMPLETE:
            return {
                ...state,
                isLoading: false,
                isServerError: false,
                isSubmitSuccess: false,
                serverStatus: ''
            };
        case SUBMIT_PENDING:
            return {
                ...state,
                isSubmitting: true,
                sendForm: action.sendForm
            };
        case SUBMIT_COMPLETE:
            return {
                ...state,
                isSubmitting: false,
                isSubmitSuccess: true,
                isServerError: false,
                serverMessage: action.message || ''
            };
        case RESET_STATUS:
            return {
                ...state,
                isServerError: false,
                isLoading: false,
                isSubmitting: false,
                isSubmitSuccess: false,
                serverStatus: '',
                serverMessage: '',
                sendForm: ''
            };
        default:
            return state;
    }
}