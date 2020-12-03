import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sneaker } from '../models/sneaker';


@Injectable({
  providedIn: 'root'
})
export class SneakerServiceService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080/";

  getAllSneakers(): Observable<any>{
    return this.http.get<any>(this.url + `sneakers`);
  }

  getSneakerById(sneakerId: number): Observable<any>{
    return this.http.get<any>(this.url + `sneakers/${sneakerId}`);
  }

  getSneakersByBrandId(brandId: number): Observable<any>{
    return this.http.get<any>(this.url + `sneakers/brands/${brandId}`);
  }

  getSneakersByModel(model: string): Observable<any>{
    return this.http.get<any>(this.url + `sneakers/brands/model/${model}`);
  }

  getSneakersByYear(year: number):Observable<any>{
    return this.http.get<any>(this.url + `sneakers/brands/years/${year}`);
  }

  addSneakerByBrandId(brandId: number, sneaker: Sneaker): Observable<any>{
    return this.http.post<any>(this.url + `sneakers/${brandId}`, sneaker);
  }

  updateSneakerId(sneakerId: number, sneaker: Sneaker): Observable<any>{
    return this.http.put<any>(this.url + `sneakers/${sneakerId}`, sneaker);
  }

  deleteSneakerById(sneakerId: number): Observable<any>{
    return this.http.delete<any>(this.url + `sneakers/${sneakerId}`);
  }
}
