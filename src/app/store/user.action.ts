import { Action } from '@ngrx/store';

export const GET_USER = 'GET_USER';
export const CLEAR_USER = 'CLEAR_USER';

export class GetUser implements Action {
    readonly type = 'GET_USER'
    constructor(public payload: {}) { }
}
export class ClearUser implements Action {
    readonly type = 'CLEAR_USER'
    constructor() { }
}