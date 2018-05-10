import { Choice } from "../../class/choice";
import { ChoiceType } from "../../class/choice-type";
import { Result } from "../../class/result";
import { Player } from "../../class/player";
import { MOB_WOLF } from "../../entity/list-mob";
import { Mob } from "../../class/mob";
import { GameplayService } from "../../service/gameplay.service";

const ENDING_HELLO_WORLD_FIRST = "Parfois, un commentaire ou le résultat de votre dernier choix sera annoncé ici.";
export const CHOICE_HELLO_WORLD_FIRST: Choice = new Choice("chw1", ChoiceType.Simple, [
    new Result("Premier choix", ( p => p.$currentLife += 1), ENDING_HELLO_WORLD_FIRST),
    new Result("Second choix", ( p => p.$currentLife += 2), ENDING_HELLO_WORLD_FIRST),
    new Result("Troisième choix", ( p => p.$currentLife += 3), ENDING_HELLO_WORLD_FIRST),
    new Result("De toute façon ça ne change rien =)", (p => p.$exp += 1), ENDING_HELLO_WORLD_FIRST),
    new Result("...à moins que...", ( p => p.$darkside += 1), ENDING_HELLO_WORLD_FIRST),
    new Result("Vous verrez bien ;)", ( p => p.$lightside += 1), ENDING_HELLO_WORLD_FIRST)
]);

const ENDING_HELLO_WORLD_SECOND = "Parfois également, vos choix impacteront votre personnage, et donc ses caractéristiques !";
export const CHOICE_HELLO_WORLD_SECOND: Choice = new Choice("chw2", ChoiceType.Simple, [
    new Result("En effet !", ( p => p.$lightside += 1), ENDING_HELLO_WORLD_SECOND),
    new Result("C'est indéniable", ( p => p.$exp += 1), ENDING_HELLO_WORLD_SECOND),
    new Result("Oui, et alors ?", ( p => p.$darkside += 1), ENDING_HELLO_WORLD_SECOND),
]);

const ENDING_HELLO_WORLD_THIRD = "Vous aurez d'ailleurs peut-être remarqué que certaines caractéristiques ont déjà changé !";
export const CHOICE_HELLO_WORLD_THIRD: Choice = new Choice("chw3", ChoiceType.Simple, [
    new Result("Vraiment ?", ( p => p.$lightside += 1), ENDING_HELLO_WORLD_THIRD),
    new Result("Très bien !", ( p => p.$exp += 1), ENDING_HELLO_WORLD_THIRD),
    new Result("Oui, et alors ?", ( p => p.$darkside += 1), ENDING_HELLO_WORLD_THIRD),
]);

const ENDING_HELLO_WORLD_FOURTH = "Bon courage ! =)";
export const CHOICE_HELLO_WORLD_FOURTH: Choice = new Choice("chw4", ChoiceType.Simple, [
    new Result("Je ferai de mon mieux !", ( p => p.$lightside += 1), ENDING_HELLO_WORLD_FOURTH),
    new Result("Bien compris !", ( p => p.$exp += 1), ENDING_HELLO_WORLD_FOURTH),
    new Result("Oh oui !", ( p => p.$darkside += 1), ENDING_HELLO_WORLD_FOURTH),
]);

export const CHOICE_HELLO_WORLD_FIFTH: Choice = new Choice("chw5", ChoiceType.Simple, [
    new Result("Guerrier", ( p => p.$attack += 1), "Bastoooon !!"),
    new Result("Archer", ( p => p.$gold += 10), "Tiens, voilà un arc ;)"),
    new Result("Mage", ( p => p.$exp += 1), "Unlimited Poweeeer !!!"),
]);


// Common choices :

// Against Monsters/Mobs

const ENDING_FIGHT = "Vous avez combattu le monstre";

export const CHOICE_COMMON_MOB_FIRST: Choice = new Choice("ccm1", ChoiceType.Fight, [
        new Result("Combattre !", ( (p, m: Mob) => {
            GameplayService.fight(p, m);
        }), ENDING_FIGHT),
        new Result("Fuir !", ( p => p.$lightside += 1)),
        new Result("Observer !", ( p => p.$exp += 1))
    ]);
    
    export const CHOICE_COMMON_MOB_SECOND: Choice = new Choice("ccm2", ChoiceType.Fight, [
        new Result("Combattre !", ( p => {
            // TODO : combattre le monstre
        }), ENDING_FIGHT),
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

