import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { UserAdministrarComponent } from './components/user-administrar/user-administrar.component';
import { UserListComponent } from './components/user-list/user-list.component';


const routes: Routes = [
  {path : "", component: InicioComponent },
  {path: "user-list", component: UserListComponent},
  {path: "user-administrar", component: UserAdministrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
