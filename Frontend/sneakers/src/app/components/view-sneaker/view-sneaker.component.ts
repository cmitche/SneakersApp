import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sneaker } from 'src/app/models/sneaker';
import { SneakerServiceService } from 'src/app/services/sneaker-service.service';

@Component({
  selector: 'app-view-sneaker',
  templateUrl: './view-sneaker.component.html',
  styleUrls: ['./view-sneaker.component.css']
})
export class ViewSneakerComponent implements OnInit {

  sneaker: Sneaker;

  constructor(private sneakerService: SneakerServiceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getSneakerById();
  }

  getSneakerById(){
    const id = this.activatedRoute.snapshot.params[`sneakerId`];
    this.sneakerService.getSneakerById(id).subscribe(
      response => {
        this.sneaker = response;
        console.log(response)
      }
    );
  }
}
