package com.bluehogusa.bluehog.dto;

import java.time.LocalDateTime;
import java.util.List;

public record OrderDto(
        String id,
        String status,
        List<OrderItemDto> orderItems,
        UserDto user,
        LocalDateTime date) {

}
