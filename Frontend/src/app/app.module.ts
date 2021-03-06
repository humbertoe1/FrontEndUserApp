import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DockModule} from 'primeng/dock'

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
import { PanelModule }  from 'primeng/panel';
import {MultiSelectModule} from 'primeng/multiselect';
import {TabViewModule} from 'primeng/tabview';

import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import { UserAdministrarComponent } from './components/user-administrar/user-administrar.component';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from 'primeng/api';
import {CardModule} from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset'
import { InicioComponent } from './components/inicio/inicio.component';
import { UserAtualizarComponent } from './components/user-atualizar/user-atualizar.component';
import { UserRegistrarComponent } from './components/user-registrar/user-registrar.component';
import { BackgroundComponent } from './components/background/background.component';

import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { ConfirmationService } from 'primeng/api';
import {OrderListModule} from 'primeng/orderlist';
import {ToolbarModule} from 'primeng/toolbar';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserAdministrarComponent,
    ServerComponent,
    FooterComponent,
    InicioComponent,
    UserRegistrarComponent,
    UserAtualizarComponent,
    BackgroundComponent
 
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
    HttpClientModule,
    PanelModule,
    RouterModule,
    BrowserAnimationsModule,
    SharedModule,
    CardModule,
    TabViewModule,
    DockModule,
    FieldsetModule,
    ConfirmPopupModule,
    OrderListModule,
    MessageModule,
    MessagesModule,
    ToolbarModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent,BackgroundComponent]
})
export class AppModule { }
