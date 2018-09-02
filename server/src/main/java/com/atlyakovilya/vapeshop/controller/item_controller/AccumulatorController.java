package com.atlyakovilya.vapeshop.controller.item_controller;

import com.atlyakovilya.vapeshop.entity.item.Accumulator;
import com.atlyakovilya.vapeshop.service.IAccumulatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AccumulatorController {

    @Autowired
    IAccumulatorService accumulatorService;

    @PostMapping("/accumulator")
    public void addNewAccumulator(@RequestBody Accumulator accumulator){
        accumulatorService.saveAccumulator(accumulator);
    }

    @GetMapping("/accumulator/{accumulatorId}")
    public ResponseEntity<Accumulator> getAccumulatorById(@PathVariable Long accumulatorId){
        Accumulator body = accumulatorService.getAccumulatorById(accumulatorId);
        return ResponseEntity.ok().body(body);
    }

    @GetMapping("/accumulators")
    public ResponseEntity<List<Accumulator>> getAllAccumulators(){
        List<Accumulator> body = accumulatorService.getListOfAccumulators();
        return ResponseEntity.ok().body(body);
    }

    @DeleteMapping("/accumulator/{accumulatorId}")
    public void deleteAccumulator(@PathVariable Long accumulatorId){
        accumulatorService.deleteAccumulatorById(accumulatorId);
    }

    @PutMapping("/accumulator/{accumulatorId}")
    public void updateAccumulator(@RequestBody Accumulator accumulator, @PathVariable Long accumulatorId){
        accumulatorService.updateAccumulator(accumulator, accumulatorId);
    }

   /* @GetMapping("/accumulator/page")
    public Page<Accumulator> getPageForAccumulatorList(@RequestParam(defaultValue = "0") int page){
       return accumulatorService.getPageForAccumulatorList(page);
    }*/
}
