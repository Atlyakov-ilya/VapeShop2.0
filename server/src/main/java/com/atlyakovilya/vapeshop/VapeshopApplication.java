package com.atlyakovilya.vapeshop;

import com.atlyakovilya.vapeshop.entity.User;
import com.atlyakovilya.vapeshop.repodsitory.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.util.FileSystemUtils;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;


@SpringBootApplication
public class VapeshopApplication implements CommandLineRunner {

    @Autowired
    IUserRepository userRepository;
    private final Path rootLocation = Paths.get("upload-dir");

    public static void main(String[] args) {
        SpringApplication.run(VapeshopApplication.class, args);
    }


    @Override
    public void run(String... args) throws Exception {

    }
}
