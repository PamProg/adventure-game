import { GameEventType } from "./game-event-type";

export class GameEvent {

    private name: string;

    private type: GameEventType;
    private text: string;


    constructor($name: string, $type: GameEventType, $text: string) {
        this.name = $name;
        this.type = $type;
        this.text = $text;
    }



    /**
     * Getter $name
     * @return {string}
     */
    public get $name(): string {
        return this.name;
    }

    /**
     * Setter $name
     * @param {string} value
     */
    public set $name(value: string) {
        this.name = value;
    }


    /**
     * Getter $type
     * @return {GameEventType}
     */
    public get $type(): GameEventType {
        return this.type;
    }

    /**
     * Setter $type
     * @param {GameEventType} value
     */
    public set $type(value: GameEventType) {
        this.type = value;
    }

    /**
     * Getter $text
     * @return {string}
     */
    public get $text(): string {
        return this.text;
    }

    /**
     * Setter $text
     * @param {string} value
     */
    public set $text(value: string) {
        this.text = value;
    }

}