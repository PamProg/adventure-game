import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoryComponent } from './story/story.component';
import { EventComponent } from './story/event/event.component';
import { ChoiceComponent } from './story/choice/choice.component';


@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    EventComponent,
    ChoiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
