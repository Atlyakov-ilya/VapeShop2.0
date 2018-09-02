package com.atlyakovilya.vapeshop.entity.item;

import javax.persistence.*;

@Entity
@Table(name="t_mechanical_mod")
public class MechanicalMod {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "F_MECHANICAL_MOD_ID")
    private Long mechanicalModId;
    @Column(name = "F_BRAND")
    private String brand;
    @Column(name = "F_NAME")
    private String name;
    @Column(name = "F_DIAMETER")
    private Integer diameter;
    @Column(name = "F_MATERIAL")
    private String material;
    @Column(name = "F_DESCRIPTION")
    private String description;
    @Column(name = "F_PRICE")
    private Integer price;
    @Column(name = "F_QUANTITY")
    private Integer quantity;
    @Column(name = "F_FILE_NAME")
    private String fileName;

    public MechanicalMod() {}

    public MechanicalMod(String brand, String name, Integer diameter, String material, String description, Integer price, Integer quantity, String fileName) {
        this.brand = brand;
        this.name = name;
        this.diameter = diameter;
        this.material = material;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.fileName = fileName;
    }

    public Long getMechanicalModId() {
        return mechanicalModId;
    }

    public void setMechanicalModId(Long mechanicalModId) {
        this.mechanicalModId = mechanicalModId;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getDiameter() {
        return diameter;
    }

    public void setDiameter(Integer diameter) {
        this.diameter = diameter;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }
}
