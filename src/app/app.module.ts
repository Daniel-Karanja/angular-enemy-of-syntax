import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyCoolComponent } from './Intro-To-Angular/my-component/my-component';
import { NealComp as ThisIsNeal } from './Intro-To-Angular/Neal-Component/neal-component';
import { TheSecondComponentComponent } from './Intro-To-Angular/the-second-component/the-second-component.component';
import TheInterpolationComponet from './Basics/Data-Binding/inter-polation-component/inter-polation-component';
import { PropertyBindingComponent } from './Basics/Data-Binding/property-binding/property-binding.component';
import { EventBindingComponent } from './Basics/Data-Binding/event-binding/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCoolComponent,
    ThisIsNeal,
    TheSecondComponentComponent,
    TheInterpolationComponet,
    PropertyBindingComponent,
    EventBindingComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
