package com.example.houserenting.repository;

import com.example.houserenting.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends JpaRepository<Image,Long> {
    Iterable<Image> findAllByIdHouse(Long id);

}
