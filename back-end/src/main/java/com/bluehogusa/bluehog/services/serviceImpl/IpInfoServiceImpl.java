package com.bluehogusa.bluehog.services.serviceImpl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bluehogusa.bluehog.domain.IPInfo;
import com.bluehogusa.bluehog.repository.IpInfoRepository;
import com.bluehogusa.bluehog.services.IpInfoService;
@Service
public class IpInfoServiceImpl implements IpInfoService {
    @Autowired
    private IpInfoRepository ipInfoRepository;

    @Override
    public Optional<IPInfo> getIpInfo(String ip) {
        Optional<IPInfo> ipInfo = ipInfoRepository.findById(ip);
        return ipInfo;
    }

    @Override
    public void saveIpInfo(IPInfo ipInfo) {
        ipInfoRepository.save(ipInfo);
    }

}
