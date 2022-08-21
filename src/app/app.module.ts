import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaisComponent } from './components/pais/pais.component';
import {HttpClientModule} from "@angular/common/http";
import {ServicepaisService} from "./service/servicepais.service";
import { PaisAgregarComponent } from './components/pais/pais-agregar/pais-agregar.component';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MaterialModule} from "./material.module";

@NgModule({
  declarations: [
    AppComponent,
    PaisComponent,
    PaisAgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MaterialModule
  ],
  // Se cargan los servicios que creamos
  providers: [ServicepaisService,],
  bootstrap: [AppComponent],
  // Se agrega componentes que queramos exponer a otro modulos
  exports:[]
})
export class AppModule { }
