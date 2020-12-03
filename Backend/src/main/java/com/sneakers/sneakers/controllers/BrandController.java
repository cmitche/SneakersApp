package com.sneakers.sneakers.controllers;

import com.sneakers.sneakers.models.Brand;
import com.sneakers.sneakers.services.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BrandController {
    @Autowired
    BrandService brandService;

    //get all brands
    @RequestMapping(method = RequestMethod.GET, value = "/brands")
    public List<Brand> getAllBrands(){
        return brandService.getAllBrands();
    }

    //get a brand by id
    @RequestMapping(method = RequestMethod.GET, value = "/brands/{brandId}")
    public Optional<Brand> getBrandById(@PathVariable Long brandId){
        return brandService.getBrandById(brandId);
    }

    //add a brand
    @RequestMapping(method = RequestMethod.POST, value = "/brands")
    public void addBrand(@RequestBody Brand brand){
        brandService.addBrand(brand);
    }

    //update a brand by id
    @RequestMapping(method = RequestMethod.PUT, value = "/brands/{brandId}")
    public void updateBrandById(@PathVariable Long brandId, @RequestBody Brand brand){
        brandService.updateBrandById(brandId, brand);
    }

    //delete a brand by id
    @RequestMapping(method = RequestMethod.DELETE, value = "/brands/{brandId}")
    public void deleteBrandById(@PathVariable Long brandId){
        brandService.deleteBrandById(brandId);
    }

}
