package com.bluehogusa.bluehog.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.bluehogusa.bluehog.domain.IPInfo;

public interface IpInfoRepository extends MongoRepository<IPInfo, String> {

}
