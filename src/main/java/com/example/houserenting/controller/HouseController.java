package com.example.houserenting.controller;

import com.example.houserenting.model.House;
import com.example.houserenting.service.impl.HouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/house")
public class HouseController {
    @Autowired
    private HouseService houseService;

//    HouseService houseService = new HouseService();

    @GetMapping
    public ResponseEntity<Page<House>> findAllHouse(@PageableDefault(value = 6)  Pageable pageable) {
        Page<House> houses = houseService.findAll(pageable);
        if (houses.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(houses, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<House> findById(@PathVariable Long id) {
        Optional<House> houseOptional = houseService.findById(id);
        if (!houseOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(houseOptional.get(), HttpStatus.OK);
    }

    @GetMapping("/category/{id}")
    public ResponseEntity< Iterable<House> > findByIdCategory(@PathVariable Long id) {
        Iterable<House> houses = houseService.findAllByIdCategory(id);
        return new ResponseEntity<>(houses, HttpStatus.OK);
    }

//    Cái này là hàm save thường
    @PostMapping
    public ResponseEntity<House> saveProduct ( @RequestBody House house) {
        houseService.save(house);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<House> updateHouse (@PathVariable Long id,@RequestBody House house) {
        Optional<House> houseOptional = houseService.findById(id);
        if (!houseOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        house.setId(houseOptional.get().getId());
        houseService.save(house);
        return new ResponseEntity<>( HttpStatus.OK);
    }

    @GetMapping("/by-price-between")
    public ResponseEntity<Iterable<House>> findAllByPriceBetween(@RequestParam int from, @RequestParam int to) {
        Iterable<House> houses = (Iterable<House>) houseService.findAllByPriceBetween(from,to);
        return new ResponseEntity<>(houses, HttpStatus.OK);
    }

    @GetMapping("/by-address")
    public ResponseEntity<Iterable<House>> findAllByAddress(@RequestParam ("address") String  address ) {
        Iterable<House> houses = (Iterable<House>) houseService.findAllByAddressContaining(address);
        return new ResponseEntity<>(houses, HttpStatus.OK);
    }

    @GetMapping("/by-price-between-name")
    public ResponseEntity<Iterable<House>> findAllByPriceByName(@RequestParam String name,@RequestParam int from,@RequestParam int to) {
        Iterable<House> houses = houseService.findAllByNameContainingAndPriceBetween(name, from, to);
        return new ResponseEntity<>(houses, HttpStatus.OK);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity< Iterable<House> > findByIdUserOwner(@PathVariable Long id) {
        Iterable<House> houses = houseService.findAllByIdUserOwner(id);
        return new ResponseEntity<>(houses, HttpStatus.OK);
    }

//    @PutMapping("/{id}")
//    public ResponseEntity<House> updateStatus (@PathVariable Long id,@RequestBody House house) {
//        Optional<House> houseOptional = houseService.findById(id);
//        if (!houseOptional.isPresent()) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//        houseOptional.get().getStatus();
//        houseService.save(house);
//        return new ResponseEntity<>( HttpStatus.OK);
//    }





}
