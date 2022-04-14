import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MyCoolComponent } from './Intro-To-Angular/my-component/my-component';
import { NealComp as ThisIsNeal } from './Intro-To-Angular/Neal-Component/neal-component';
import { TheSecondComponentComponent } from './Intro-To-Angular/the-second-component/the-second-component.component';
import TheInterpolationComponet from './Basics/Data-Binding/inter-polation-component/inter-polation-component';
import { PropertyBindingComponent } from './Basics/Data-Binding/property-binding/property-binding.component';
import { EventBindingComponent } from './Basics/Data-Binding/event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './Basics/Data-Binding/two-way-data-binding/two-way-data-binding.component';
import { StructuralDirectivesComponent } from './Basics/Directives/Basics/Directives/structural-directives/structural-directives.component';
import { ParentComponentComponent } from './Basics/Component-Data-Binding/parent-child/parent-component/parent-component.component';
import { ChildComponentComponent } from './Basics/Component-Data-Binding/parent-child/child-component/child-component.component';
import { TheParentComponetComponent } from './Basics/Component-Data-Binding/child-parent/the-parent-componet/the-parent-componet.component';
import { TheChildComponentComponent } from './Basics/Component-Data-Binding/child-parent/the-child-component/the-child-component.component';
import { MainComponent } from './Projects/shopping-app/main/main.component';
import { HeaderComponent } from './Projects/shopping-app/header/header.component';
import { CardViewComponent } from './Projects/shopping-app/card-view/card-view.component';
import { CardComponentComponent } from './Projects/shopping-app/card-component/card-component.component';
import { AddItemComponetComponent } from './Projects/shopping-app/add-item-componet/add-item-componet.component';
import { ParentLifeCycleCompComponent } from './intermediary/Life-Cycle-Events/parent-life-cycle-comp/parent-life-cycle-comp.component';
import { ChildLifeCycleCompComponent } from './intermediary/Life-Cycle-Events/child-life-cycle-comp/child-life-cycle-comp.component';
import { CustomDirectiveComponent } from './intermediary/Directives/custom-directive/custom-directive.component';
import { MyDirectiveDirective } from './intermediary/Directives/my-directive.directive';
import { RenderDirectiveDirective } from './intermediary/Directive/render-directive.directive';
import { HostListnerDirectiveDirective } from './intermediary/Directive/host-listner-directive.directive';
import { MainBanckComponentComponent } from './Projects/Banking-App/main-banck-component/main-banck-component.component';
import { NewAccountComponentComponent } from './Projects/Banking-App/new-account-component/new-account-component.component';
import { HomeBasicComponent } from './intermediary/Routing/Basic-Routing/home-basic/home-basic.component';
import { AboutBasicComponent } from './intermediary/Routing/Basic-Routing/about-basic/about-basic.component';
import { ContactBasicComponent } from './intermediary/Routing/Basic-Routing/contact-basic/contact-basic.component';
import { MainBasicsComponent } from './intermediary/Routing/Basic-Routing/main-basics/main-basics.component';
import { HeaderBasicsComponent } from './intermediary/Routing/Basic-Routing/header-basics/header-basics.component';
import { MainRoutingComponent } from './intermediary/Routing/Angular-Routing/main-routing/main-routing.component';

import { HomeRoutingComponent } from './intermediary/Routing/Angular-Routing/home-routing/home-routing.component';
import { HeaderRoutingComponent } from './intermediary/Routing/Angular-Routing/header-routing/header-routing.component';
import { AboutRoutingComponent } from './intermediary/Routing/Angular-Routing/about-routing/about-routing.component';
import { ContactUsRoutingComponent } from './intermediary/Routing/Angular-Routing/contact-us-routing/contact-us-routing.component';
import { UsersRoutingComponent } from './intermediary/Routing/Angular-Routing/users-routing/users-routing.component';
import { UserRoutingComponent } from './intermediary/Routing/Angular-Routing/user-routing/user-routing.component';
import { WildCardRoutingComponent } from './intermediary/Routing/Angular-Routing/wild-card-routing/wild-card-routing.component';
import { DashboardRoutingComponent } from './intermediary/Routing/Angular-Routing/dashboard-routing/dashboard-routing.component';
import { OneCompComponent } from './intermediary/Routing/Angular-Routing/dashboard-routing/one-comp/one-comp.component';
import { TwoCompComponent } from './intermediary/Routing/Angular-Routing/dashboard-routing/two-comp/two-comp.component';

//Nesting the users Routes.
//When you go to the dashboard route the first component should be loaded by default:
//The active component name in the sidebar should be highlighted

const appRoutes: Routes = [
  { path: '', component: HomeRoutingComponent },
  { path: 'about', component: AboutRoutingComponent },
  { path: 'contact', component: ContactUsRoutingComponent },
  { path: 'users', component: UsersRoutingComponent },
  { path: 'users/user/:id/:name/:age', component: UserRoutingComponent },
  { path: 'wildcard', component: WildCardRoutingComponent },
  {
    path: 'dashboard',
    component: DashboardRoutingComponent,
    children: [
      { path: 'one', component: OneCompComponent },
      { path: 'two', component: TwoCompComponent },
    ],
  },
  { path: '**', redirectTo: 'wildcard' },
];

@NgModule({
  declarations: [
    AppComponent,
    MyCoolComponent,
    ThisIsNeal,
    TheSecondComponentComponent,
    TheInterpolationComponet,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    StructuralDirectivesComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    TheParentComponetComponent,
    TheChildComponentComponent,
    MainComponent,
    HeaderComponent,
    CardViewComponent,
    CardComponentComponent,
    AddItemComponetComponent,
    ParentLifeCycleCompComponent,
    ChildLifeCycleCompComponent,
    CustomDirectiveComponent,
    MyDirectiveDirective,
    RenderDirectiveDirective,
    HostListnerDirectiveDirective,
    MainBanckComponentComponent,
    NewAccountComponentComponent,
    HomeBasicComponent,
    AboutBasicComponent,
    ContactBasicComponent,
    MainBasicsComponent,
    HeaderBasicsComponent,
    MainRoutingComponent,
    HeaderRoutingComponent,
    AboutRoutingComponent,
    ContactUsRoutingComponent,
    UsersRoutingComponent,
    UserRoutingComponent,
    WildCardRoutingComponent,
    DashboardRoutingComponent,
    OneCompComponent,
    TwoCompComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
