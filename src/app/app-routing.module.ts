import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { FrontPageComponent } from './front-page/front-page.component';

// const routes: Routes = [];
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
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
  { path: '**',   component:FrontPageComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
