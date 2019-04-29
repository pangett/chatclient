import { Component } from "@angular/core";
import { Store, select } from '@ngrx/store';
import { TmiState } from 'src/app/store/reducers/tmi.reducer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TmiIdentity } from 'src/app/tmi/domain/tmi-identity';
import { TmiConnect } from 'src/app/store/actions/tmi.actions';

@Component({
    templateUrl: "./login.component.html"
})
export class LoginComponent {

    public tmiState$: Observable<TmiState>;
    public channels$: Observable<string[]>;
    public isConnected$: Observable<boolean>;

    public username: string;
    public password: string;

    constructor(private store: Store<{ tmi: TmiState }>) {
        this.tmiState$ = this.store.pipe(select('tmi'));
        this.channels$ = this.tmiState$.pipe(map(state => state.connectedChannels));
        this.isConnected$ = this.tmiState$.pipe(map(state => state.isConnected));
    }

    public login(): void {
        this.store.dispatch(new TmiConnect(new TmiIdentity(this.username, this.password)));
    }

}
