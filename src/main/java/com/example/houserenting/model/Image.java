package com.example.houserenting.model;
import javax.persistence.*;
@Entity
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String image;
    @ManyToOne
    private House idHouse;
    public Image() {
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getImage() {
        return image;
    }
    public void setImage(String image) {
        this.image = image;
    }
    public House getIdHouse() {
        return idHouse;
    }
    public void setIdHouse(House idHouse) {
        this.idHouse = idHouse;
    }
}
