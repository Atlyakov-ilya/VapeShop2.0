package com.atlyakovilya.vapeshop.entity.item;

import javax.persistence.*;

@Entity
@Table(name="t_accumulator")
public class Accumulator {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "F_ACCUMULATOR_ID")
    private Long accumulatorId;
    @Column(name = "F_BRAND")
    private String brand;
    @Column(name = "F_NAME")
    private String name;
    @Column(name = "F_FORMAT")
    private Integer format;
    @Column(name = "F_CAPACITY")
    private String capacity;
    @Column(name = "F_DESCRIPTION")
    private String description;
    @Column(name = "F_PRICE")
    private Integer price;
    @Column(name = "F_QUANTITY")
    private Integer quantity;
    @Column(name = "F_FILE_NAME")
    private String fileName;

    public Accumulator() {
    }

    public Accumulator(String brand, String name, Integer format, String capacity, String description, Integer price,
                       Integer quantity, String fileName) {
        this.brand = brand;
        this.name = name;
        this.format = format;
        this.capacity = capacity;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.fileName = fileName;
    }

    public Long getAccumulatorId() {
        return accumulatorId;
    }

    public void setAccumulatorId(Long accumulatorId) {
        this.accumulatorId = accumulatorId;
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

    public void setNameOfModel(String name) {
        this.name = name;
    }

    public Integer getFormat() {
        return format;
    }

    public void setFormat(Integer format) {
        this.format = format;
    }

    public String getCapacity() {
        return capacity;
    }

    public void setCapacity(String capacity) {
        this.capacity = capacity;
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
