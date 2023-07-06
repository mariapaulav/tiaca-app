import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { InputComponent } from './components/input/input.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderTableComponent } from './components/table/header-table/header-table.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { DynamicPwdComponent } from './pages/dynamic-pwd/dynamic-pwd.component';
import { PaginationTableComponent } from './components/table/pagination-table/pagination-table.component';
import { BadgeComponent } from './components/badge/badge.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TransactionsComponent,
    ProfileComponent,
    DashboardComponent,
    NavBarComponent,
    InputComponent,
    InfoCardComponent,
    TableComponent,
    HeaderTableComponent,
    ModalComponent,
    DynamicPwdComponent,
    PaginationTableComponent,
    BadgeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
