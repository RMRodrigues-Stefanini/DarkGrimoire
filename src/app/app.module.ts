import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { BancoCartasComponent } from './pages/banco-cartas/banco-cartas.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFormComponent } from './pages/banco-cartas/search-form/search-form.component';
import { CardsFormComponent } from './pages/banco-cartas/cards-form/cards-form.component';
import { RequestErrorInterceptor } from './request-error/request-error.interceptor';


@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    BancoCartasComponent,
    PagenotfoundComponent,
    SearchFormComponent,
    CardsFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestErrorInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
