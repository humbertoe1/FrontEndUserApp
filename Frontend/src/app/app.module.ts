import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuModule} from 'primeng/menu';
import { UserListComponent } from './components/user-list/user-list.component';
import {TableModule} from 'primeng/table';
import {SliderModule} from 'primeng/slider';
import {ContextMenuModule} from 'primeng/contextmenu';
import { HttpClientModule } from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';

import {MultiSelectModule} from 'primeng/multiselect';

import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import { UserAdministrarComponent } from './components/user-administrar/user-administrar.component';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserAdministrarComponent,
    ServerComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    TabMenuModule,
    MenuModule,
    TableModule,
    SliderModule,
    ContextMenuModule,
    ToastModule,
    CalendarModule,
    MultiSelectModule,
    DialogModule,
    ButtonModule,
    DropdownModule,
    ProgressBarModule,
    InputTextModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
