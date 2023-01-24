import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/pages/authentication/login/login.component';

const routes: Routes = [
  { path: '',       component: LoginComponent },
];

export const AuthLayoutRoutes = RouterModule.forChild(routes);
