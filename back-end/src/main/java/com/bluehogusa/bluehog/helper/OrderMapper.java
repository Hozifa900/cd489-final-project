package com.bluehogusa.bluehog.helper;

import java.util.ArrayList;
import java.util.List;

import com.bluehogusa.bluehog.domain.Order;
import com.bluehogusa.bluehog.domain.OrderItem;
import com.bluehogusa.bluehog.dto.OrderDto;
import com.bluehogusa.bluehog.dto.OrderItemDto;

public class OrderMapper {
    public static Order toOrder(OrderDto orderDto) {
        List<OrderItem> orderItems = new ArrayList<>();
        for (OrderItemDto orderItemDto : orderDto.orderItems()) {
            orderItems.add(OrderItemMapper.toOrderItem(orderItemDto));
        }
        return new Order(
                orderDto.status(),
                UserMapper.toUser(orderDto.user()),
                orderItems);

    }

    public static OrderDto toOrderDto(Order order) {
        List<OrderItemDto> orderItemDtos = new ArrayList<>();
        for (OrderItem orderItem : order.getOrderItems()) {
            orderItemDtos.add(OrderItemMapper.toOrderItemDto(orderItem));
        }
        return new OrderDto(
                order.getId(),
                order.getStatus(),
                orderItemDtos,
                UserMapper.toUserDto(order.getUser()),
                order.getDate());
    }

}
