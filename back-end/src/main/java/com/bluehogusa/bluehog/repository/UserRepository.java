package com.bluehogusa.bluehog.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.bluehogusa.bluehog.domain.User;

public interface UserRepository extends MongoRepository<User, String> {

}
