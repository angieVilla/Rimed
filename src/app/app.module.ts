import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EspecialistasComponent } from './especialistas/especialistas.component';
import { InicioComponent } from './inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgendarCitasComponent } from './agendar-citas/agendar-citas.component';
import {  MatSelectModule,MatNativeDateModule,MatFormFieldModule,MatInputModule } from '@angular/material';
import { MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatExpansionModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EspecialistasComponent,
    AgendarCitasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
