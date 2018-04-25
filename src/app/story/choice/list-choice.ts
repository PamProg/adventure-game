import { Choice } from "../../class/choice";
import { ChoiceType } from "../../class/choice-type";



export const CHOICE_UN: Choice = new Choice("test choix", ChoiceType.Simple, [
    "Ca va ?",
    "Comment vas-tu ?",
    "Hello !"
]);