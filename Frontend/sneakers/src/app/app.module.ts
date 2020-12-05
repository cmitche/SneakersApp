import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewAllSneakersComponent } from './components/view-all-sneakers/view-all-sneakers.component';
import { ViewSneakerComponent } from './components/view-sneaker/view-sneaker.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ViewAllBrandsComponent } from './components/view-all-brands/view-all-brands.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewAllSneakersComponent,
    ViewSneakerComponent,
    PageNotFoundComponent,
    HomeComponent,
    ViewAllBrandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
