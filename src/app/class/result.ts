import { Player } from "./player";

export class Result {
    private text: string;
    private callback: (player: Player) => void;


    constructor($text: string, $callback: (player: Player) => void) {
        this.text = $text;
        this.callback = $callback;
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


    public get $callback(): (player: Player) => void {
        return this.callback;
    }

    public set $callback(value: (player: Player) => void) {
        this.callback = value;
    }

}