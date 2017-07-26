import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Components
import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bugTracker.component';


//Pipes
import { TrimTextPipe } from './bug-tracker/pipes/trimText.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    TrimTextPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
