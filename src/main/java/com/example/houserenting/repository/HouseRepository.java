package com.example.houserenting.repository;

import com.example.houserenting.model.House;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HouseRepository extends JpaRepository<House,Long> {

    Iterable<House>findAllByNameContaining(String name);

    Iterable<House>findAllByPriceBetween(int from, int to);
    Iterable<House> findAllByIdCategory(Long id);
    Iterable<House> findAllByAddressContaining(String address);








    

}
