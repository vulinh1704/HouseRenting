package com.example.houserenting.service.impl;

import com.example.houserenting.model.Oder;
import com.example.houserenting.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OderService implements OrderService {

    @Autowired
    private OrderService orderService;

    @Override
    public Page<Oder> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Iterable<Oder> findAll() {
        return orderService.findAll();
    }

    @Override
    public void save(Oder oder) {
        orderService.save(oder);
    }

    @Override
    public Optional<Oder> findById(Long id) {
        return Optional.empty();
    }
}
