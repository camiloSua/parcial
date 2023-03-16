import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { FarmaciasComponent } from './Components/farmacias/farmacias.component';
import { FarmacosComponent } from './Components/farmacos/farmacos.component';

const routes: Routes = [
  {path:"Clientes", component:ClientesComponent},
  {path:"Farmacias", component:FarmaciasComponent},
  {path:"Farmacos", component:FarmacosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
