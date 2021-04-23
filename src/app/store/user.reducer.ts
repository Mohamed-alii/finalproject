import { ADD_TO_FAV, CLEAR_FAV, CLEAR_USER, GET_USER, ISLOGIN, REMOVE_FAV } from './user.action';

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
                fav: [
                    ...action.payload
                ]
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
        case REMOVE_FAV: {
            return {
                ...state,
                fav: [
                    ...state.fav.filter(item => item.id != action.payload.id )
                ]
            }
        }
            
            
        default:
            return {
                ...state,
            };
    }
}
