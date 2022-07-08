package com.example.houserenting.model;
import javax.persistence.*;
@Entity
public class House {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String address;
    private String bedroom;
    private String bathroom;
    private String description;
    private int price;
    private int status;
    @ManyToOne
    private Category idCategory;
    @ManyToOne
    private User idUserOwner;
    public House() {
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getBedroom() {
        return bedroom;
    }
    public void setBedroom(String bedroom) {
        this.bedroom = bedroom;
    }
    public String getBathroom() {
        return bathroom;
    }
    public void setBathroom(String bathroom) {
        this.bathroom = bathroom;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public int getPrice() {
        return price;
    }
    public void setPrice(int price) {
        this.price = price;
    }
    public int getStatus() {
        return status;
    }
    public void setStatus(int status) {
        this.status = status;
    }
    public Category getIdCategory() {
        return idCategory;
    }
    public void setIdCategory(Category idCategory) {
        this.idCategory = idCategory;
    }
    public User getIdUserOwner() {
        return idUserOwner;
    }
    public void setIdUserOwner(User idUserOwner) {
        this.idUserOwner = idUserOwner;
    }
}
