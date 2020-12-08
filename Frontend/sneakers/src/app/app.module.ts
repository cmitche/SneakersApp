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
import { ViewBrandComponent } from './components/view-brand/view-brand.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ViewAllSneakersComponent,
    ViewSneakerComponent,
    PageNotFoundComponent,
    HomeComponent,
    ViewAllBrandsComponent,
    ViewBrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
