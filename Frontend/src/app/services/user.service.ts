import { Injectable } from '@angular/core';
import { User, UserParaCadastro } from '../models/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { environment } from 'src/environments/environment';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = `${environment.apiURL}/user`

  constructor(private http: HttpClient) { }

  retornarListaDeUser() {
    return this.http.get<User[]>(`http://localhost:5000/user/userListar`);
  }
  cadastrarUsuario(user: UserParaCadastro) {
    console.log("Cheguei aqui. " + user.cpf + " " + user.email + " " + user.name);
    this.http.post<UserParaCadastro>(`http://localhost:5000/user/userCadastrar`, user)
      .pipe(
        
        catchError(error => {

          let errorMsg: string;
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
          } else {
            errorMsg = this.getServerErrorMessage(error);
          }
          console.log(errorMsg);
          return throwError(errorMsg);
        }
        )
      )
      .subscribe( (result) => {
        console.log(result);
      })
      ;
  }

  deletarUsuario(userId: number){
    this.http.post<number>(`http://localhost:5000/user/userDeletar`, userId)
    .pipe(
        
      catchError(error => {

        let errorMsg: string;
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Error: ${error.error.message}`;
        } else {
          errorMsg = this.getServerErrorMessage(error);
        }
        console.log(errorMsg);
        return throwError(errorMsg);
      }
      )
    )
    .subscribe( (result) => {
      console.log(result);
    })
    ;
  }
  atualizarUsuario(user: User) {
    
    this.http.post<User>(`http://localhost:5000/user/userAtualizar`, user)
      .pipe(
        
        catchError(error => {

          let errorMsg: string;
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
          } else {
            errorMsg = this.getServerErrorMessage(error);
          }
          console.log(errorMsg);
          return throwError(errorMsg);
        }
        )
      )
      .subscribe( (result) => {
        console.log(result);
      })
      ;
  }
    


  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 404: {
        return `Não Encontrdo: ${error.message}`;
      }
      case 403: {
        return `Acesso Negado: ${error.message}`;
      }
      case 400: {
        return `${error.error}`;
      }
      case 500: {
        return `Falha interna no servidor: ${error.error}`;
      }
      default: {
        return `Unknown Server Error: ${error.message}`;
      }

    }
  }

  /*
  adicionarUsuario(user: User): void{
    // this.users.push(user);
  }
  removerUsuario(id: number): void{
    //this.users = this.users.filter(item => item.id !== id);
  }
  //encontrarUsuario(id: number | undefined): User | undefined{
    //let umUsuario = this.users.find(item => item.id == id);
   // return umUsuario;
  //}
  atualizarUsuario(newUser: User): void{
    
    let user = this.encontrarUsuario(newUser.id);
    if (user != undefined){
      user.nome = newUser.nome;
      user.cpf = newUser.cpf;
      user.email = newUser.email;
    }

    // this.users.forEach(user=> {
    //   if (user.id == newUser.id){
    //     user.nome = newUser.nome;
    //     user.cpf = newUser.cpf;
    //     user.email = newUser.email;
    //   }
    // });
  }
  */
}
