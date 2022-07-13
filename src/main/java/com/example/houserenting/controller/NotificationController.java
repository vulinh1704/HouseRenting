package com.example.houserenting.controller;

import com.example.houserenting.model.House;
import com.example.houserenting.model.Notification;
import com.example.houserenting.service.impl.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/notifications")
public class NotificationController {
    @Autowired
    private NotificationService notificationService;

    @GetMapping
    public ResponseEntity<Iterable<Notification>> findAll() {
        return new ResponseEntity<>(notificationService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Notification> findById(@PathVariable Long id) {
        Optional<Notification> notificationOptional = notificationService.findById(id);
        if (!notificationOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(notificationOptional.get(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Notification> delete(@PathVariable Long id) {
        Optional<Notification> notificationOptional = notificationService.findById(id);
        if (!notificationOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        notificationService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity save(@RequestBody Notification notification) {
        notificationService.save(notification);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<Iterable<Notification>> findAllByIdUser(@PathVariable Long id) {
        return new ResponseEntity<>(notificationService.findAllByIdUser(id), HttpStatus.OK);
    }
}
