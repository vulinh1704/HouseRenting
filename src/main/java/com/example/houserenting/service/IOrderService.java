package com.example.houserenting.service;

import com.example.houserenting.model.Orderr;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface IOrderService extends IGeneralService<Orderr> {
    Optional<Orderr> findAllByIdHouse(Long id);

    Iterable<Orderr> findAllByIdUser(@Param("id") Long id);
}
