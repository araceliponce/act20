import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ActinterceptorService } from './services/actinterceptor.service';
import { ActModule } from './act/act.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ActModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: ActinterceptorService,
    multi: true //indica que podemos tener multiples interceptors
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
