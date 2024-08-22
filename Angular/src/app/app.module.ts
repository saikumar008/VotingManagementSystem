import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdminregisterComponent } from './components/adminregister/adminregister.component';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CandidateFormComponent } from './components/candidate-form/candidate-form.component';
import { VotersListComponent } from './components/voters-list/voters-list.component';
import { AdminChoiceComponent } from './components/admin-choice/admin-choice.component';
import { VotingComponent } from './components/voting/voting.component';
import { VotersLoginComponent } from './components/voters-login/voters-login.component';
import { VotersRegisterComponent } from './components/voters-register/voters-register.component';
import { DataTablesModule } from 'angular-datatables';
import { VotersPresidentComponent } from './components/voters-president/voters-president.component';
import { VotingListComponent } from './components/voting-list/voting-list.component';
import { VotingThankyouComponent } from './components/voting-thankyou/voting-thankyou.component';
import { SearchListComponent } from './components/search-list/search-list.component';

const routes : Routes=[
  {path : "",component:WelcomepageComponent},
  {path : "candidates",component:CandidateListComponent},
  {path : "candidateform",component:CandidateFormComponent},
  {path : "editcandidate/:id",component:CandidateFormComponent},
  {path : "voters",component:VotersListComponent},
  {path : "register", component:AdminregisterComponent},
  {path : "login",component:AdminloginComponent},
  {path : "candichoice",component:AdminChoiceComponent},
  {path : "votings",component:VotingComponent},
  {path : "voterslogin",component:VotersLoginComponent},
  {path : "votersregister",component:VotersRegisterComponent},
  {path : "voterspresident",component:VotersPresidentComponent},
  {path : "votinglist",component:VotingListComponent},
  {path : "votingthankyou",component:VotingThankyouComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    AdminloginComponent,
    AdminregisterComponent,
    CandidateListComponent,
    CandidateFormComponent,
    VotersListComponent,
    AdminChoiceComponent,
    VotingComponent,
    VotersLoginComponent,
    VotersRegisterComponent,
    VotersPresidentComponent,
    VotingListComponent,
    VotingThankyouComponent,
    SearchListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
