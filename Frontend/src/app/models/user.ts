export class User {
    id: number | undefined;
    cpf: string | undefined;
    email: string | undefined;
    name: string | undefined;

    constructor(id: number, cpf: string, email: string, name: string){
        this.id = id;
        this.cpf = cpf;
        this.email = email;
        this.name = name;
    }
}

export class UserParaCadastro {
    name!: string;
    cpf!: string;
    email!: string;
    
}