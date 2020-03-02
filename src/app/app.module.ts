import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//materials
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';

//services
import {GithubService} from './services/github.service';

//components
import { ShowreposComponent } from './components/showrepos/showrepos.component';

//routing
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowreposComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatListModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
