import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCartasComponent } from './cadastro-cartas.component';

const routes: Routes = [{ path: '', component: CadastroCartasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroCartasRoutingModule { }
