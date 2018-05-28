import { Player } from "./player";

export class Result {
    private text: string;
    private callback: (player: Player, ...others: any[]) => void;
    private ending: string;


    constructor($text: string, $callback: (player: Player, ...others: any[]) => void, $ending?: string) {
        this.text = $text;
        this.callback = $callback;
        this.ending = $ending;
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


    public get $callback(): (player: Player, ...others: any[]) => void {
        return this.callback;
    }

    public set $callback(value: (player: Player, ...others: any[]) => void) {
        this.callback = value;
    }


    /**
     * Getter $ending
     * @return {string}
     */
    public get $ending(): string {
        return this.ending;
    }

    /**
     * Setter $ending
     * @param {string} value
     */
    public set $ending(value: string) {
        this.ending = value;
    }


}