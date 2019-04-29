import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { flatMap, map, catchError } from "rxjs/operators";
import { TmiService } from '../tmi.service';
import { TmiActionTypes, TmiConnect, TmiConnectSuccess, TmiConnectFailure, TmiJoinChannel, TmiJoinChannelSuccess, TmiJoinChannelFailure } from 'src/app/store/actions/tmi.actions';
import { of } from 'rxjs';

@Injectable()
export class TmiConnectionEffects {

  constructor(
    private _actions$: Actions,
    private tmiService: TmiService
  ) {}

  @Effect()
  connectToTmi$ = this._actions$
  .pipe(
    ofType<TmiConnect>(TmiActionTypes.TmiConnect),
    flatMap(tmiConnect => this.tmiService.ircLogin(tmiConnect.payload)
      .pipe(
        map(() => new TmiConnectSuccess(tmiConnect.payload.username)),
        catchError((err) => of(new TmiConnectFailure(err)))
      )
    )
  )

  @Effect()
  joinChannel$ = this._actions$
  .pipe(
    ofType<TmiJoinChannel>(TmiActionTypes.TmiJoinChannel),
    flatMap(joinChannel => this.tmiService.joinChannel(joinChannel.payload)
      .pipe(
        map(([channel]) => new TmiJoinChannelSuccess(channel)),
        catchError((err) => of(new TmiJoinChannelFailure(err)))
      )
    )
  )
}
