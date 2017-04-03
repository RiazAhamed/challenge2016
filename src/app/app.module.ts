import { NgModule }      from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

// noinspection TypeScriptCheckImport
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

import { AppComponent }  from './app.component';
import { AppService } from './app.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, Ng2AutoCompleteModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ AppService ]
})
export class AppModule { }
