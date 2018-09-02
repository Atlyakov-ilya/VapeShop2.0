package com.atlyakovilya.vapeshop.entity.item;

import javax.persistence.*;

@Entity
@Table(name = "t_item_liquid")
public class Liquid {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "F_ITEM_ID")
    private Long liquidId;
    @Column(name = "F_BRAND")
    private String brand;
    @Column(name = "F_NAME_OF_MODEL")
    private String name;
    @Column(name = "F_AMOUNT")
    private String amount;
    @Column(name = "F_DESCRIPTION")
    private String description;
    @Column(name = "F_NICOTINE")
    private Integer nicotine;
    @Column(name = "F_TASTE")
    private String taste;
    @Column(name = "F_COMPOSITION")
    private String composition;
    @Column(name = "F_PRICE")
    private Integer price;
    @Column(name = "F_QUANTITY")
    private Integer quantity;
    @Column(name = "F_LIQUID_IMG_NAME")
    private String liquidFileName;

    public Liquid() { }

    public Liquid(String brand, String name, String amount, String description,
                  Integer nicotine, String taste, String composition, Integer price, Integer quantity, String liquidFileName) {
        this.brand = brand;
        this.name = name;
        this.amount = amount;
        this.description = description;
        this.nicotine = nicotine;
        this.taste = taste;
        this.composition = composition;
        this.price = price;
        this.quantity = quantity;
        this.liquidFileName = liquidFileName;
    }

    public Long getLiquidId() {
        return liquidId;
    }

    public void setLiquidId(Long liquidId) {
        this.liquidId = liquidId;
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

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getNicotine() {
        return nicotine;
    }

    public void setNicotine(Integer nicotine) {
        this.nicotine = nicotine;
    }

    public String getTaste() {
        return taste;
    }

    public void setTaste(String taste) {
        this.taste = taste;
    }

    public String getComposition() {
        return composition;
    }

    public void setComposition(String composition) {
        this.composition = composition;
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

    public String getLiquidFileName() {
        return liquidFileName;
    }

    public void setLiquidFileName(String liquidFileName) {
        this.liquidFileName = liquidFileName;
    }
}
