import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CardPage } from './pages/card/card.page';
import { MenuPage } from './pages/menu/menu.page';
import { Tap1Page } from './pages/tap1/tap1.page';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'menu/tap1',
    pathMatch: 'full'
  },

  {
   path:'menu', component:MenuPage,
    children:[
      
    {
      path: 'tap1',
     loadChildren: () => import('./pages/tap1/tap1.module').then( m => m.Tap1PageModule)
    },
    {
      path: 'tap2',
      loadChildren: () => import('./pages/tap2/tap2.module').then( m => m.Tap2PageModule)
    },
    {
      path: 'tap3',
      loadChildren: () => import('./pages/tap3/tap3.module').then( m => m.Tap3PageModule)
    },
  ]
  },



  {
    path: 'card',component:CardPage,
    //loadChildren: () => import('./pages/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'regiter',
    loadChildren: () => import('./pages/regiter/regiter.module').then( m => m.RegiterPageModule)
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
