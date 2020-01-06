import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
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


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboard Page'
    }
  },
  {
    path: 'keyprojects',
    pathMatch: 'full',
    component: KeyprojectsComponent
  },
  {
    path: 'ongoingactivities',
    pathMatch: 'full',
    component: OngoingactivitiesComponent
  },
  {
    path: 'deliverydashboard',
    pathMatch: 'full',
    component: DeliverydashboardComponent
  },
  {
    path: 'cornersoftheworld',
    pathMatch: 'full',
    component: CornersWorldComponent
  },
  {
    path: 'yummytummy',
    pathMatch: 'full',
    component: YummyTummyComponent
  },
  {
    path: 'artwriting',
    pathMatch: 'full',
    component: ArtWritingComponent
  },
  {
    path: 'recognition',
    pathMatch: 'full',
    component: RecognitionComponent
  },
  {
    path: 'puzzle',
    pathMatch: 'full',
    component: PuzzleComponent
  },
  {
    path: 'happymoments',
    pathMatch: 'full',
    component: HappyMomentsComponent
  },
  {
    path: 'insurancequiz',
    pathMatch: 'full',
    component: InsuranceQuizComponent
  },
  {
    path: 'thinkblog',
    pathMatch: 'full',
    component: ThinkBlogComponent
  },
  {
    path: 'editorialcorner',
    pathMatch: 'full',
    component: EditorialCornerComponent
  },
  {
    path: 'knowyourcustomer',
    pathMatch: 'full',
    component: KnowYourCustomerComponent
  },
  {
    path: 'newbees',
    pathMatch: 'full',
    component: NewBeesComponent
  },
  {
    path: 'contactus',
    pathMatch: 'full',
    component: ContactUsComponent
  },

];

@NgModule({
  imports: [
   RouterModule.forRoot(routes,{
      useHash: false
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
