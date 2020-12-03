package com.sneakers.sneakers.services;

import com.sneakers.sneakers.models.Brand;
import com.sneakers.sneakers.models.Sneaker;
import com.sneakers.sneakers.repos.BrandRepo;
import com.sneakers.sneakers.repos.SneakerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class SneakerService {

    @Autowired
    SneakerRepo sneakerRepo;

    @Autowired
    BrandRepo brandRepo;

    //get all sneakers
    //endpoint: /sneakers
    public List<Sneaker> getAllSneakers(){
        List<Sneaker> sneakers = new ArrayList<>();
        sneakerRepo.findAll().forEach(sneakers::add);
        return sneakers;
    }

    //get sneaker by id
    //endpoint: /sneakers/{sneakerId}
    public Optional<Sneaker> getSneakerById(Long sneakerId){
        return sneakerRepo.findById(sneakerId);
    }

    //get sneakers by brand id
    //endpoint: /sneakers/brands/{brandId}
    public List<Sneaker> getSneakersByBrandId(Long brandId){
        Optional<Brand> brand = brandRepo.findById(brandId);
        List<Sneaker> brandedSneakers = new ArrayList<>();
        for(Sneaker sneaker: sneakerRepo.findAll()){
            if (sneaker.getBrand().getId().equals(brand.get().getId())){
                brandedSneakers.add(sneaker);
            }
        }
        return brandedSneakers;
    }

    //search sneakers by model
    public List<Sneaker> getSneakersByModel(String model){
        List<Sneaker> sneakersByModel = new ArrayList<>();
        for(Sneaker sneaker: sneakerRepo.findAll()){
            if(sneaker.getModel().equalsIgnoreCase(model)){
                sneakersByModel.add(sneaker);
            }
        }
        return sneakersByModel;
    }

    //search sneakers by year
    public List<Sneaker> getSneakersByYear(Integer year){
        List<Sneaker> sneakersByYear = new ArrayList<>();
        for(Sneaker sneaker: sneakerRepo.findAll()){
            if(sneaker.getYear().equals(year)){
                sneakersByYear.add(sneaker);
            }
        }
        return sneakersByYear;
    }

    //add a sneaker
    //endpoint: /sneakers/{brandId}
    public void addSneaker(Long brandId, Sneaker sneaker){
        for(Brand brand: brandRepo.findAll()){
            if(brand.getId().equals(brandId) && sneaker.getBrand().getId().equals(brandId)){
                sneakerRepo.save(sneaker);
            }
        }
    }

    //update a sneaker by id
    //endpoint: /sneakers/{sneakerId}
    public void updateSneakerById(Long sneakerId, Sneaker sneaker){
        for (Sneaker sneak: sneakerRepo.findAll()){
            if(sneak.getId().equals(sneakerId)){
                sneaker.setId(sneakerId);
                sneakerRepo.save(sneaker);
            }
        }
    }

    //delete a sneaker from wish list
    //endpoint: /sneakers/{sneakerId}
    public void deleteSneakerById(Long sneakerId){
        sneakerRepo.deleteById(sneakerId);
    }
}
