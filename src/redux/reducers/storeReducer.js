export const PROFILE_FETCH_DETAILS = 'aspire/loan/fetchDetails';

const initialState = {
    profile: {
        image: {},
        redInvoice: {}
    }
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case PROFILE_FETCH_DETAILS: {
            return {
                ...state,
                profile: action.details
            };
        }
        default:
            return state;
    }
}