import {
    FETCH_COMPLETE,
    FETCH_PENDING,
    SERVER_ERROR,
    SUBMIT_COMPLETE,
    SUBMIT_PENDING,
    RESET_STATUS
} from '../reducers/ajaxStatusReducer';
import {
    PROFILE_FETCH_DETAILS
} from '../reducers/storeReducer';
import axios from 'axios';

export function fetchProfileDetails(id) {
    return async (dispatch, getState) => {
        dispatch({
            type: FETCH_PENDING
        });
        try {
            const response = await axios({
                url: `https://jsonplaceholder.typicode.com/todos`,
                method: 'get'
            });

            const data = {
                id: 1,
                name: 'Gongcha',
                address: '45 Ho Tung Mau',
                city: "HCM",
                district: 'District 2',
                image: { key: 'sofa_cat', format: 'jpg'},
                phone: '1234568888',
                redInvoice: {
                    name: 'Alley',
                    address: '67 Le Loi',
                    district: 'District 1',
                    city: 'HCM',
                    taxCode: 'P12351566'
                }
            };

            dispatch({
                type: PROFILE_FETCH_DETAILS,
                details: data
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


export function updateStoreProfile(data) {
    return async (dispatch, getState) => {
        dispatch({
            type: SUBMIT_PENDING
        });
        try {
            const submitData = {
                name: data.name,
                address: data.address,
                city: data.city,
                district: data.district,
                image: data.image,
                phone: data.phone,
                redInvoice: {
                    name: data.companyName,
                    address: data.companyAddress,
                    district: data.companyDistrict,
                    city: data.companyCity,
                    taxCode: data.taxCode
                }
            };

            const response = await axios({
                url: `https://jsonplaceholder.typicode.com/posts/1`,
                method: 'put',
                data: submitData
            });

            dispatch({
                type: PROFILE_FETCH_DETAILS,
                details: submitData
            });

            dispatch({
                type: SUBMIT_COMPLETE
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

export function resetAjaxStatus() {
    return (dispatch) => {
        dispatch({
            type: RESET_STATUS
        })
    }
}