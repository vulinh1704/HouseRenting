package com.example.houserenting.service;

import com.example.houserenting.model.House;
import org.springframework.data.repository.query.Param;

public interface IHouseService extends IGeneralService<House>{

    Iterable<House>findAllByNameContaining(String name);

    Iterable<House>findAllByPriceBetween(int from, int to);
    Iterable<House> findAllByIdCategory(@Param("id") Long id );

    Iterable<House> findAllByAddressContaining(String address);

    Iterable<House> findAllByNameContainingAndPriceBetween(@Param("name") String name, @Param("from") int from, @Param("to") int to);

    Iterable<House> findAllByIdUserOwner(@Param("id") Long id);

}
