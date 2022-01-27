import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { User, UserParaCadastro } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  items: MenuItem[] = [];
  users!: User[];
  constructor(private userService: UserService, public router: Router) { }

  ngOnInit(): void {
   console.log(this.users);
  this.userService.retornarListaDeUser()
  .subscribe(
    (data: User[]) => {
    this.users = data;
  });  
  console.log(this.users);
    
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home'},
      {label: 'Usuários', icon: 'pi pi-fw pi-users'},
      {label: 'Administrar Usuários', icon: 'pi pi-fw pi-user-edit'}
  ];
  }
  onRemoverUsuario(identidade: number) :void{
    this.userService.deletarUsuario(identidade);
    window.location.reload();
  }  
}
