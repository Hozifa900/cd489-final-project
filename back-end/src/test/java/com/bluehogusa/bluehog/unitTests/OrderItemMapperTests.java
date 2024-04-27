package com.bluehogusa.bluehog.unitTests;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.bluehogusa.bluehog.domain.OrderItem;
import com.bluehogusa.bluehog.dto.OrderItemDto;
import com.bluehogusa.bluehog.helper.OrderItemMapper;

public class OrderItemMapperTests {
    private OrderItem orderItem;
    private OrderItemDto orderItemDto;

    @Before
    public void setUp() {
        orderItem = new OrderItem(1, "name", 1.0, 1);
        orderItemDto = new OrderItemDto(1, "name", 1.0, 1);
    }

    @After
    public void tearDown() {
        orderItem = null;
        orderItemDto = null;
    }

    @Test
    public void toOrderItemTest() {
        OrderItem orderItem = OrderItemMapper.toOrderItem(orderItemDto);
        assert (orderItem.getProductId() == 1);
        assert (orderItem.getName().equals("name"));
        assert (orderItem.getPrice() == 1.0);
        assert (orderItem.getQuantity() == 1);
    }

    @Test
    public void toOrderItemDtoTest() {
        OrderItemDto orderItemDto = OrderItemMapper.toOrderItemDto(orderItem);
        assert (orderItemDto.productId() == 1);
        assert (orderItemDto.name().equals("name"));
        assert (orderItemDto.price() == 1.0);
        assert (orderItemDto.quantity() == 1);
    }

}
