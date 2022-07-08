package com.example.houserenting.repository;

import com.example.houserenting.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends JpaRepository<Image,Long> {

    @Query(value = "select *\n" +
            "from houserenting.image join houserenting.house h on image.id_house_id = h.id\n" +
            "where id_house_id = ?",nativeQuery = true)
    Iterable<Image> findAllByIdHouse(@Param("id") Long id);

}
