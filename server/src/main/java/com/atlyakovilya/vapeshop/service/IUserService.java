package com.atlyakovilya.vapeshop.service;

import com.atlyakovilya.vapeshop.entity.User;

import java.util.List;

public interface IUserService {

    void save(User user);

    List<User> getAllUsers();
}
