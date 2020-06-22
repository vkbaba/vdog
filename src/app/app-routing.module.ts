import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogviewComponent } from './dogview/dogview.component';

const routes:Routes = [
  { path: "", component: DogviewComponent }
  // { path: '',   redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
