package com.sneakers.sneakers.controllers;

import com.sneakers.sneakers.models.Sneaker;
import com.sneakers.sneakers.services.SneakerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class SneakerController {

    @Autowired
    SneakerService sneakerService;

    //get all sneakers
    @RequestMapping(method = RequestMethod.GET, value = "/sneakers")
    public List<Sneaker> getAllSneakers(){
        return sneakerService.getAllSneakers();
    }

    //get sneaker by id
    @RequestMapping(method = RequestMethod.GET, value = "/sneakers/{sneakerId}")
    public Optional<Sneaker> getSneakerById(@PathVariable Long sneakerId){
        return sneakerService.getSneakerById(sneakerId);
    }

    //get sneakers by brand id
    @RequestMapping(method = RequestMethod.GET, value = "sneakers/brands/{brandId}")
    public List<Sneaker> getSneakerByBrand(@PathVariable Long brandId){
        return sneakerService.getSneakersByBrandId(brandId);
    }

   //search sneakers by model
    @RequestMapping(method = RequestMethod.GET, value = "sneakers/brands/models/{model}")
    public List<Sneaker> getSneakersByModel(@PathVariable String model){
        return sneakerService.getSneakersByModel(model);
    }

    //search sneakers by year
    @RequestMapping(method = RequestMethod.GET, value = "sneakers/brands/years/{year}")
    public List<Sneaker> getSneakersByYear(@PathVariable Integer year){
        return sneakerService.getSneakersByYear(year);
    }

    //add a sneaker
    @RequestMapping(method = RequestMethod.POST, value = "/sneakers/{brandId}")
    public void addSneaker(@PathVariable Long brandId, @RequestBody Sneaker sneaker){
        sneakerService.addSneaker(brandId, sneaker);
    }

    //update a sneaker
    @RequestMapping(method = RequestMethod.PUT, value = "/sneakers/{sneakerId}")
    public void updateSneaker(@PathVariable Long sneakerId, @RequestBody Sneaker sneaker){
        sneakerService.updateSneakerById(sneakerId, sneaker);
    }

    //delete a sneakerById
    @RequestMapping(method = RequestMethod.DELETE, value = "/sneakers/{sneakerId}")
    public void deleteSneaker(@PathVariable Long sneakerId){
        sneakerService.deleteSneakerById(sneakerId);
    }
}
