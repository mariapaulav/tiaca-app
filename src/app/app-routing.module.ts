import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';

const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'login',component: LoginComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'transactions', component: TransactionsComponent },
      { path: 'profile', component: ProfileComponent }
    ]},
  {path: 'profile',component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
