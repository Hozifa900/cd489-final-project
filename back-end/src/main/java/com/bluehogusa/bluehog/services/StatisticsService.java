package com.bluehogusa.bluehog.services;

import java.util.List;
import java.util.Optional;

import com.bluehogusa.bluehog.domain.Statistics;

public interface StatisticsService {
    public List<Statistics> getAllStatistics();

    public void saveStatistics(Statistics statistics);

    public Optional<Statistics> getStatisticsById(Long id);

    public List<Statistics> getStatisticsByAction(String action);

}
