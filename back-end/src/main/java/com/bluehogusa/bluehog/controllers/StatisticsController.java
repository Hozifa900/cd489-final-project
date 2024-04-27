package com.bluehogusa.bluehog.controllers;

import java.util.HashMap;
import java.util.List;
import java.time.*;
import java.util.Map;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.bluehogusa.bluehog.domain.IPInfo;
import com.bluehogusa.bluehog.domain.Statistics;
import com.bluehogusa.bluehog.services.IpInfoService;
import com.bluehogusa.bluehog.services.StatisticsService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/v1/statistics")
@CrossOrigin(origins = "*")
public class StatisticsController {
    @Autowired
    private StatisticsService statisticsService;
    @Autowired
    private IpInfoService ipInfoService;

    @PostMapping("")
    public ResponseEntity<?> getStatistics(HttpServletRequest request, @RequestBody Statistics statistics) {
        try {

            String userIP = statistics.getIp();
            String apiUrl = "https://ipapi.co/" + userIP + "/json/";

            RestTemplate restTemplate = new RestTemplate();
            IPInfo ipInfo = restTemplate.getForObject(apiUrl, IPInfo.class);

            // Statistics statistics = new Statistics();
            statistics.setCity(ipInfo.getCity());
            statistics.setCountry(ipInfo.getCountry());
            statistics.setRegion(ipInfo.getRegion());
            statisticsService.saveStatistics(statistics);
            // Use ipInfo as needed
        } catch (Exception e) {
            statisticsService.saveStatistics(statistics);
            e.printStackTrace();
        }
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Statistics saved successfully");
        response.put("status", Response.SC_OK);
        response.put("data", "[]");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
