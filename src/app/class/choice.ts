import { ChoiceType } from "./choice-type";

export class Choice {

    private name: string;

    private type: ChoiceType;
    private options: string[];


    constructor($name: string, $type: ChoiceType, $options: string[]) {
        this.name = $name;
        this.type = $type;
        this.options = $options;
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
     * @return {ChoiceType}
     */
    public get $type(): ChoiceType {
        return this.type;
    }

    /**
     * Setter $type
     * @param {ChoiceType} value
     */
    public set $type(value: ChoiceType) {
        this.type = value;
    }

    /**
     * Getter $options
     * @return {string}
     */
    public get $options(): string[] {
        return this.options;
    }

    /**
     * Setter $options
     * @param {string} value
     */
    public set $options(value: string[]) {
        this.options = value;
    }

}