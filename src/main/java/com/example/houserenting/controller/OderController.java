package com.example.houserenting.controller;

import com.example.houserenting.model.Category;
import com.example.houserenting.model.House;
import com.example.houserenting.model.Image;
import com.example.houserenting.model.Orderr;
import com.example.houserenting.service.impl.OderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping("/oder")
@CrossOrigin("*")
public class OderController {

    @Autowired
    private OderService oderService;

    @GetMapping()
    public ResponseEntity<Iterable<Orderr>> findAll() {
        Iterable<Orderr> orderrs = oderService.findAll();
        return new ResponseEntity(orderrs, HttpStatus.OK);
    }

//    @GetMapping("/{id}")
//    public ResponseEntity<Iterable<Orderr>> findAllOderId(@PathVariable("id") Long id) {
//        Iterable<Orderr> orderrs = findAllOderId(id);
//        return new ResponseEntity(orderrs, HttpStatus.OK);
//    }

    @GetMapping("/{id}")
    public ResponseEntity<Orderr> findById(@PathVariable Long id) {
        Optional<Orderr> orderr = oderService.findById(id);
        return new ResponseEntity(orderr.get(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Orderr> saveOder ( @RequestBody Orderr orderr) {
        oderService.save(orderr);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/byOrder")
    public ResponseEntity<Orderr> findByIdHouse(@RequestParam Long id) {
        Optional<Orderr> orders = oderService.findAllByIdHouse(id);
        return new ResponseEntity(orders, HttpStatus.OK);
    }

    @GetMapping("/byIdUser/{id}")
    public ResponseEntity<Orderr> findByIdUser(@PathVariable Long id) {
        Iterable<Orderr> orders = oderService.findAllByIdUser(id);
        return new ResponseEntity(orders, HttpStatus.OK);
    }



}
