import { Component, OnInit, Input } from '@angular/core';
import { GameEvent } from '../../class/game-event';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

    @Input() event: GameEvent;

    constructor() {

    }

    ngOnInit() {
    }

}
