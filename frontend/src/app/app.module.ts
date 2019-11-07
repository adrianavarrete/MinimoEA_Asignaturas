import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { DetalleAsignaturaComponent } from './components/detalle-asignatura/detalle-asignatura.component';
import { UpdateEstudiantesComponent } from './components/update-estudiantes/update-estudiantes.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetalleAsignaturaComponent,
    UpdateEstudiantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
