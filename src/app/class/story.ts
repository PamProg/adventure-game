import { Choice } from "./choice";
import { GameEvent } from "./game-event";

export class Story {
    private event: GameEvent;
    private choice: Choice;

    constructor($event: GameEvent, $choice: Choice) {
        this.event = $event;
        this.choice = $choice;
    }

    /**
     * Getter $event
     * @return {GameEvent}
     */
    public get $event(): GameEvent {
        return this.event;
    }

    /**
     * Setter $event
     * @param {GameEvent} value
     */
    public set $event(value: GameEvent) {
        this.event = value;
    }


    /**
     * Getter $choice
     * @return {Choice}
     */
    public get $choice(): Choice {
        return this.choice;
    }

    /**
     * Setter $choice
     * @param {Choice} value
     */
    public set $choice(value: Choice) {
        this.choice = value;
    }

}