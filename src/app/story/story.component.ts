import { Component, OnInit } from '@angular/core';
import { GameEvent } from '../class/game-event';
import { Choice } from '../class/choice';
import { EVENT_HELLO_WORLD, EVENT_COMMON_FIGHT } from './event/list-event';
import { CHOICE_HELLO_WORLD, CHOICE_COMMON_MOB_FIRST } from './choice/list-choice';
import { Story } from '../class/story';
import { Player } from '../class/player';
import { PlayerService } from '../service/player.service';
import { GameEventType } from '../class/game-event-type';
import { STORY_HELLO_WORLD, STORY_QUEST_FARMER_FIRST } from './list-story';

@Component({
    selector: 'app-story',
    templateUrl: './story.component.html',
    styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

    stories: Story[];
    player: Player;

    currentStory: Story;
    ending: string;

    constructor(private playerService: PlayerService) {

        this.player = this.playerService.getPlayer();
        this.playerService.playerObservable.subscribe(player => {
            this.player = player;
        });

        this.stories = [];
        this.ending = "";
    }

    ngOnInit() {

        STORY_HELLO_WORLD.forEach(s => this.stories.push(s));

        this.stories.push(STORY_QUEST_FARMER_FIRST);

        this.stories.push(new Story(EVENT_COMMON_FIGHT, CHOICE_COMMON_MOB_FIRST));

        this.currentStory = this.stories.shift();
    }


    nextStory(i: number) {

        if (this.currentStory.$event.$type === GameEventType.Fight) {
            this.currentStory.$choice.$results[i].$callback(this.player, this.currentStory.$event.$others[0]);
        } else {
            this.currentStory.$choice.$results[i].$callback(this.player);
        }

        this.ending = this.currentStory.$choice.$results[i].$ending;

        this.playerService.setPlayer(this.player);

        // Game Over
        if (this.player.$currentLife <= 0) {
            console.log("Game Over");
            // Nothing for now, maybe some zombie mode then ? Like the Wizard Lizard ?
        }

        if (this.stories.length > 0) {
            this.currentStory = this.stories.shift();
        }


    }

}
