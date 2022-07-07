package com.example.houserenting.service;

import com.example.houserenting.model.Image;

public interface IimageService extends IGeneralService<Image> {
    Iterable<Image> findAllByIdHouse(Long id);
}
