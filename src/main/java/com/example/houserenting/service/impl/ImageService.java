package com.example.houserenting.service.impl;

import com.example.houserenting.model.Image;
import com.example.houserenting.repository.ImageRepository;
import com.example.houserenting.service.IHouseService;
import com.example.houserenting.service.IimageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ImageService implements IimageService {
    @Autowired
    ImageRepository imageRepository;

    @Override
    public Page<Image> findAll(Pageable pageable) {
        return imageRepository.findAll(pageable);
    }

    @Override
    public Iterable<Image> findAll() {
        return imageRepository.findAll();
    }

    @Override
    public void save(Image image) {
        imageRepository.save(image);
    }

    @Override
    public Optional<Image> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public Iterable<Image> findAllByIdHouse(Long id) {
        return imageRepository.findAllByIdHouse(id);
    }
}
