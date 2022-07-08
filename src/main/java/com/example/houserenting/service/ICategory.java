package com.example.houserenting.service;

import com.example.houserenting.model.Category;
import com.example.houserenting.service.IGeneralService;

public interface ICategory extends IGeneralService<Category> {
    Iterable<Category>findCategoryById(Long id);

    Iterable<Category>findAllByNameContaining(String name);
}
