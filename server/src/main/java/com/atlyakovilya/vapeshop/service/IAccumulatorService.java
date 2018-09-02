package com.atlyakovilya.vapeshop.service;

import com.atlyakovilya.vapeshop.entity.item.Accumulator;
import org.springframework.data.domain.Page;

import java.util.List;

public interface IAccumulatorService {

   void saveAccumulator(Accumulator accumulator);

   Accumulator getAccumulatorById(Long accumulatorId);

   List<Accumulator> getListOfAccumulators();

   void deleteAccumulatorById(Long accumulatorId);

   void updateAccumulator(Accumulator accumulator, Long accumulatorId);

   Page<Accumulator> getPageForAccumulatorList(int page);

}
