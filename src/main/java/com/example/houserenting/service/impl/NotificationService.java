package com.example.houserenting.service.impl;

import com.example.houserenting.model.Notification;
import com.example.houserenting.repository.NotificationRepository;
import com.example.houserenting.service.INotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class NotificationService implements INotificationService {

    @Autowired
    private NotificationRepository notificationRepository;

    @Override
    public Page<Notification> findAll(Pageable pageable) {
        return notificationRepository.findAll(pageable);
    }

    @Override
    public Iterable<Notification> findAll() {
        return notificationRepository.findAll();
    }

    @Override
    public void save(Notification notification) {
        notificationRepository.save(notification);
    }

    @Override
    public Optional<Notification> findById(Long id) {
        return notificationRepository.findById(id);
    }

    public void delete(Long id) {
        notificationRepository.deleteById(id);
    }

    public Iterable<Notification> findAllByIdUser(Long id){
        return notificationRepository.findAllByIdUser(id);
    }
}
