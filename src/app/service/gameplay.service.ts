import { Injectable } from '@angular/core';
import { Player } from '../class/player';
import { Mob } from '../class/mob';

@Injectable()
export class GameplayService {

    constructor() {

    }

    // TODO : ajouter de l'exp/gold/conséquence de quête à la fin du combat
    static fight(player: Player, mob: Mob) {

        // If he can't beat the mob => Game Over (for now...)
        if (player.$attack < mob.$defense) {
            player.$currentLife = 0;
        } else {
            while ( (mob.$currentLife > 0 && player.$currentLife > 0) || (mob.$currentLife > 0 && player.$currentLife < 0) ) {
                mob.$currentLife -= (player.$attack - mob.$defense);
                player.$currentLife -= (mob.$attack - player.$defense);
            }
        }
    }

}
