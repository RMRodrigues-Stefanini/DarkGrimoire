import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BancoCartasComponent } from './pages/banco-cartas/banco-cartas.component';
import { MyGuardGuard } from './my-guard.guard';

const routes: Routes = [
  { path :'', redirectTo: '/home', pathMatch : 'full'},
  { path : 'home', component: HomeComponent},
  { path : 'banco-cartas', component : BancoCartasComponent},
  { path: 'login', canActivate: [MyGuardGuard], loadChildren: () => import('src/app/pages/login/login.module').then(m => m.LoginModule) },
  { path: 'cadastroCartas', loadChildren: () => import('src/app/pages/cadastro-cartas/cadastro-cartas.module').then(m => m.CadastroCartasModule) },
  { path : '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
