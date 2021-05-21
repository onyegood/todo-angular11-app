import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './services/route/route-guard.service';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos/todos.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'welcome/:name',
    component: WelcomeComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'todos',
    component: TodosComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'todos/:id/edit',
    component: TodoComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'todos/new',
    component: TodoComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
