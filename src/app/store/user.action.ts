import { Action } from '@ngrx/store';

export const GET_USER = 'GET_USER';
export const CLEAR_USER = 'CLEAR_USER';
export const ISLOGIN = 'ISLOGIN';
export const ADD_TO_FAV = 'ADD_TO_FAV';
export const CLEAR_FAV = 'CLEAR_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';



export class GetUser implements Action {
    readonly type = 'GET_USER'
    constructor(public payload: {}) { }
}
export class ClearUser implements Action {
    readonly type = 'CLEAR_USER'
    constructor() { }
}
export class isLogin implements Action {
    readonly type = 'ISLOGIN'
    constructor(public payload) { }
}
export class AddToFav implements Action {
    readonly type = 'ADD_TO_FAV'
    constructor(public payload: {}[]) { }
}
export class ClearFav implements Action {
    readonly type = 'CLEAR_FAV'
    constructor() { }
}
export class RemoveFav implements Action {
    readonly type = 'REMOVE_FAV'
    constructor(public payload: {}) { }
}