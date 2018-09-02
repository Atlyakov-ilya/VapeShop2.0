package com.atlyakovilya.vapeshop.service.impl;

import com.atlyakovilya.vapeshop.entity.item.RDA;
import com.atlyakovilya.vapeshop.repodsitory.IRDARepository;
import com.atlyakovilya.vapeshop.service.IRDAService;
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
public class RDAServiceImpl implements IRDAService {

    @Autowired
    IRDARepository rdaRepository;

    @Autowired
    IStorageFileService fileService;


    @Override
    public void saveRDA(RDA rda) {
        rda.setFileName(FILE_STORAGE + rda.getFileName());
        rdaRepository.save(rda);
    }

    @Override
    public List<RDA> getAllRDA() {
        return rdaRepository.findAll();
    }

    @Override
    public void deleteRDAById(Long RDAId) {
        String path = rdaRepository.getOne(RDAId).getFileName();
        rdaRepository.deleteById(RDAId);
        String file = path.replace(FILE_STORAGE, "");
        Path localPath = Paths.get("upload-dir/" + file);
        try {
            Files.delete(localPath);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public RDA getRDAById(Long RDAId) {
        return rdaRepository.findById(RDAId).get();
    }

    @Override
    public void updateRDA(RDA rda, Long RDAId) {
        RDA updatableRDA = rdaRepository.getOne(RDAId);
        updatableRDA.setBrand(rda.getBrand());
        updatableRDA.setName(rda.getName());
        updatableRDA.setDiameter(rda.getDiameter());
        updatableRDA.setMaterial(rda.getMaterial());
        updatableRDA.setDescription(rda.getDescription());
        updatableRDA.setPrice(rda.getPrice());
        updatableRDA.setQuantity(rda.getQuantity());
        if(!rda.getFileName().equals(updatableRDA.getFileName())){
            String oldFileName = updatableRDA.getFileName().replaceAll(FILE_STORAGE, "");
            fileService.deleteFileFromStorage(oldFileName);
            updatableRDA.setFileName(FILE_STORAGE + rda.getFileName());
        }
        rdaRepository.save(updatableRDA);
    }
}
