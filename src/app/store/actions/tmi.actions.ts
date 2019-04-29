import { Action } from '@ngrx/store';
import { TmiIdentity } from 'src/app/tmi/domain/tmi-identity';

type Username = string;
type Channel = string;
type ErrorString = string;

export enum TmiActionTypes {
    TmiConnect = '[TMI] Connect',
    TmiConnectSuccess = '[TMI] ConnectSuccess',
    TmiConnectFailure = '[TMI] ConnectFailure',

    TmiJoinChannel = '[TMI] JoinChannel',
    TmiJoinChannelSuccess = '[TMI] JoinChannelSuccess',
    TmiJoinChannelFailure = '[TMI] JoinChannelFailure',
}

export class TmiConnect implements Action {
    readonly type = TmiActionTypes.TmiConnect;
    
    constructor(public payload: TmiIdentity) {}
}

export class TmiConnectSuccess implements Action {
    readonly type = TmiActionTypes.TmiConnectSuccess
    constructor(public payload: Username) {}
}

export class TmiConnectFailure implements Action {
    readonly type = TmiActionTypes.TmiConnectFailure
    constructor(public payload: ErrorString) {}
}

export class TmiJoinChannel implements Action {
    readonly type = TmiActionTypes.TmiJoinChannel
    constructor(public payload: Channel) {}
}

export class TmiJoinChannelSuccess implements Action {
    readonly type = TmiActionTypes.TmiJoinChannelSuccess
    constructor(public payload: Channel) {}
}

export class TmiJoinChannelFailure implements Action {
    readonly type = TmiActionTypes.TmiJoinChannelFailure
    constructor(public payload: ErrorString) {}
}

export type TmiActions = TmiConnect 
    | TmiConnectSuccess 
    | TmiConnectFailure
    | TmiJoinChannel
    | TmiJoinChannelSuccess
    | TmiJoinChannelFailure