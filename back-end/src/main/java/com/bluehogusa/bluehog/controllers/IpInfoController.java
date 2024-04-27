package com.bluehogusa.bluehog.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.bluehogusa.bluehog.domain.IPInfo;
import com.bluehogusa.bluehog.services.IpInfoService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("api/v1/ipinfo")
@CrossOrigin(origins = "*")
public class IpInfoController {
    @Autowired
    private IpInfoService ipInfoService;

    @GetMapping("")
    public ResponseEntity<?> getIpInfo(HttpServletRequest request) {
        try {
            String userIP = request.getRemoteAddr();
            String apiUrl = "https://ipapi.co/" + userIP + "/json/";
            RestTemplate restTemplate = new RestTemplate();
            System.out.println(restTemplate.getForObject(apiUrl, IPInfo.class));
            IPInfo ipInfo = restTemplate.getForObject(apiUrl, IPInfo.class);
            System.out.println(ipInfo);

            // Process ipInfo as needed
        } catch (Exception e) {
            e.printStackTrace();
            System.err.println("Internal server error");
        }

        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "IP information fetched successfully");
        response.put("status", HttpStatus.OK.value());
        response.put("data", null);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
