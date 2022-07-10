package com.example.houserenting.service.impl;
import com.example.houserenting.model.House;
import com.example.houserenting.repository.HouseRepository;
import com.example.houserenting.service.IHouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.Optional;
@Service
public class HouseService implements IHouseService {
    @Autowired
    private HouseRepository houseRepository;
    @Override
    public Page<House> findAll(Pageable pageable) {
        return houseRepository.findAll(pageable);
    }

    @Override
    public Iterable<House> findAll() {
        return houseRepository.findAll();
    }

    @Override
    public void save(House house) {
        houseRepository.save(house);
    }

    @Override
    public Optional<House> findById(Long id) {
        return houseRepository.findById(id);
    }

    @Override
    public Iterable<House> findAllByNameContaining(String name) {
        return houseRepository.findAllByNameContaining(name);
    }

    @Override
    public Iterable<House> findAllByPriceBetween(int from, int to) {
        return houseRepository.findAllByPriceBetween(from, to);
    }

    @Override
    public Iterable<House> findAllByIdCategory(Long id) {
        return houseRepository.findAllByIdCategory(id);
    }


    @Override
    public Iterable<House> findAllByAddressContaining(String address) {
        return houseRepository.findAllByAddressContaining(address);
    }

    @Override
    public Iterable<House> findAllByNameContainingAndPriceBetween(String name, int from, int to) {
        return houseRepository.findAllByNameContainingAndPriceBetween(name, from, to);
    }

    @Override
    public Iterable<House> findAllByIdUserOwner(Long id) {
        return houseRepository.findAllByIdUserOwner(id);
    }

    public House saveHouse(House house){
        return houseRepository.save(house);
    }
}
