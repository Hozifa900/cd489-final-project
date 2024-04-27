package com.bluehogusa.bluehog.services.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bluehogusa.bluehog.domain.Statistics;
import com.bluehogusa.bluehog.repository.StatisticsRepository;
import com.bluehogusa.bluehog.services.StatisticsService;

@Service
public class StatisticsServiceImpl implements StatisticsService {
    @Autowired
    private StatisticsRepository statisticsRepository;

    @Override
    public List<Statistics> getAllStatistics() {
        return statisticsRepository.findAll();
    }

    @Override
    public void saveStatistics(Statistics statistics) {
        statisticsRepository.save(statistics);
    }

    @Override
    public Optional<Statistics> getStatisticsById(Long id) {
        Optional<Statistics> statistics = statisticsRepository.findById(id);
        return statistics;

    }

    @Override
    public List<Statistics> getStatisticsByAction(String action) {
        List<Statistics> statistics = statisticsRepository.findByAction(action);
        return statistics;
    }

}
