package com.bluehogusa.bluehog.domain;

import java.time.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class IPInfo {
    private String id;
    private String ip;
    private String country;
    private String region;
    private String city;

    private LocalDateTime date = LocalDateTime.now();

}