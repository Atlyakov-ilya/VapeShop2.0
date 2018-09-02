package com.atlyakovilya.vapeshop.service.impl;

import com.atlyakovilya.vapeshop.entity.item.MechanicalMod;
import com.atlyakovilya.vapeshop.repodsitory.IMechanicalModRepository;
import com.atlyakovilya.vapeshop.service.IMechanicalModService;
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
public class MechanicalModServiceImpl implements IMechanicalModService {

    @Autowired
    IMechanicalModRepository mechanicalModRepository;

    @Autowired
    IStorageFileService fileService;

    @Override
    public void saveMechanicalMod(MechanicalMod mechanicalMod) {
        mechanicalMod.setFileName(FILE_STORAGE + mechanicalMod.getFileName());
        mechanicalModRepository.save(mechanicalMod);
    }

    @Override
    public List<MechanicalMod> getAllMechanicalMods() {
        return mechanicalModRepository.findAll();
    }

    @Override
    public void deleteMechanicalModById(Long mechanicalModId) {
        String path = mechanicalModRepository.getOne(mechanicalModId).getFileName();
        mechanicalModRepository.deleteById(mechanicalModId);
        String file = path.replace(FILE_STORAGE, "");
        Path localPath = Paths.get("upload-dir/" + file);
        try {
            Files.delete(localPath);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public MechanicalMod getMechanicalModById(Long mechanicalModId) {
        return mechanicalModRepository.findById(mechanicalModId).get();
    }

    @Override
    public void updateMechanicalMod(MechanicalMod mechanicalMod, Long mechanicalModId) {
        MechanicalMod updatableMechanicalMod = mechanicalModRepository.getOne(mechanicalModId);
        updatableMechanicalMod.setBrand(mechanicalMod.getBrand());
        updatableMechanicalMod.setName(mechanicalMod.getName());
        updatableMechanicalMod.setDiameter(mechanicalMod.getDiameter());
        updatableMechanicalMod.setMaterial(mechanicalMod.getMaterial());
        updatableMechanicalMod.setPrice(mechanicalMod.getPrice());
        updatableMechanicalMod.setDescription(mechanicalMod.getDescription());
        updatableMechanicalMod.setQuantity(mechanicalMod.getQuantity());
        if(!mechanicalMod.getFileName().equals(updatableMechanicalMod.getFileName())){
            String oldFileName = updatableMechanicalMod.getFileName().replaceAll(FILE_STORAGE, "");
            fileService.deleteFileFromStorage(oldFileName);
            updatableMechanicalMod.setFileName(FILE_STORAGE + mechanicalMod.getFileName());
        }
        mechanicalModRepository.save(updatableMechanicalMod);
    }
}
