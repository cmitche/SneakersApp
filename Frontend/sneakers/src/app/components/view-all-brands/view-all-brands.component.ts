import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandServiceService } from 'src/app/services/brand-service.service';

@Component({
  selector: 'app-view-all-brands',
  templateUrl: './view-all-brands.component.html',
  styleUrls: ['./view-all-brands.component.css']
})
export class ViewAllBrandsComponent implements OnInit {

  brands: Brand[];

  constructor(private brandService: BrandServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllBrands();
  }

  getAllBrands(){
    this.brandService.getAllBrands().subscribe(
      response =>{
        this.brands = response;
        console.log(response)
      }
    );
  }

  goToBrand(){
    const id = this.activatedRoute.snapshot.params[`brandId`];
    this.brandService.getBrandByBrandId(id);
  }

}
