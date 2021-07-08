import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { JavaComponent } from './modules/general/java/java.component';
import { ModelDrivenComponent } from './modules/general/model-driven/model-driven.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { TempDrivenComponent } from './modules/general/temp-driven/temp-driven.component';
import { WebComponent } from './modules/general/web/web.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  {path: 'Java', component: JavaComponent, },
  {path: 'Web', component: WebComponent, },
  {path:'Template',component:TempDrivenComponent},
  {path:'Model',component:ModelDrivenComponent},
  {
    path: 'products',
    loadChildren: () => import('./modules/general/products/products.module')
      .then(mod => mod.ProductsModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }