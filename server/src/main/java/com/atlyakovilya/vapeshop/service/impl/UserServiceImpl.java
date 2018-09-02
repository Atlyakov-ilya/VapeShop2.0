package com.atlyakovilya.vapeshop.service.impl;

import com.atlyakovilya.vapeshop.entity.User;
import com.atlyakovilya.vapeshop.repodsitory.IUserRepository;
import com.atlyakovilya.vapeshop.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements IUserService {

    @Autowired
    IUserRepository userRepository;

    @Override
    public void save(User user) {
        userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

}
