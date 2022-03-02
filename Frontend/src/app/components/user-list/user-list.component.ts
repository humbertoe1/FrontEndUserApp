import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { User, UserParaCadastro } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers : [ConfirmationService, MessageService]
})
export class UserListComponent implements OnInit {
  identidade!: number;

  nomeDoUser!: string;
  
  cadastroPessoaFisica!: string;

  enderecoDeEmail!: string;

  userDialog: boolean = false;
  items: MenuItem[] = [];
  users!: User[];
  user!: User;
  submitted: boolean = false;
  constructor(private userService: UserService, public router: Router, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
   console.log(this.users);
  this.userService.retornarListaDeUser()
  .subscribe(
    (data: User[]) => {
    this.users = data;
  });  
  console.log(this.users);
    
 
  }
  onRemoverUsuario(identidade: number) :void{
    this.confirmationService.confirm({
      message: 'Tem certeza que quer remover esse usuario?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      accept: () =>{
    this.userService.deletarUsuario(identidade);
      }
    });
  }
  onCreateUser() :void{
    let user: UserParaCadastro = {
        name: this.user.name,
        cpf: this.user.cpf,
        email: this.user.email
    }
    this.userService.cadastrarUsuario(user);
    }
    openNew() {
      this.user = {
        id: undefined,
        name: undefined,
        cpf: undefined,
        email: undefined,
      };
      this.submitted = false;
      this.userDialog = true;
  }

  hideDialog() {
    this.userDialog = false;
    this.submitted = false;
}
editarUsuario(user: User) {
  this.user = {...user};
  this.userDialog = true;
}
}
