package com.bluehogusa.bluehog.services;

import java.util.Optional;

import com.bluehogusa.bluehog.domain.IPInfo;

public interface IpInfoService {

    public Optional<IPInfo> getIpInfo(String ip);

    public void saveIpInfo(IPInfo ipInfo);

}
