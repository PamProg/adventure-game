import { Choice } from "../../class/choice";
import { ChoiceType } from "../../class/choice-type";
import { Result } from "../../class/result";
import { Player } from "../../class/player";
import { MOB_WOLF } from "../../entity/list-mob";
import { Mob } from "../../class/mob";
import { GameplayService } from "../../service/gameplay.service";

const ENDING_HELLO_WORLD = "Parfois, le résultat de votre dernier choix sera annoncé ici";
const ENDING_FIGHTING = "Vous avez combattu le monstre";

export const CHOICE_HELLO_WORLD_FIRST: Choice = new Choice("chw1", ChoiceType.Simple, [
    new Result("Premier choix", ( p => p.$currentLife += 1), ENDING_HELLO_WORLD),
    new Result("Second choix", ( p => p.$currentLife += 2), ENDING_HELLO_WORLD),
    new Result("Troisième choix", ( p => p.$currentLife += 3), ENDING_HELLO_WORLD),
    new Result("De toute façon ça ne change rien =)", (p => null), ENDING_HELLO_WORLD),
    new Result("...à moins que...", ( p => p.$darkside += 1), ENDING_HELLO_WORLD),
    new Result("Vous verrez bien ;)", ( p => p.$lightside += 1), ENDING_HELLO_WORLD)
]);

export const CHOICE_HELLO_WORLD_SECOND: Choice = new Choice("chw2", ChoiceType.Simple, [
    new Result("Guerrier", ( p => p.$attack += 1), "Bastoooon !!"),
    new Result("Archer", ( p => p.$gold += 10), "Bon c'est pas indiqué dans les caractéristiques, mais t'as un arc ;)"),
    new Result("Mage", ( p => p.$exp += 1), "Unlimited Poweeeer !!!"),
]);


// Common choices :

// Against Monsters/Mobs

export const CHOICE_COMMON_MOB_FIRST: Choice = new Choice("ccm1", ChoiceType.Fight, [
        new Result("Combattre !", ( (p, m: Mob) => {
            GameplayService.fight(p, m);
        }), ENDING_FIGHTING),
        new Result("Fuir !", ( p => p.$lightside += 1)),
        new Result("Observer !", ( p => p.$exp += 1))
    ]);
    
    export const CHOICE_COMMON_MOB_SECOND: Choice = new Choice("ccm2", ChoiceType.Fight, [
        new Result("Combattre !", ( p => {
            // TODO : combattre le monstre
        }), ENDING_FIGHTING),
        new Result("Se cacher", ( p => p.$lightside += 1)),
        new Result("Lui envoyer un objet", (null))
    ]);


    // Against Traps
    // export const CHOICE_COMMON_TRAP_FIRST: Choice = new Choice("cct1", ChoiceType.Simple, [
    //     "Tenter de le désamorcer",
    //     "Envoyer un objet dessus",
    //     "Passer dessus"
    // ]);


    // In a Place/Location/Building
    // export const CHOICE_COMMON_PLACE_FIRST: Choice = new Choice("ccp1", ChoiceType.Simple, [
    //     "Aller à la taverne",
    //     "Aller chez l'armurier",
    //     "Aller chez le forgeron"
    // ]);

    // export const CHOICE_COMMON_PLACE_SECOND: Choice = new Choice("ccp2", ChoiceType.Simple, [
    //     "Aller à la taverne",
    //     "Aller sur la place principale",
    //     "Aller chez un marchand"
    // ]);

    
    // I dont know yet ?

