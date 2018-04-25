

export class Player {

    private name: string;

    private attack: number;
    private defense: number;

    private currentLife: number;
    private maxLife: number;

    private lightside: number;
    private darkside: number;

    private level: number;
    private exp: number;


    constructor($name: string, $attack: number, $defense: number, $currentLife: number, $maxLife: number, $lightside: number,
        $darkside: number, $level: number, $exp: number) {
        this.name = $name;
        this.attack = $attack;
        this.defense = $defense;
        this.currentLife = $currentLife;
        this.maxLife = $maxLife;
        this.lightside = $lightside;
        this.darkside = $darkside;
        this.level = $level;
        this.exp = $exp;
    }


}