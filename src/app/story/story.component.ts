import { Component, OnInit } from '@angular/core';
import { GameEvent } from '../class/game-event';
import { Choice } from '../class/choice';
import { EVENT_UN } from './event/list-event';
import { CHOICE_UN } from './choice/list-choice';

@Component({
    selector: 'app-story',
    templateUrl: './story.component.html',
    styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

    events: GameEvent[];
    choices: Choice[];

    event: GameEvent;
    choice: Choice;

    constructor() {

    }

    ngOnInit() {
        this.event = EVENT_UN;
        this.choice = CHOICE_UN;
    }

}
