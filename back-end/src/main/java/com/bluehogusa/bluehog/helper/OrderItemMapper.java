package com.bluehogusa.bluehog.helper;

import com.bluehogusa.bluehog.domain.OrderItem;
import com.bluehogusa.bluehog.dto.OrderItemDto;

public class OrderItemMapper {
    public static OrderItem toOrderItem(OrderItemDto orderItemDto) {
        return new OrderItem(
                orderItemDto.productId(),
                orderItemDto.name(),
                orderItemDto.price(),
                orderItemDto.quantity());
    }

    public static OrderItemDto toOrderItemDto(OrderItem orderItem) {
        return new OrderItemDto(
                orderItem.getProductId(),
                orderItem.getName(),
                orderItem.getPrice(),
                orderItem.getQuantity());
    }

}
