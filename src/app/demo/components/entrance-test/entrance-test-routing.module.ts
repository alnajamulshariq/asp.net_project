import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntranceTestComponent } from './entrance-test.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([{path: '', component: EntranceTestComponent}])],
  exports: [RouterModule]
})
export class EntranceTestRoutingModule { }
