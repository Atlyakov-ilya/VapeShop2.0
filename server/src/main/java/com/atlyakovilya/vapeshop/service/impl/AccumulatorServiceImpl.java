package com.atlyakovilya.vapeshop.service.impl;

import com.atlyakovilya.vapeshop.entity.item.Accumulator;
import com.atlyakovilya.vapeshop.repodsitory.IAccumulatorRepository;
import com.atlyakovilya.vapeshop.service.IAccumulatorService;
import com.atlyakovilya.vapeshop.service.IStorageFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.atlyakovilya.vapeshop.service.IStorageFileService.FILE_STORAGE;

@Service
public class AccumulatorServiceImpl implements IAccumulatorService {

    @Autowired
    IAccumulatorRepository accumulatorRepository;
    @Autowired
    IStorageFileService fileService;

    @Override
    public void saveAccumulator(Accumulator accumulator) {
        accumulator.setFileName(FILE_STORAGE + accumulator.getFileName());
        accumulatorRepository.save(accumulator);
    }

    @Override
    public Accumulator getAccumulatorById(Long accumulatorId) {
        return accumulatorRepository.findById(accumulatorId).get();
    }

    @Override
    public List<Accumulator> getListOfAccumulators() {
        return accumulatorRepository.findAll();
    }

    @Override
    public void deleteAccumulatorById(Long accumulatorId) {
        String path = accumulatorRepository.getOne(accumulatorId).getFileName();
        accumulatorRepository.deleteById(accumulatorId);
        fileService.deleteFileFromStorage(path);
    }

    @Override
    public void updateAccumulator(Accumulator accumulator, Long accumulatorId) {
        Accumulator updatableAccumulator = accumulatorRepository.getOne(accumulatorId);
        updatableAccumulator.setBrand(accumulator.getBrand());
        updatableAccumulator.setNameOfModel(accumulator.getName());
        updatableAccumulator.setFormat(accumulator.getFormat());
        updatableAccumulator.setCapacity(accumulator.getCapacity());
        updatableAccumulator.setDescription(accumulator.getDescription());
        updatableAccumulator.setPrice(accumulator.getPrice());
        updatableAccumulator.setQuantity(accumulator.getQuantity());
        if(!accumulator.getFileName().equals(updatableAccumulator.getFileName())){
            String oldFileName = updatableAccumulator.getFileName().replaceAll(FILE_STORAGE, "");
            fileService.deleteFileFromStorage(oldFileName);
            updatableAccumulator.setFileName(FILE_STORAGE + accumulator.getFileName());
        }
        accumulatorRepository.save(updatableAccumulator);
    }

    @Override
    public Page<Accumulator> getPageForAccumulatorList(int page) {
        return accumulatorRepository.findAll(PageRequest.of(page, 3));
    }
}
