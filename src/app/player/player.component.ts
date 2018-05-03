import { Component, OnInit } from '@angular/core';
import { Player } from '../class/player';
import { PlayerService } from '../service/player.service';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

    player: Player;

    constructor(private playerService: PlayerService) {

        this.playerService.playerObservable.subscribe(player => {
            this.player = player;
        });

        // name, attack, defense, currentLife, maxLife, lightside, darkside, level, exp, gold
        this.playerService.setPlayer(new Player("Hero", 1, 1, 5, 5, 0, 0, 1, 0, 0));
    }

    ngOnInit() {
    }

}
