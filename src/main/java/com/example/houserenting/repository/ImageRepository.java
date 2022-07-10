package com.example.houserenting.repository;

import com.example.houserenting.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

@Repository
public interface ImageRepository extends JpaRepository<Image,Long> {
    @Query(value = "select * from houserenting.image i where i.id_house_id = ?" , nativeQuery = true)
    Iterable<Image> findAllByIdHouse(@RequestParam("id") Long id);

}
