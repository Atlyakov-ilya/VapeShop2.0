package com.atlyakovilya.vapeshop.repodsitory;

import com.atlyakovilya.vapeshop.entity.item.Accumulator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAccumulatorRepository extends JpaRepository<Accumulator, Long> {
}
