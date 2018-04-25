import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoryComponent } from './story/story.component';
import { EventComponent } from './story/event/event.component';
import { ChoiceComponent } from './story/choice/choice.component';
import { PlayerComponent } from './player/player.component';
import { GameEventService } from './service/game-event.service';
import { ChoiceService } from './service/choice.service';


@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    EventComponent,
    ChoiceComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
      GameEventService,
      ChoiceService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
