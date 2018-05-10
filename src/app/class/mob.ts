
export class Mob {
    private name: string;

    private attack: number;
    private defense: number;

    private currentLife: number;
    private maxLife: number;

    // Rewards
    private exp: number;
    private gold: number;
    private lightside: number;
    private darkside: number;


    constructor($name: string, $attack: number, $defense: number, $currentLife: number, $maxLife: number, $exp?: number, 
        $gold?: number, $lightside?: number, $darkside?: number) {
        this.name = $name;
        this.attack = $attack;
        this.defense = $defense;
        this.currentLife = $currentLife;
        this.maxLife = $maxLife;

        this.exp = $exp;
        this.gold = $gold;
        this.lightside = $lightside;
        this.darkside = $darkside;
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
     * Getter $attack
     * @return {number}
     */
    public get $attack(): number {
        return this.attack;
    }

    /**
     * Setter $attack
     * @param {number} value
     */
    public set $attack(value: number) {
        this.attack = value;
    }

    /**
     * Getter $defense
     * @return {number}
     */
    public get $defense(): number {
        return this.defense;
    }

    /**
     * Setter $defense
     * @param {number} value
     */
    public set $defense(value: number) {
        this.defense = value;
    }

    /**
     * Getter $currentLife
     * @return {number}
     */
    public get $currentLife(): number {
        return this.currentLife;
    }

    /**
     * Setter $currentLife
     * @param {number} value
     */
    public set $currentLife(value: number) {
        this.currentLife = value;
    }

    /**
     * Getter $maxLife
     * @return {number}
     */
    public get $maxLife(): number {
        return this.maxLife;
    }

    /**
     * Setter $maxLife
     * @param {number} value
     */
    public set $maxLife(value: number) {
        this.maxLife = value;
    }


    /**
     * Getter $exp
     * @return {number}
     */
    public get $exp(): number {
        return this.exp;
    }

    /**
     * Setter $exp
     * @param {number} value
     */
    public set $exp(value: number) {
        this.exp = value;
    }

    /**
     * Getter $gold
     * @return {number}
     */
    public get $gold(): number {
        return this.gold;
    }

    /**
     * Setter $gold
     * @param {number} value
     */
    public set $gold(value: number) {
        this.gold = value;
    }

    /**
     * Getter $lightside
     * @return {number}
     */
    public get $lightside(): number {
        return this.lightside;
    }

    /**
     * Setter $lightside
     * @param {number} value
     */
    public set $lightside(value: number) {
        this.lightside = value;
    }

    /**
     * Getter $darkside
     * @return {number}
     */
    public get $darkside(): number {
        return this.darkside;
    }

    /**
     * Setter $darkside
     * @param {number} value
     */
    public set $darkside(value: number) {
        this.darkside = value;
    }


}