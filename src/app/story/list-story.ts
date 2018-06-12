import { EVENT_HELLO_WORLD_FIRST, EVENT_HELLO_WORLD_SECOND, EVENT_HELLO_WORLD_THIRD, EVENT_HELLO_WORLD_FOURTH,
     EVENT_HELLO_WORLD_FIFTH } from './event/list-event';
import { Story } from "../class/story";
import { CHOICE_HELLO_WORLD_FIRST, CHOICE_HELLO_WORLD_SECOND, CHOICE_HELLO_WORLD_THIRD, CHOICE_HELLO_WORLD_FOURTH, 
    CHOICE_HELLO_WORLD_FIFTH } from './choice/list-choice';
import { GameEvent } from '../class/game-event';
import { GameEventType } from '../class/game-event-type';
import { Choice } from '../class/choice';
import { ChoiceType } from '../class/choice-type';
import { Result } from '../class/result';


export const STORY_HELLO_WORLD: Story[] = [
    new Story(EVENT_HELLO_WORLD_FIRST, CHOICE_HELLO_WORLD_FIRST),
    new Story(EVENT_HELLO_WORLD_SECOND, CHOICE_HELLO_WORLD_SECOND),
    new Story(EVENT_HELLO_WORLD_THIRD, CHOICE_HELLO_WORLD_THIRD),
    new Story(EVENT_HELLO_WORLD_FOURTH, CHOICE_HELLO_WORLD_FOURTH),
    new Story(EVENT_HELLO_WORLD_FIFTH, CHOICE_HELLO_WORLD_FIFTH)
];


// Quest Stories :

const EVENT_QUEST_FARMER_FIRST: GameEvent = new GameEvent("eq - The Farmer and his lost cow - 1", GameEventType.Quest, 
        "Vous arrivez devant un fermier. Que faites-vous ?");

const CHOICE_QUEST_FARMER_SECOND: Choice = new Choice("cq - The Farmer and his lost cow - 1", ChoiceType.Quest, [
    new Result("Aller lui parler", (p => p.$exp += 1), "Il s'agit d'un fermier, tout ce qu'il y a de plus banal."),
    new Result("Le tuer", p => {p.$exp += 1; p.$gold += 20; p.$darkside += 3; }, "Vous tuez le fermer. Était-ce la bonne décision ?"),
    new Result("Vous vous en allez", null, "Vous faites demi-tour, peut-être reverrez-vous ce fermier un jour")
]);

export const STORY_QUEST_FARMER_FIRST: Story = new Story(EVENT_QUEST_FARMER_FIRST, CHOICE_QUEST_FARMER_SECOND);



// export const CHOICE_HELLO_WORLD_FIFTH: Choice = new Choice("chw5", ChoiceType.Simple, [
//     new Result("Guerrier", (p => p.$attack += 1), "Bastoooon !!"),
//     new Result("Archer", (p => p.$gold += 10), "Tiens, voilà un arc ;)"),
//     new Result("Mage", (p => p.$exp += 1), "Unlimited Poweeeer !!!"),
// ]);