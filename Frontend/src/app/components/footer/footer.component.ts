import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  dockBasicItems!: MenuItem[];
  dockItems!: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.dockBasicItems = [
      {
          label: 'Linkedin',
          icon: "assets/images/Linkedin-Dock.png",
          command: () => {
            window.open( 
              "https://www.linkedin.com/in/humberto-escorel-154641127/", "_blank");
          }
      },
      {
          label: 'GitHub',
          icon: "assets/images/GitHub-Dock.svg",
          command: () => {
            window.open( 
              "https://github.com/humbertoe1/", "_blank");
          }
      }
  ];
}
}
