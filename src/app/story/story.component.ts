import { Component, OnInit } from '@angular/core';
import { GameEvent } from '../class/game-event';
import { Choice } from '../class/choice';
import { EVENT_HELLO_WORLD_FIRST, EVENT_HELLO_WORLD_SECOND } from './event/list-event';
import { CHOICE_HELLO_WORLD_FIRST, CHOICE_HELLO_WORLD_SECOND } from './choice/list-choice';
import { Story } from '../class/story';
import { Player } from '../class/player';
import { PlayerService } from '../service/player.service';

@Component({
    selector: 'app-story',
    templateUrl: './story.component.html',
    styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

    stories: Story[];

    currentStory: Story;

    player: Player;

    constructor(private playerService: PlayerService) {

        this.player = this.playerService.getPlayer();
        this.playerService.playerObservable.subscribe(player => {
            this.player = player;
        });

        this.stories = [];
    }

    ngOnInit() {
        this.stories.push(new Story(EVENT_HELLO_WORLD_FIRST, CHOICE_HELLO_WORLD_FIRST));
        this.stories.push(new Story(EVENT_HELLO_WORLD_SECOND, CHOICE_HELLO_WORLD_SECOND));
        this.currentStory = this.stories.shift();
    }


    nextStory(i: number) {

        this.currentStory.$choice.$options[i].$callback(this.player);
        this.playerService.setPlayer(this.player);

        if (this.stories.length > 0) {
            this.currentStory = this.stories.shift();
        }


    }

}
