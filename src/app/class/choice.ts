import { ChoiceType } from "./choice-type";
import { Result } from "./result";

export class Choice {

    private name: string;

    private type: ChoiceType;

    private options: Result[];


    constructor($name: string, $type: ChoiceType, $options: Result[]) {
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
    public get $options(): Result[] {
        return this.options;
    }

    /**
     * Setter $options
     * @param {Result} value
     */
    public set $options(value: Result[]) {
        this.options = value;
    }

}