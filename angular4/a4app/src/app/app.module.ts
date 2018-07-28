import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { RouterModule,Routes } from '@angular/router'; 

import { DataService } from './services/data.service';
import { HttpModule} from '@angular/http';
import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
  {path:"", component:UserComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
