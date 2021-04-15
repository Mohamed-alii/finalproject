import { Action } from '@ngrx/store';

export const GET_USER = 'GET_USER';


export class GetUser implements Action {
    readonly type = 'GET_USER'
    constructor(public payload: {}) { }
}