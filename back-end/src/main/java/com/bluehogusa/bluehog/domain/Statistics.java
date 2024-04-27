package com.bluehogusa.bluehog.domain;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public class Statistics extends IPInfo {
    private String action;

    public void setAction(String action) {
        this.action = action;
    }

    public String getAction() {
        return action;
    }
}
