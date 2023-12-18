import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './shared/main/main.component';
import { ConcursanteComponent } from './shared/concursante/concursante.component';
import { SharedModule } from 'primeng/api';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ConcursanteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PrimeNgModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    MainComponent
  ]
})
export class AppModule { }
