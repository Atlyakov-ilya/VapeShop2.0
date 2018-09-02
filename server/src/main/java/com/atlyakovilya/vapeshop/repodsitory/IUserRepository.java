package com.atlyakovilya.vapeshop.repodsitory;

import com.atlyakovilya.vapeshop.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepository extends JpaRepository<User,Long> {

    User findUserByEmail(String email);

    User findUserByUsername(String username);
}