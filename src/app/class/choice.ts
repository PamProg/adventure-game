import { ChoiceType } from "./choice-type";
import { Result } from "./result";

export class Choice {

    private name: string;

    private type: ChoiceType;

    private results: Result[];


    constructor($name: string, $type: ChoiceType, $results: Result[]) {
        this.name = $name;
        this.type = $type;
        this.results = $results;
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
     * Getter $results
     * @return {string}
     */
    public get $results(): Result[] {
        return this.results;
    }

    /**
     * Setter $results
     * @param {Result} value
     */
    public set $results(value: Result[]) {
        this.results = value;
    }

}