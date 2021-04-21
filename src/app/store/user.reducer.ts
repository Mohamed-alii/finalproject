import { ADD_TO_FAV, CLEAR_FAV, CLEAR_USER, GET_USER, ISLOGIN } from './user.action';

const initialState = {
    user: {},
    login: false,
    fav: [],

};
export function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER: {
            return {
                ...state,
                user: { ...action.payload },
            };
        }
        case CLEAR_USER: {
            return {
                ...state,
                user: {},
            };
        }
            
        case ADD_TO_FAV: {
            return {
                ...state,
                fav: [...action.payload]
            };
        }
            
        case ISLOGIN: {
            return {
                ...state,
                login: action.payload
            }
        }
        case CLEAR_FAV: {
            return {
                ...state,
                fav: []
            }
        }
            
        default:
            return {
                ...state,
            };
    }
}
