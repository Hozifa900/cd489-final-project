package com.bluehogusa.bluehog.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.bluehogusa.bluehog.domain.Statistics;
import java.util.List;


public interface StatisticsRepository extends MongoRepository<Statistics, Long> {
 List<Statistics> findByAction(String action);     
}
