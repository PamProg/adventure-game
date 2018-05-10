import { GameEvent } from "../../class/game-event";
import { GameEventType } from "../../class/game-event-type";
import { MOB_WOLF, MOB_CRAB } from "../../entity/list-mob";


export const EVENT_HELLO_WORLD_FIRST: GameEvent = new GameEvent("ehw1", GameEventType.Simple, 
    "Bienvenue dans ce jeu d'Aventure. Pour continuer, cliquez sur un des choix proposés.");
export const EVENT_HELLO_WORLD_SECOND: GameEvent = new GameEvent("ehw2", GameEventType.Simple, 
    "Vous avez effectué votre première étape dans ce monde. Continuons de l'observer ensemble : " +
    "vous pouvez voir que vos caractéristiques sont affichées sur votre gauche.");
export const EVENT_HELLO_WORLD_THIRD: GameEvent = new GameEvent("ehw3", GameEventType.Simple, 
    "Cependant, certaines caractéristiques vous sont cachées, notamment celles qui jaugent votre alignement !");
export const EVENT_HELLO_WORLD_FOURTH: GameEvent = new GameEvent("ehw4", GameEventType.Simple, 
    "Faites donc attention aux choix que vous allez prendre ! ;)");
export const EVENT_HELLO_WORLD_FIFTH: GameEvent = new GameEvent("ehw5", GameEventType.Simple, 
    "Choisissez maintenant une classe de personnage pour la suite du jeu.");

// Common events :

    // Fighting events

    export const EVENT_COMMON_FIGHT: GameEvent = new GameEvent("ecf1", GameEventType.Fight, 
    `Vous arrivez devant un monstre : ${MOB_CRAB.$name}. Que faites-vous ?`, MOB_CRAB);

export const EVENT_COMMON_FIRST: GameEvent = new GameEvent("ec1", GameEventType.Fight, 
    `Vous arrivez devant un monstre : ${MOB_CRAB.$name}. Que faites-vous ?`, MOB_CRAB);
export const EVENT_COMMON_SECOND: GameEvent = new GameEvent("ec2", GameEventType.Simple, 
    "Vous arrivez devant un piège : **ajouter Piège/Trap**. Que faites-vous ?");
export const EVENT_COMMON_THIRD: GameEvent = new GameEvent("ec3", GameEventType.Simple, 
    "Vous arrivez dans un village. Que faites-vous ?");

