import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { FrontPageComponent } from './front-page/front-page.component';
import {AuthService} from './auth.service';
// const routes: Routes = [];
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    // canActivate:[AuthService]
    // data: { title: 'Heroes List' }
  },
  {
    path:'',
    component:FrontPageComponent
  },
  // { path: '',
  //   redirectTo: '/front-page',
  //   pathMatch: 'full'
  // },
  { path: '**',   redirectTo:'' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
