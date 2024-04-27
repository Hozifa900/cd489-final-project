package com.bluehogusa.bluehog.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.bluehogusa.bluehog.domain.Order;

public interface OrderRepository extends MongoRepository<Order, String> {
    public Order findOrderById(String id);

}