import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KeyprojectsComponent } from './accountupdates/keyprojects/keyprojects.component';
import { OngoingactivitiesComponent } from './accountupdates/ongoingactivities/ongoingactivities.component';
import { DeliverydashboardComponent } from './accountupdates/deliverydashboard/deliverydashboard.component';
import { CornersWorldComponent } from './newsletter-corner/corners-world/corners-world.component';
import { YummyTummyComponent } from './newsletter-corner/yummy-tummy/yummy-tummy.component';
import { ArtWritingComponent } from './newsletter-corner/art-writing/art-writing.component';
import { RecognitionComponent } from './newsletter-corner/recognition/recognition.component';
import { PuzzleComponent } from './newsletter-corner/puzzle/puzzle.component';
import { HappyMomentsComponent } from './newsletter-corner/happy-moments/happy-moments.component';
import { InsuranceQuizComponent } from './knowledge-hub/insurance-quiz/insurance-quiz.component';
import { ThinkBlogComponent } from './knowledge-hub/think-blog/think-blog.component';
import { EditorialCornerComponent } from './knowledge-hub/editorial-corner/editorial-corner.component';
import { KnowYourCustomerComponent } from './know-your-customer/know-your-customer.component';
import { NewBeesComponent } from './new-bees/new-bees.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    KeyprojectsComponent,
    OngoingactivitiesComponent,
    DeliverydashboardComponent,
    CornersWorldComponent,
    YummyTummyComponent,
    ArtWritingComponent,
    RecognitionComponent,
    PuzzleComponent,
    HappyMomentsComponent,
    InsuranceQuizComponent,
    ThinkBlogComponent,
    EditorialCornerComponent,
    KnowYourCustomerComponent,
    NewBeesComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
