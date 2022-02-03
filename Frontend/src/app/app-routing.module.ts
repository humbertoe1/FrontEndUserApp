import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { UserAdministrarComponent } from './components/user-administrar/user-administrar.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FooterComponent } from './components/footer/footer.component';


const routes: Routes = [
  {path : "", component: InicioComponent },
  {path: "user-list", component: UserListComponent},
  {path: "user-administrar", component: UserAdministrarComponent},
  {path: "footer-aplicacao", component: FooterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
