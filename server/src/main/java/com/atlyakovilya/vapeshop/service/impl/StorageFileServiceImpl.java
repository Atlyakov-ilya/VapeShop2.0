package com.atlyakovilya.vapeshop.service.impl;

import com.atlyakovilya.vapeshop.service.IStorageFileService;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class StorageFileServiceImpl implements IStorageFileService {

    private final Path rootLocation = Paths.get("upload-dir");

    @Override
    public Resource loadFile(String filename) {
        try {
            Path file = rootLocation.resolve(filename);
            Resource resource = new UrlResource(file.toUri());
            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new RuntimeException("FAIL!");
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("FAIL!");
        }
    }

    @Override
    public void saveNewImage(MultipartFile file) {
        try {
            Files.copy(file.getInputStream(), this.rootLocation.resolve(file.getOriginalFilename()));
        } catch (Exception e) {
            throw new RuntimeException("FAIL!");
        }
    }

    @Override
    public void deleteFileFromStorage(String path) {
        String file = path.replace(FILE_STORAGE, "");
        Path localPath = Paths.get("upload-dir/" + file);
        try {
            Files.delete(localPath);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
