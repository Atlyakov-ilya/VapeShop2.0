package com.atlyakovilya.vapeshop.repodsitory;

import com.atlyakovilya.vapeshop.entity.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface INewsRepository extends JpaRepository<News, Long>{
}
