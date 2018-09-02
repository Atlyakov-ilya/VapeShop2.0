package com.atlyakovilya.vapeshop.service;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface IStorageFileService {

    String FILE_STORAGE = "http://127.0.0.1:8080/files/";

    Resource loadFile(String filename);

    void saveNewImage(MultipartFile file);

    void deleteFileFromStorage(String path);
}
