package com.atlyakovilya.vapeshop.controller.item_controller;


import com.atlyakovilya.vapeshop.entity.item.Accumulator;
import com.atlyakovilya.vapeshop.service.impl.AccumulatorServiceImpl;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
public class AccumulatorControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @InjectMocks
    AccumulatorController accumulatorController;
    @Mock
    AccumulatorServiceImpl accumulatorService;

    @Test
    public void addNewAccumulator() {
    }

    @Test
    public void getAccumulatorById() {
    }

    @Test
    public void getAllAccumulators() {

    }

    @Test
    public void deleteLiquid() {
    }

    @Test
    public void updateLiquid() {
    }
}