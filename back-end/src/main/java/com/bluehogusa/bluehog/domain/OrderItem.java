package com.bluehogusa.bluehog.domain;

public class OrderItem {

    private Integer productId;
    private String name;
    private Double price;
    private Integer quantity;

    public OrderItem() {

    }

    public OrderItem(Integer productId, String name, Double price, Integer quantity) {
        this.productId = productId;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    public Integer getProductId() {
        return productId;
    }

    public String getName() {
        return name;
    }

    public Double getPrice() {
        return price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "OrderItem [ name=" + name + ", price=" + price + ", productId="
                + productId + ", quantity=" + quantity + "]";
    }

}
