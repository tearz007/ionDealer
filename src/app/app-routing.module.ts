import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'map',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule),
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'regiter',
    loadChildren: () => import('./pages/regiter/regiter.module').then( m => m.RegiterPageModule)
  },
  {
    path: 'menu/tap1',
    loadChildren: () => import('./pages/tap1/tap1.module').then( m => m.Tap1PageModule)
  },
  {
    path: 'menu/tap2',
    loadChildren: () => import('./pages/tap2/tap2.module').then( m => m.Tap2PageModule)
  },
  {
    path: 'menu/tap3',
    loadChildren: () => import('./pages/tap3/tap3.module').then( m => m.Tap3PageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
