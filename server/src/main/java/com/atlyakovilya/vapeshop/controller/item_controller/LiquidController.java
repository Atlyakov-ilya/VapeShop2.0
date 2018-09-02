package com.atlyakovilya.vapeshop.controller.item_controller;

import com.atlyakovilya.vapeshop.entity.item.Liquid;
import com.atlyakovilya.vapeshop.service.ILiquidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class LiquidController {

    @Autowired
    ILiquidService liquidService;

    @PostMapping("/liquid")
    public void addNewLiquid(@RequestBody Liquid liquid){
        liquidService.saveLiquid(liquid);
    }

    @GetMapping("/liquids")
    public ResponseEntity<List<Liquid>> getAllLiquids(){
        List<Liquid> body = liquidService.getAllLiquids();
        for(Liquid l : body){
            System.out.println(l.getLiquidFileName());
        }
        return ResponseEntity.ok().body(body);
    }

    @GetMapping("/liquid/{liquidId}")
    public ResponseEntity<Liquid> getLiquidById(@PathVariable Long liquidId){
        Liquid liquid = liquidService.getLiquidById(liquidId);
        return ResponseEntity.ok().body(liquid);
    }

    @DeleteMapping("/liquid/{liquidId}")
    public void deleteLiquid(@PathVariable Long liquidId){
      liquidService.deleteLiquidById(liquidId);
    }

    @PutMapping("/liquid/{liquidId}")
    public void updateLiquid(@RequestBody Liquid liquid, @PathVariable Long liquidId){
        liquidService.updateLiquid(liquid, liquidId);
    }

}
