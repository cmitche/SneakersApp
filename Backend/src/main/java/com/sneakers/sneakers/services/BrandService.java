package com.sneakers.sneakers.services;

import com.sneakers.sneakers.models.Brand;
import com.sneakers.sneakers.repos.BrandRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BrandService {
    @Autowired
    BrandRepo brandRepo;

    //get all brands
    public List<Brand> getAllBrands(){
        List<Brand> brands = new ArrayList<>();
        brandRepo.findAll().forEach(brands::add);
        return brands;
    }

    //get brand by id
    public Optional<Brand> getBrandById(Long brandId){
        return brandRepo.findById(brandId);
    }

    //get brand by name
    public Optional<Brand> getBrandByName(String brandName){
        return brandRepo.findByName(brandName);
    }

    //add a brand
    public Brand addBrand(Brand brand){
        return brandRepo.save(brand);
    }

    //update a brand by id
    public Brand updateBrandById(Long brandId, Brand brand){
        brand.setId(brandId);
        return brandRepo.save(brand);
    }

    //delete a brand by id
    public void deleteBrandById(Long brandId){
        brandRepo.deleteById(brandId);
    }

}
