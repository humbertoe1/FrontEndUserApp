import { Component, OnInit } from '@angular/core';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [MessageService]
})
export class InicioComponent implements OnInit {
  items!: MenuItem[];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    

  }

}
