import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroCartasRoutingModule } from './cadastro-cartas-routing.module';
import { CadastroCartasComponent } from './cadastro-cartas.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadastroCartasComponent
  ],
  imports: [
    CommonModule,
    CadastroCartasRoutingModule,
    ReactiveFormsModule
  ]
})
export class CadastroCartasModule { }
