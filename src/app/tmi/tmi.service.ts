import { Injectable } from '@angular/core';
import { TmiIdentity } from './domain/tmi-identity';
import { Client, client } from 'tmi.js';
import { Observable, Subject, from } from 'rxjs';

@Injectable()
export class TmiService {

    private _client: Client;

    private _connected$: Subject<boolean> = new Subject<boolean>();

    constructor() {
    }

    public ircLogin(identity: TmiIdentity): Observable<[string, number]> {
        this._client = client({identity});
        this._client.on('connected', () => this._connected$.next(true));
        return from(this._client.connect());
    }

    public joinChannel(channel: string): Observable<string[]> {
        return from(this._client.join(channel));
    }
}