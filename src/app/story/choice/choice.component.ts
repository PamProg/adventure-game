import { Component, OnInit, Input } from '@angular/core';
import { Choice } from '../../class/choice';

@Component({
    selector: 'app-choice',
    templateUrl: './choice.component.html',
    styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {

    @Input() choice: Choice;

    constructor() {

    }

    ngOnInit() {
    }

}
