package com.bluehogusa.bluehog.controllers;

import java.util.*;

import com.bluehogusa.bluehog.domain.IPInfo;
import com.bluehogusa.bluehog.domain.Order;
import com.bluehogusa.bluehog.dto.OrderDto;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import com.bluehogusa.bluehog.services.OrderService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/v1/orders")
@CrossOrigin(origins = "*")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("")
    public ResponseEntity<?> getOrders(HttpServletRequest request) {
        try {
            String userIP = "69.132.189.117";
            // request.getRemoteAddr();
            System.out.println(userIP);
            // Make request to ipapi API
            String apiUrl = "https://ipapi.co/" + userIP + "/json/";
            RestTemplate restTemplate = new RestTemplate();
            System.out.println(restTemplate.getForObject(apiUrl, IPInfo.class));
            IPInfo data = restTemplate.getForObject(apiUrl, IPInfo.class);
            System.out.println(data);
        } catch (Exception e) {
            e.printStackTrace();
            System.err.println("Internal server error rrrrrr");
        }

        List<OrderDto> orders = orderService.getOrders();
        Map<String, Object> response = new HashMap();
        response.put("success", true);
        response.put("message", "Orders fetched successfully");
        response.put("status", Response.SC_OK);
        response.put("data", orders);
        return new ResponseEntity<Map>(response, HttpStatus.OK);

    }

    @PutMapping("/{orderId}")
    public ResponseEntity<?> updateOrder(@RequestParam String status,
            @PathVariable String orderId) {
        orderService.updateOrderStatus(status, orderId);
        Map<String, Object> response = new HashMap();
        response.put("success", true);
        response.put("message", "Order status updated successfully");
        response.put("status", Response.SC_OK);

        response.put("data", null);
        return new ResponseEntity<Map>(response, HttpStatus.OK);

    }

    @PostMapping("")
    public ResponseEntity<?> checkoutOrder(@Validated @RequestBody OrderDto orderDto) {

        orderService.checkoutOrder(orderDto);
        Map<String, Object> response = new HashMap();
        response.put("success", true);
        response.put("message", "Order checked out successfully");
        response.put("status", Response.SC_CREATED);
        response.put("data", "");
        return new ResponseEntity<Map>(response, HttpStatus.CREATED);

    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Object> handleValidationExceptions(MethodArgumentNotValidException ex) {
        System.out.println("******************************************");
        System.out.println(ex.getBindingResult().getFieldErrors());
        Map<String, Object> fieldError = new HashMap<>();
        List<FieldError> fieldErrors = ex.getBindingResult().getFieldErrors();
        for (FieldError error : fieldErrors) {
            fieldError.put(error.getField(), error.getDefaultMessage());
        }

        Map<String, Object> map = new HashMap<>();
        map.put("Success", false);
        map.put("data", null);
        map.put("status", HttpStatus.BAD_REQUEST);
        map.put("message", "Validation error");
        map.put("fieldError", fieldError);
        return new ResponseEntity<Object>(map, HttpStatus.BAD_REQUEST);
    }

}
