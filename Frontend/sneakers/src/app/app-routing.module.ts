import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ViewAllSneakersComponent } from './components/view-all-sneakers/view-all-sneakers.component';
import { ViewSneakerComponent } from './components/view-sneaker/view-sneaker.component';

const routes: Routes = [
  { path: 'sneakers/:sneakerId', component:  ViewSneakerComponent},
  { path: 'sneakers', component:  ViewAllSneakersComponent},
  { path: 'brands', component:  PageNotFoundComponent},
  { path: '**', component:  PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
