import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'select',
    pathMatch: 'full'
  },
  {
    path: 'select',
    loadChildren: './select/select.module#SelectPageModule'
  },
  { 
    path: 'search', 
    loadChildren: './search/search.module#SearchPageModule' 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
