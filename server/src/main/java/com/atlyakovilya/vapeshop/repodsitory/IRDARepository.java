package com.atlyakovilya.vapeshop.repodsitory;

import com.atlyakovilya.vapeshop.entity.item.RDA;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRDARepository extends JpaRepository<RDA,Long> {
}
