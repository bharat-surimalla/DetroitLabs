import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { CurrentComponent } from './current/current.component';
import { FivedayComponent } from './fiveday/fiveday.component';
import { HttpModule } from '../../node_modules/@angular/http';
import { HomeComponent } from './home/home.component';
import { FormsModule} from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';

const appRoutes:Routes = [{
  path : '', component : HomeComponent
},
  { path: 'current', component : CurrentComponent  },
  { path : 'forecast', component : FivedayComponent},
  { path : '**', component : NotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CurrentComponent,
    FivedayComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
