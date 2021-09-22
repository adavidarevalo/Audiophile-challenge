import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component'


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'headphones',
        loadChildren: ()=> import('./headphones/headphones.module').then(m=> m.HeadphonesModule)
      },
      {
        path: 'earphones',
        loadChildren: ()=> import('./earphones/earphones.module').then(m=>m.EarphonesModule)
      },
      {
        path: 'speakers',
        loadChildren: () => import('./speakers/speakers.module').then(m=>m.SpeakersModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'signUp',
        loadChildren: () => import('./sign-up/sign-up.module').then(M => M.SignUpModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
