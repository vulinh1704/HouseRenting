package com.example.houserenting.service.impl;

import com.example.houserenting.model.Category;
import com.example.houserenting.repository.CategoryRepository;
import com.example.houserenting.service.ICategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class CategoryService implements ICategory {


    @Autowired
    CategoryRepository categoryRepository;

    @Override
    public Page<Category> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Iterable<Category> findAll() {
        return categoryRepository.findAll();
    }

    @Override
    public void save(Category category) {

    }

    @Override
    public Optional<Category> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public Iterable<Category> findCategoryById(Long id) {
        return categoryRepository.findCategoryById(id);
    }

    @Override
    public Iterable<Category> findAllByNameContaining(String name) {
        return categoryRepository.findAllByNameContaining(name);
    }
}
