import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UtilsModule } from './utils/utils.module';

//Components
import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bugTracker.component';


//Pipes
import { ClosedCountPipe } from './bug-tracker/pipes/closedCount.pipe';

//Services
import { BugOperationsService } from './bug-tracker/services/BugOperations.service';
import { BugStorageService } from './bug-tracker/services/BugStorage.service';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    ClosedCountPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UtilsModule
  ],
  providers: [
    BugOperationsService,
    BugStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
