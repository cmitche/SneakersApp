import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ViewAllBrandsComponent } from './components/view-all-brands/view-all-brands.component';
import { ViewAllSneakersComponent } from './components/view-all-sneakers/view-all-sneakers.component';
import { ViewBrandComponent } from './components/view-brand/view-brand.component';
import { ViewSneakerComponent } from './components/view-sneaker/view-sneaker.component';

const routes: Routes = [
  { path: 'sneakers/:sneakerId', component: ViewSneakerComponent},
  { path: 'brands/:brandId', component: ViewBrandComponent},
  { path: 'sneakers', component: ViewAllSneakersComponent},
  { path: 'brands', component: ViewAllBrandsComponent},
  { path: '', component: HomeComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
