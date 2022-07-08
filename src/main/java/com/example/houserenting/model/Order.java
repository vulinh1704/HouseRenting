package com.example.houserenting.model;
import javax.persistence.*;
import java.time.LocalDate;
@Entity
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private House idHouse;
    @ManyToOne
    private User idUser;
    private LocalDate startTime;
    private LocalDate endTime;
    private int total;
    public Order() {
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public House getIdHouse() {
        return idHouse;
    }
    public void setIdHouse(House idHouse) {
        this.idHouse = idHouse;
    }
    public User getIdUser() {
        return idUser;
    }

    public void setIdUser(User idUser) {
        this.idUser = idUser;
    }

    public LocalDate getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDate startTime) {
        this.startTime = startTime;
    }

    public LocalDate getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDate endTime) {
        this.endTime = endTime;
    }

    public int getTotal() {
        return total ;
    }

    public void setTotal(int total) {
        this.total =total;
    }
}
