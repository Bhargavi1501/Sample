import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test1RoutingModule } from './test1-routing.module';
import { Test1Component } from './test1.component';
import { Test1childComponent } from './test1child/test1child.component';
import { Test1child2Component } from './test1child2/test1child2.component';


@NgModule({
  declarations: [Test1Component, Test1childComponent, Test1child2Component],
  imports: [
    CommonModule,
    Test1RoutingModule
  ]
})
export class Test1Module { }
