package com.atlyakovilya.vapeshop.controller;

import com.atlyakovilya.vapeshop.entity.User;
import com.atlyakovilya.vapeshop.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    IUserService userService;

    @PostMapping("/")
    public void registration(@RequestBody User user){
        userService.save(user);
    }

    @GetMapping("/")
    public List<User> listOfUsers(){
        return userService.getAllUsers();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/profile")
    public ResponseEntity<?> handleFileUpload(
                                              @RequestParam(name="file", required=false) MultipartFile file) {


        if(file!=null)
        {
            System.out.println("image : {}" + file.getOriginalFilename());
            System.out.println("image content type : {}" + file.getContentType());
        }
        return new ResponseEntity<String>("Uploaded", HttpStatus.OK);
    }
}
