import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrawComponent } from './draw/draw/draw.component';
import { Example2Component } from './example2/example2/example2.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'draw',
}, {
  path: 'draw',
  component: DrawComponent,
}, {
  path: 'example2',
  component: Example2Component,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
