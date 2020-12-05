import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandServiceService } from 'src/app/services/brand-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  brands: Brand[];

  constructor(private brandService: BrandServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getAllBrands();
  }

  getAllBrands(){
    this.brandService.getAllBrands().subscribe(
      response => {
        this.brands = response;
        console.log(response);
      }
    )
  }

  goToBrands(){
    this.router.navigate([`brands`]);
  }

  goToAllSneakers(){
    this.router.navigate([`sneakers`]);
  }
}
