package com.bluehogusa.bluehog.services;

import java.util.List;
import com.bluehogusa.bluehog.dto.OrderDto;

public interface OrderService {

    public List<OrderDto> getOrders();

    public void updateOrderStatus(String status, String orderId);

    public void checkoutOrder(OrderDto orderDto);

    // public OrderDto findById(String orderId);
}