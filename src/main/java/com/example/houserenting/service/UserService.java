package com.example.houserenting.service;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.Optional;

public interface UserService extends UserDetailsService {
    void save(com.example.houserenting.model.User user);

    void save(User user);

    Iterable<com.example.houserenting.model.User> findAll();

    com.example.houserenting.model.User findByUsername(String username);

    com.example.houserenting.model.User getCurrentUser();

    Optional<com.example.houserenting.model.User> findById(Long id);

    UserDetails loadUserById(Long id);

    boolean checkLogin(User user);

    boolean isRegister(User user);

    boolean isCorrectConfirmPassword(User user);

    boolean checkLogin(com.example.houserenting.model.User user);

    boolean isRegister(com.example.houserenting.model.User user);

    boolean isCorrectConfirmPassword(com.example.houserenting.model.User user);
}