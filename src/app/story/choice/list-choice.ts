import { Choice } from "../../class/choice";
import { ChoiceType } from "../../class/choice-type";



export const CHOICE_HELLO_WORLD_FIRST: Choice = new Choice("chw1", ChoiceType.Simple, [
    "Premier choix",
    "Second choix",
    "Troisième choix",
    "De toute façon ça ne change rien =)",
    "...à moins que...",
    "Vous verrez bien ;)"
]);

export const CHOICE_HELLO_WORLD_SECOND: Choice = new Choice("chw2", ChoiceType.Simple, [
    "Guerrier",
    "Archer",
    "Mage"
]);


// Common choices :

    // Against Monsters/Mobs

    export const CHOICE_COMMON_MOB_FIRST: Choice = new Choice("ccm1", ChoiceType.Simple, [
        "Combattre !",
        "Fuir",
        "Observer"
    ]);

    export const CHOICE_COMMON_MOB_SECOND: Choice = new Choice("ccm2", ChoiceType.Simple, [
        "Combattre !",
        "Se cacher",
        "Lui envoyer un objet"
    ]);


    // Against Traps
    export const CHOICE_COMMON_TRAP_FIRST: Choice = new Choice("cct1", ChoiceType.Simple, [
        "Tenter de le désamorcer",
        "Envoyer un objet dessus",
        "Passer dessus"
    ]);


    // In a Place/Location/Building
    export const CHOICE_COMMON_PLACE_FIRST: Choice = new Choice("ccp1", ChoiceType.Simple, [
        "Aller à la taverne",
        "Aller chez l'armurier",
        "Aller chez le forgeron"
    ]);

    export const CHOICE_COMMON_PLACE_SECOND: Choice = new Choice("ccp2", ChoiceType.Simple, [
        "Aller à la taverne",
        "Aller sur la place principale",
        "Aller chez un marchand"
    ]);

    
    // I dont know yet ?

