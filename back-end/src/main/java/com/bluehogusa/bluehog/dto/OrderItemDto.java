package com.bluehogusa.bluehog.dto;

public record OrderItemDto(
        Integer productId,
        String name,
        Double price,
        Integer quantity) {

}
