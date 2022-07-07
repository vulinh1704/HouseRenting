package com.example.houserenting.controller;

import com.example.houserenting.model.Category;
import com.example.houserenting.model.House;
import com.example.houserenting.model.Image;
import com.example.houserenting.service.impl.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/images")
public class ImageController {
    @Autowired
    private ImageService imageService;

    @GetMapping()
    public ResponseEntity<Iterable<Image>> findAll() {
        Iterable<Image> images = imageService.findAll();
        return new ResponseEntity(images, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Iterable<Image>> findAllHouseId(@PathVariable("id") Long id) {
        Iterable<Image> images = imageService.findAllByIdHouse(id);
        return new ResponseEntity(images, HttpStatus.OK);
    }

}
