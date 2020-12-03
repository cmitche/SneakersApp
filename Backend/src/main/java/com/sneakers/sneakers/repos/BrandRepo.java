package com.sneakers.sneakers.repos;

import com.sneakers.sneakers.models.Brand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;
@CrossOrigin(origins = "http://localhost:4200")
@Repository
public interface BrandRepo extends JpaRepository<Brand, Long> {

    Optional<Brand> findByName(String brandName);
}
