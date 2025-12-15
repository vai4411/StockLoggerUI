import { Routes } from '@angular/router';
import { App } from './app';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { Insert } from './dashboard/insert/insert';
import { Update } from './dashboard/update/update';
import { History } from './dashboard/history/history';

export const routes: Routes = [
 {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'home',
    component: Dashboard
  },
  {
    path: 'insert',
    component: Insert
  },
  {
    path: 'update',
    component: Update
  },
  {
    path: 'history',
    component: History
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
