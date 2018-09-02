package com.atlyakovilya.vapeshop.service.impl;

import com.atlyakovilya.vapeshop.entity.item.Liquid;
import com.atlyakovilya.vapeshop.repodsitory.ILiquidRepository;
import com.atlyakovilya.vapeshop.service.ILiquidService;
import com.atlyakovilya.vapeshop.service.IStorageFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import static com.atlyakovilya.vapeshop.service.IStorageFileService.FILE_STORAGE;

@Service
public class LiquidServiceImpl implements ILiquidService {

    @Autowired
    ILiquidRepository liquidRepository;

    @Autowired
    IStorageFileService fileService;

    @Override
    public void saveLiquid(Liquid liquid) {
        liquid.setLiquidFileName(FILE_STORAGE + liquid.getLiquidFileName());
        liquidRepository.save(liquid);
    }

    @Override
    public List<Liquid> getAllLiquids() {
        return liquidRepository.findAll();
    }


    @Override
    public void deleteLiquidById(Long liquidId) {
        String path = liquidRepository.getOne(liquidId).getLiquidFileName();
        liquidRepository.deleteById(liquidId);
        String file = path.replace(FILE_STORAGE, "");
        Path localPath = Paths.get("upload-dir/" + file);
        try {
            Files.delete(localPath);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public Liquid getLiquidById(Long liquidId) {
        return liquidRepository.findById(liquidId).get();
    }

    @Override
    public void updateLiquid(Liquid liquid, Long liquidId) {
      Liquid updatableLiquid = liquidRepository.getOne(liquidId);
      updatableLiquid.setBrand(liquid.getBrand());
      updatableLiquid.setNameOfModel(liquid.getName());
      updatableLiquid.setNicotine(liquid.getNicotine());
      updatableLiquid.setAmount(liquid.getAmount());
      updatableLiquid.setComposition(liquid.getComposition());
      updatableLiquid.setTaste(liquid.getTaste());
      updatableLiquid.setDescription(liquid.getDescription());
      updatableLiquid.setPrice(liquid.getPrice());
      updatableLiquid.setQuantity(liquid.getQuantity());
        if(!liquid.getLiquidFileName().equals(updatableLiquid.getLiquidFileName())){
            String oldFileName = updatableLiquid.getLiquidFileName().replaceAll(FILE_STORAGE, "");
            fileService.deleteFileFromStorage(oldFileName);
            updatableLiquid.setLiquidFileName(FILE_STORAGE + liquid.getLiquidFileName());
        }
        liquidRepository.save(updatableLiquid);
    }
}

