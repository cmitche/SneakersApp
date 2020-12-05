import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandServiceService {

  url = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  getAllBrands(): Observable<any>{
    return this.http.get<any>(this.url + `brands`);
  }

  getBrandByBrandId(brandId: number): Observable<any>{
    return this.http.get<any>(this.url + `brands/${brandId}`);
  }

  addBrand(brand: Brand):Observable<any>{
    return this.http.post<any>(this.url + `brands`, brand);
  }

  updateBrandById(brandId: number, brand: Brand): Observable<any>{
    return this.http.put<any>(this.url + `brands/${brandId}`, brand);
  }

  deleteBrandById(brandId: number):Observable<any>{
    return this.http.delete<any>(this.url + `brands/${brandId}`);
  }
}
