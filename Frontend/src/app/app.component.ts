import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppExemplo';
  items: MenuItem[] = [];
  ngOnInit() {
    this.items = [
        {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/'},
        {label: 'Usuários', icon: 'pi pi-fw pi-users', routerLink: '/user-list'},
        {label: 'Administrar Usuários', icon: 'pi pi-fw pi-user-edit', routerLink: '/user-administrar'}
    ];
}
}

