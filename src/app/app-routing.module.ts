import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowreposComponent } from './components/showrepos/showrepos.component';
import { DashboardComponent} from './components/dashboard/dashboard.component';

const routes: Routes = [
 { path: '', pathMatch: 'full', redirectTo: 'dashboard'},
 { path: 'show-repo/:username/:reponame', component: <any>ShowreposComponent},
 { path: 'dashboard', component: <any>DashboardComponent},
 { path: 'dashboard/:username', component: <any>DashboardComponent},

 ];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { enableTracing: false})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
