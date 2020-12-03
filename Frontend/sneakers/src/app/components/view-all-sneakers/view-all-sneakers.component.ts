import { Component, OnInit } from '@angular/core';
import { Sneaker } from 'src/app/models/sneaker';
import { SneakerServiceService } from 'src/app/services/sneaker-service.service';

@Component({
  selector: 'app-view-all-sneakers',
  templateUrl: './view-all-sneakers.component.html',
  styleUrls: ['./view-all-sneakers.component.css']
})
export class ViewAllSneakersComponent implements OnInit {

  constructor(private sneakerService: SneakerServiceService) { }

  ngOnInit(): void {
    this.getAllSneakers();
  }

  sneakers: Sneaker[];

  getAllSneakers(){
    this.sneakerService.getAllSneakers().subscribe(
      response => {
        this.sneakers = response;
        console.log(response);
      }
    )
  }

}
