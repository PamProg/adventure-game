import { Component, OnInit } from '@angular/core';
import { Player } from '../class/player';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

    player: Player;

    constructor() {
        // name, attack, defense, currentLife, maxLife, lightside, darkside, level, exp, gold
        this.player = new Player("Hero", 1, 1, 5, 5, 0, 0, 1, 0, 0);
    }

    ngOnInit() {
    }

}
