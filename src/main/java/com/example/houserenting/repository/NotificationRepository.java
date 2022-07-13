package com.example.houserenting.repository;

import com.example.houserenting.model.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface NotificationRepository extends JpaRepository<Notification,Long> {
    @Query(value = "select * from notification where notification.user_id = ?" , nativeQuery = true)
    Iterable<Notification> findAllByIdUser(@Param("id") Long id);
}
