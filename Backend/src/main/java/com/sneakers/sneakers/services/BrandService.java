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
    //endpoint: /brands
    public List<Brand> getAllBrands(){
        List<Brand> brands = new ArrayList<>();
        brandRepo.findAll().forEach(brands::add);
        return brands;
    }

    //get brand by id
    //endpoint: /brands/{brandId}
    public Optional<Brand> getBrandById(Long brandId){
        return brandRepo.findById(brandId);
    }

    //add a brand
    //endpoint: /brands
    public void addBrand(Brand brand){
        brandRepo.save(brand);
    }

    //update a brand by id
    //endpoint: /brands/{brandId}
    public void updateBrandById(Long brandId, Brand newBrand){
        for(Brand brand: brandRepo.findAll()){
            if(brand.getId().equals(brandId)){
                newBrand.setId(brandId);
                brandRepo.save(newBrand);
            }
        }
    }

    //delete a brand by id
    //endpoint: /brands/{brandId}
    public void deleteBrandById(Long brandId){
        brandRepo.deleteById(brandId);
    }

}
