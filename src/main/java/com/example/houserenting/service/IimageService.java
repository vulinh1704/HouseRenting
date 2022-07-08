package com.example.houserenting.service;

import com.example.houserenting.model.Image;
import org.springframework.data.repository.query.Param;

public interface IimageService extends IGeneralService<Image> {
    Iterable<Image> findAllByIdHouse(@Param("id") Long id);
}
