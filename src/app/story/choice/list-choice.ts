import { Choice } from "../../class/choice";
import { ChoiceType } from "../../class/choice-type";
import { Result } from "../../class/result";
import { Player } from "../../class/player";



export const CHOICE_HELLO_WORLD_FIRST: Choice = new Choice("chw1", ChoiceType.Simple, [
    new Result("Premier choix", ( p => p.$currentLife += 1)),
    new Result("Second choix", ( p => p.$currentLife += 2)),
    new Result("Troisième choix", ( p => p.$currentLife += 3)),
    new Result("De toute façon ça ne change rien =)", (p => null)),
    new Result("...à moins que...", ( p => p.$darkside += 1)),
    new Result("Vous verrez bien ;)", ( p => p.$lightside += 1))
]);

export const CHOICE_HELLO_WORLD_SECOND: Choice = new Choice("chw2", ChoiceType.Simple, [
    new Result("Guerrier", ( p => p.$attack += 1)),
    new Result("Archer", ( p => p.$gold += 10)),
    new Result("Mage", ( p => p.$exp += 1)),
]);


// Common choices :

// Against Monsters/Mobs

export const CHOICE_COMMON_MOB_FIRST: Choice = new Choice("ccm1", ChoiceType.Simple, [
        new Result("Combattre !", ( p => {
            // TODO : combattre le monstre
        })),
        new Result("Fuir !", ( p => p.$lightside += 1)),
        new Result("Observer !", ( p => p.$exp += 1))
    ]);
    
    export const CHOICE_COMMON_MOB_SECOND: Choice = new Choice("ccm2", ChoiceType.Simple, [
        new Result("Combattre !", ( p => {
            // TODO : combattre le monstre
        })),
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

