import { Result } from "../../class/result";
import { Mob } from "../../class/mob";
import { GameplayService } from "../../service/gameplay.service";


const ENDING_FIGHT = "Vous avez combattu le monstre";
export const RESULT_FIGHT = new Result("Combattre !", ( (p, m: Mob) => {
    GameplayService.fight(p, m);
}), ENDING_FIGHT);

export const RESULT_FLY = new Result("Fuir !", (p => p.$lightside += 1));

export const RESULT_WATCH = new Result("Observer !", (p => p.$exp += 1));

export const RESULT_HIDE = new Result("Se cacher", (p => p.$lightside += 1));



