import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyCoolComponent } from './my-component/my-component';
import { NealComp } from './Neal-Component/neal-component';
import { TheSecondComponentComponent } from './the-second-component/the-second-component.component';

@NgModule({
  declarations: [AppComponent, MyCoolComponent, NealComp, TheSecondComponentComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
