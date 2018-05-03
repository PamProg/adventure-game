import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Player } from '../class/player';

@Injectable()
export class PlayerService {

    private player: Player;
    private playerSubject = new Subject<Player>();
    public playerObservable = this.playerSubject.asObservable();

    constructor() {

    }

    getPlayer() {
        return this.player;
    }

    setPlayer(value: Player) {
        this.player = value;
        this.playerSubject.next(value);
    }

}
