package com.sneakers.sneakers.repos;

import com.sneakers.sneakers.models.Sneaker;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@Repository
public interface SneakerRepo extends CrudRepository<Sneaker, Long> {
}
