import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { ChoiceService } from './service/choice.service';
import { GameEventService } from './service/game-event.service';
import { StoryComponent } from './story/story.component';
import { PlayerService } from './service/player.service';




@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
      GameEventService,
      ChoiceService,
      PlayerService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
