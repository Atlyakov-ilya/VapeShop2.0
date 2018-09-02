package com.atlyakovilya.vapeshop.service;

import com.atlyakovilya.vapeshop.entity.item.Liquid;


import java.util.List;

public interface ILiquidService {

    void saveLiquid(Liquid liquid);

    List<Liquid> getAllLiquids();

    void deleteLiquidById(Long liquidId);

    Liquid getLiquidById(Long liquidId);

    void updateLiquid(Liquid liquid, Long liquidId);
}
