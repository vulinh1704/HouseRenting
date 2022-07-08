package com.example.houserenting.service.impl;

import com.example.houserenting.model.Orderr;
import com.example.houserenting.repository.OderRepository;
import com.example.houserenting.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OderService implements IOrderService {

    @Autowired
   private OderRepository oderRepository;

    @Override
    public Page<Orderr> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Iterable<Orderr> findAll() {
        return oderRepository.findAll();
    }

    @Override
    public void save(Orderr oder) {
        oderRepository.save(oder);
    }

    @Override
    public Optional<Orderr> findById(Long id) {
        return oderRepository.findById(id);
    }

    @Override
    public Optional<Orderr> findAllByIdHouse(Long id) {
        return oderRepository.findAllByIdHouse(id);
    }

    @Override
    public Iterable<Orderr> findAllByIdUser(Long id) {
        return oderRepository.findAllByIdUser(id);
    }
}
