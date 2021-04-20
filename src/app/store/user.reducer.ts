import { CLEAR_USER, GET_USER } from './user.action';

const initialState = {
    user: {},
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
                user: { },
            };
        }
            
        default:
            return {
                ...state,
            };
    }
}
