import { Component, OnInit } from '@angular/core';
import { User, UserParaCadastro } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-administrar',
  templateUrl: './user-administrar.component.html',
  styleUrls: ['./user-administrar.component.css']
})
export class UserAdministrarComponent implements OnInit {

  users: User[] = [];

  identidade!: number;

  nomeDoUser!: string;
  
  cadastroPessoaFisica!: string;

  enderecoDeEmail!: string;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
  }
  
  onCreateUser(nomeDoUser: string, cadastroPessoaFisica: string, enderecoDeEmail: string) :void{
  let user: UserParaCadastro = {
      name: nomeDoUser,
      cpf: cadastroPessoaFisica,
      email: enderecoDeEmail
  }
  this.userService.cadastrarUsuario(user);
  }

  onUpdateUser(identidade: number, nomeDoUser: string, cadastroPessoaFisica: string, enderecoDeEmail: string): void{
    let user: User = {
      id: identidade,
      name: nomeDoUser,
      cpf: cadastroPessoaFisica,
      email: enderecoDeEmail
    }
    this.userService.atualizarUsuario(user);
  }
}
