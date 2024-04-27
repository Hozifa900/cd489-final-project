package com.bluehogusa.bluehog.unitTests;

import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.bluehogusa.bluehog.domain.Order;
import com.bluehogusa.bluehog.domain.OrderItem;
import com.bluehogusa.bluehog.domain.User;
import com.bluehogusa.bluehog.dto.OrderDto;
import com.bluehogusa.bluehog.dto.OrderItemDto;
import com.bluehogusa.bluehog.dto.UserDto;
import com.bluehogusa.bluehog.helper.OrderMapper;

public class OrderMapperTests {
    private Order order;
    private OrderDto orderDto;

    @Before
    public void setUp() {
        OrderItem orderItem = new OrderItem(1, "name", 1.0, 1);
        OrderItemDto orderItemDto = new OrderItemDto(1, "name", 1.0, 1);
        List<OrderItem> orderItems = List.of(orderItem);
        List<OrderItemDto> orderItemDtos = List.of(orderItemDto);
        User user = new User("name", "email", "phone", "state", "city", "street", "zip");
        UserDto userDto = new UserDto("name", "email", "phone", "state", "city", "street", "zip");
        order = new Order(
                "status",
                user,
                orderItems);

        orderDto = new OrderDto(
                "1",
                "status",
                orderItemDtos,
                userDto,
                null);
    }

    @After
    public void tearDown() {
        order = null;
        orderDto = null;
    }

    @Test
    public void toOrderTest() {
        Order order = OrderMapper.toOrder(orderDto);
        assert (order.getStatus().equals("status"));
        assert (order.getUser().getName().equals("name"));
        assert (order.getUser().getEmail().equals("email"));
        assert (order.getUser().getPhone().equals("phone"));
        assert (order.getUser().getState().equals("state"));
        assert (order.getUser().getCity().equals("city"));
        assert (order.getUser().getStreet().equals("street"));
        assert (order.getUser().getZip().equals("zip"));
        assert (order.getOrderItems().get(0).getProductId() == 1);
        assert (order.getOrderItems().get(0).getName().equals("name"));
        assert (order.getOrderItems().get(0).getPrice() == 1.0);
        assert (order.getOrderItems().get(0).getQuantity() == 1);
    }

    @Test
    public void toOrderDtoTest() {
        OrderDto orderDto = OrderMapper.toOrderDto(order);
        assert (orderDto.status().equals("status"));
        assert (orderDto.user().name().equals("name"));
        assert (orderDto.user().email().equals("email"));
        assert (orderDto.user().phone().equals("phone"));
        assert (orderDto.user().state().equals("state"));
        assert (orderDto.user().city().equals("city"));
        assert (orderDto.user().street().equals("street"));
        assert (orderDto.user().zip().equals("zip"));
        assert (orderDto.orderItems().get(0).productId() == 1);
        assert (orderDto.orderItems().get(0).name().equals("name"));
        assert (orderDto.orderItems().get(0).price() == 1.0);
        assert (orderDto.orderItems().get(0).quantity() == 1);
    }

}
