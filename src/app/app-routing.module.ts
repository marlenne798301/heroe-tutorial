import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './view/heroe/form/form.component';
import { TableComponent } from './view/heroe/table/table.component';

const routes: Routes = [
{path:"table", component:TableComponent},
{path:"form", component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
