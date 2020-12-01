import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CardPage } from './pages/card/card.page';
import { MapPage } from './pages/map/map.page';
import { MenuPage } from './pages/menu/menu.page';



const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    // redirectTo: 'menu/tap1',
    redirectTo: 'map1',
    pathMatch: 'full'
  },

  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'map1',
    loadChildren: () => import('./pages/map1/map1/map1.module').then( m => m.Map1PageModule)
  },
  {
    path: 'map2',
    loadChildren: () => import('./pages/map2/map2/map2.module').then( m => m.Map2PageModule)
  },
  {
    path: 'map3',
    loadChildren: () => import('./pages/map3/map3/map3.module').then( m => m.Map3PageModule)
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
  
 
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
