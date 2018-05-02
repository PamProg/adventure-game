import { Component, OnInit } from '@angular/core';
import { GameEvent } from '../class/game-event';
import { Choice } from '../class/choice';
import { EVENT_HELLO_WORLD_FIRST } from './event/list-event';
import { CHOICE_HELLO_WORLD_FIRST } from './choice/list-choice';
import { Story } from '../class/story';

@Component({
    selector: 'app-story',
    templateUrl: './story.component.html',
    styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

    stories: Story[];

    currentStory: Story;

    constructor() {
        this.stories = [];
    }

    ngOnInit() {
        this.stories.push(new Story(EVENT_HELLO_WORLD_FIRST, CHOICE_HELLO_WORLD_FIRST));
        this.currentStory = this.stories.shift();
    }

}
