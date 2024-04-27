package com.bluehogusa.bluehog.intigrationTests;

import java.util.ArrayList;
import java.util.List;

import org.junit.BeforeClass;
import org.junit.Test;

import com.bluehogusa.bluehog.domain.Order;
import com.bluehogusa.bluehog.dto.*;

import io.restassured.RestAssured;

public class OrderRestTests {
    @BeforeClass
    public static void setup() {
        System.setProperty("spring.profiles.active", "test");
        RestAssured.baseURI = "http://localhost";
        RestAssured.port = 3006;
        RestAssured.basePath = "/api/v1/orders";
    }

    @Test
    public void testGetOrders() {
        RestAssured.given().when().get().then().statusCode(200);
    }

    @Test
    public void testCreateOrder() {
        List<OrderItemDto> orderItemDtos = new ArrayList<>();
        OrderItemDto orderItemDto = new OrderItemDto(1, "name", 1.0, 1);
        orderItemDtos.add(orderItemDto);
        OrderDto orderDto = new OrderDto(
                null,
                "status",
                orderItemDtos,
                new UserDto("name", "email", "phone", "state", "city", "street", "zip"),
                null);

        RestAssured.given()
                .contentType("application/json")
                .body(orderDto)
                .when()
                .post()
                .then()
                .statusCode(201);

    }

    @Test
    public void testUpdateOrderStatusForUndefinedId() {

        RestAssured.given().when().put("/2?status='shipping'").then().statusCode(500);
    }

}
