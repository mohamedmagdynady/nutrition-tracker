import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//import {ShowNutritionValuePageModule} from './pages/show-nutrition-value';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'show-nutrition-value',
    loadChildren: () => import('./pages/show-nutrition-value/show-nutrition-value.module').then( m => m.ShowNutritionValuePageModule)
  },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'enter-progress',
    loadChildren: () => import('./pages/enter-progress/enter-progress.module').then( m => m.EnterProgressPageModule)
  },
  {
    path: 'show-today-progress',
    loadChildren: () => import('./pages/show-today-progress/show-today-progress.module').then( m => m.ShowTodayProgressPageModule)
  },
  {
    path: 'nothing',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/calcinfo/calcinfo.module').then( m => m.CalcinfoPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'user-info',
    loadChildren: () => import('./pages/user-info/user-info.module').then( m => m.UserInfoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
