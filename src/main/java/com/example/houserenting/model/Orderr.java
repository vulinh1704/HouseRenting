package com.example.houserenting.model;
import javax.persistence.*;
import java.time.LocalDate;
@Entity
public class Orderr {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private House idHouse;
    @ManyToOne
    private User idUser;
    private String startTime;
    private String endTime;
    private int total;
    public Orderr() {
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

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public int getTotal() {
        return total ;
    }

    public void setTotal(int total) {
        this.total =total;
    }
}
