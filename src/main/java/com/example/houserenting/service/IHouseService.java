package com.example.houserenting.service;

import com.example.houserenting.model.House;

public interface IHouseService extends IGeneralService<House>{

    Iterable<House>findAllByNameContaining(String name);

    Iterable<House>findAllByPriceBetween(int from, int to);
    Iterable<House> findAllByIdCategory(Long id);

    Iterable<House> findAllByAddressContaining(String address);

}
