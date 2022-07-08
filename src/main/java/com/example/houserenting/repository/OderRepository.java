package com.example.houserenting.repository;

import com.example.houserenting.model.Orderr;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OderRepository extends JpaRepository<Orderr,Long> {
}
