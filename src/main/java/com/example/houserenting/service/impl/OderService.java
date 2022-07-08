package com.example.houserenting.service.impl;

import com.example.houserenting.model.Order;
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
    public Page<Order> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Iterable<Order> findAll() {
        return orderService.findAll();
    }

    @Override
    public void save(Order oder) {
        orderService.save(oder);
    }

    @Override
    public Optional<Order> findById(Long id) {
        return Optional.empty();
    }
}
