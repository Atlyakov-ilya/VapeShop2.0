package com.atlyakovilya.vapeshop.repodsitory;

import com.atlyakovilya.vapeshop.entity.item.Liquid;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ILiquidRepository extends JpaRepository<Liquid,Long> {
}
