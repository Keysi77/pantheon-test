import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopulationComponent } from './population/population.component';
import { ExpectancyComponent } from './expectancy/expectancy.component';
import "animate.css/animate.css";


@NgModule({
  declarations: [
    AppComponent,
    PopulationComponent,
    ExpectancyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpModule, // pre napojenie na REST API cey HTTP get
    FormsModule // pre formular a ngModel


  ],
  providers: [ PopulationComponent, ExpectancyComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
