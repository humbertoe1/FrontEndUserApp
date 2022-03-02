import { Component, OnInit } from '@angular/core';
import { User, UserParaCadastro } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import {Message, MessageService} from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { ConfirmPopup } from 'primeng/confirmpopup';


@Component({
  selector: 'app-user-administrar',
  templateUrl: './user-administrar.component.html',
  styleUrls: ['./user-administrar.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class UserAdministrarComponent implements OnInit {

  users: User[] = [];

  identidade!: number;

  nomeDoUser!: string;
  
  cadastroPessoaFisica!: string;

  enderecoDeEmail!: string;
  
  msgs1!: Message[];
  


  constructor(private userService: UserService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    
  }
  
  onCreateUser(nomeDoUser: string, cadastroPessoaFisica: string, enderecoDeEmail: string) :void{
  let user: UserParaCadastro = {
      name: nomeDoUser,
      cpf: cadastroPessoaFisica,
      email: enderecoDeEmail
  }
  this.userService.cadastrarUsuario(user);
  this.msgs1 = [
    {severity:'success', summary:'Usuario Criado!', detail:'O Usuario foi criado com sucesso!'},
  ]
  }
  
  onUpdateUser(identidade: number, nomeDoUser: string, cadastroPessoaFisica: string, enderecoDeEmail: string): void{
    this.confirmationService.confirm({
      header: 'Confirmação',
      message: 'Tem certeza que quer atualizar este usuario?',
      icon: 'pi pi-user-edit',
      accept:() =>{
        this.messageService.add({
          severity: "info",
          summary: "Confirmado",
          detail: "O Usúario foi atualizado."
        });
    let user: User = {
      id: identidade,
      name: nomeDoUser,
      cpf: cadastroPessoaFisica,
      email: enderecoDeEmail
    }
    this.userService.atualizarUsuario(user);
    this.msgs1 = [
      {severity:'info', summary:'Usuario Atualizado!', detail:'O Usuario foi atualizado com sucesso!'},
    ]
  }
});
}
  
}
