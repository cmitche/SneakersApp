import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sneaker } from 'src/app/models/sneaker';
import { SneakerServiceService } from 'src/app/services/sneaker-service.service';

@Component({
  selector: 'app-view-brand',
  templateUrl: './view-brand.component.html',
  styleUrls: ['./view-brand.component.css']
})
export class ViewBrandComponent implements OnInit {

  sneakers: Sneaker[];

  constructor(private sneakerService: SneakerServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSneakersByBrand();
  }

  getSneakersByBrand(){
    const brandId = this.activatedRoute.snapshot.params[`brandId`]
    this.sneakerService.getSneakersByBrandId(brandId).subscribe(
      response =>{
        this.sneakers = response;
        console.log(response)
      }
    )
  }

}
