package com.atlyakovilya.vapeshop.service;

import com.atlyakovilya.vapeshop.entity.item.RDA;

import java.util.List;

public interface IRDAService {

    void saveRDA(RDA rda);

    List<RDA> getAllRDA();

    void deleteRDAById(Long RDAId);

    RDA getRDAById(Long RDAId);

    void updateRDA(RDA rda, Long RDAId);
}
