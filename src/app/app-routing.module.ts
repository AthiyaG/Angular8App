import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationComponent } from './creation/creation.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [{
  path: 'creation',
  component: CreationComponent
},{
  path: 'superpilot',
  component: ViewComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
