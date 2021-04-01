import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test1Component } from './test1.component';
import { Test1childComponent } from './test1child/test1child.component';
import { Test1child2Component } from './test1child2/test1child2.component';

const routes: Routes = [{ path: '', component: Test1Component,children:[
{path:"test1child",component:Test1childComponent},
{path:"test1child2",component:Test1child2Component}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Test1RoutingModule { }
