import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { UtilsModule } from './utils/utils.module';

//Components
import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bugTracker.component';
import { BugEditComponent } from './bug-tracker/bugEdit/bugEdit.component';


//Pipes
import { ClosedCountPipe } from './bug-tracker/pipes/closedCount.pipe';

//Services
import { BugOperationsService } from './bug-tracker/services/BugOperations.service';
import { BugStorageService } from './bug-tracker/services/BugStorage.service';
import { BugServerService } from './bug-tracker/services/BugServer.service';
@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    ClosedCountPipe,
    BugEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UtilsModule,
    HttpModule
  ],
  providers: [
    BugOperationsService,
    BugStorageService,
    BugServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
