import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'pswd-recovery',
    loadChildren: () => import('./pages/pswd-recovery/pswd-recovery.module').then( m => m.PswdRecoveryPageModule)
  },  {
    path: 'pswd-code',
    loadChildren: () => import('./pages/pswd-code/pswd-code.module').then( m => m.PswdCodePageModule)
  },
  {
    path: 'pswd-change',
    loadChildren: () => import('./pages/pswd-change/pswd-change.module').then( m => m.PswdChangePageModule)
  },
  {
    path: 'user-update',
    loadChildren: () => import('./pages/user-update/user-update.module').then( m => m.UserUpdatePageModule)
  },
  {
    path: 'lectorqr',
    loadChildren: () => import('./pages/lectorqr/lectorqr.module').then( m => m.LectorqrPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
