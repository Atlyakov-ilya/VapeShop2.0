package com.atlyakovilya.vapeshop.controller.item_controller;

import com.atlyakovilya.vapeshop.entity.item.Liquid;
import com.atlyakovilya.vapeshop.entity.item.RDA;
import com.atlyakovilya.vapeshop.service.IRDAService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class RDAController {

    @Autowired
    IRDAService irdaService;

    @PostMapping("/rda")
    public void addNewRDA(@RequestBody RDA rda){
        irdaService.saveRDA(rda);
    }

    @GetMapping("/rdas")
    public ResponseEntity<List<RDA>> getAllRDA(){
        List<RDA> body = irdaService.getAllRDA();
        return ResponseEntity.ok().body(body);
    }

    @GetMapping("/rda/{rdaId}")
    public ResponseEntity<RDA> getRDAById(@PathVariable Long rdaId){
        RDA rda = irdaService.getRDAById(rdaId);
        return ResponseEntity.ok().body(rda);
    }

    @DeleteMapping("/rda/{rdaId}")
    public void deleteRDA(@PathVariable Long rdaId){
        irdaService.deleteRDAById(rdaId);
    }

    @PutMapping("/rda/{rdaId}")
    public void updateRDA(@RequestBody RDA rda, @PathVariable Long rdaId){
        irdaService.updateRDA(rda, rdaId);
    }

}
