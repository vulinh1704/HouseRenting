package com.example.houserenting.repository;

import com.example.houserenting.model.Orderr;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OderRepository extends JpaRepository<Orderr,Long> {
    @Query(value = "select *\n" +
            "from houserenting.orderr join houserenting.house o on orderr.id_house_id = o.id\n" +
            "where id_house_id = ?",nativeQuery = true)
    Optional<Orderr> findAllByIdHouse(@Param("id") Long id);


    @Query(value = "select *\n" +
            "from houserenting.orderr join houserenting.house h on orderr.id_user_id = h.id\n" +
            "where id_user_id = ?",nativeQuery = true)
    Iterable<Orderr> findAllByIdUser(@Param("id") Long id);
}
