import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivaEnlaceDirective } from './directiva-enlace.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivaEnlaceDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
