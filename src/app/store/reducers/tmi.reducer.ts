import { TmiActions, TmiActionTypes } from '../actions/tmi.actions';

export interface TmiState {
    currentUsername: string;
    isConnecting: boolean;
    isConnected: boolean;
    connectionError: string;
    connectedChannels: string[];
}

export const tmiInitialState: TmiState = {
    currentUsername: undefined,
    isConnecting: false,
    isConnected: false,
    connectionError: undefined,
    connectedChannels: [],
}

export function tmiReducer(
    state = tmiInitialState,
    action: TmiActions
) {switch (action.type) {
    case TmiActionTypes.TmiConnect:
      return {
          ...tmiInitialState,
          isConnecting: true
      };
    case TmiActionTypes.TmiConnectSuccess:
      return {
          ...tmiInitialState,
          currentUsername: action.payload,
          isConnected: true,
      };
    case TmiActionTypes.TmiConnectFailure:
      return {
          ...tmiInitialState,
          connectionError: action.payload
      };
    case TmiActionTypes.TmiJoinChannelSuccess:
      return {
          ...state,
          connectedChannels: [...state.connectedChannels, action.payload]
      }
    default:
      return state;
}}