package com.example.houserenting.controller;

import com.example.houserenting.model.Category;
import com.example.houserenting.model.House;
import com.example.houserenting.service.ICategory;
import com.example.houserenting.service.impl.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping
    public ResponseEntity<Iterable<House>> findAllCategory() {
        Iterable<Category> categories = categoryService.findAll();
      return new ResponseEntity(categories, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<House> findById(@PathVariable Long id) {
        Optional<Category> category = categoryService.findById(id);
        if (!category.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(category.get(), HttpStatus.OK);
    }


}
