import { GameEventType } from "./game-event-type";

export class GameEvent {

    private name: string;

    private type: GameEventType;
    private text: string;

    private others: any[];


    constructor($name: string, $type: GameEventType, $text: string, ...$others: any[]) {
        this.name = $name;
        this.type = $type;
        this.text = $text;
        this.others = $others;
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

    /**
     * Getter $others
     * @return {any[]}
     */
    public get $others(): any[] {
        return this.others;
    }

    /**
     * Setter $others
     * @param {any[]} value
     */
    public set $others(value: any[]) {
        this.others = value;
    }

}