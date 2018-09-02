package com.atlyakovilya.vapeshop.controller.item_controller;

import com.atlyakovilya.vapeshop.entity.item.MechanicalMod;
import com.atlyakovilya.vapeshop.service.IMechanicalModService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MechanicalModController {

    @Autowired
    IMechanicalModService mechanicalModService;

    @PostMapping("/mechanicalMod")
    public void addNewMechanicalMod(@RequestBody MechanicalMod mechanicalMod){
        mechanicalModService.saveMechanicalMod(mechanicalMod);
    }

    @GetMapping("/mechanicalMods")
    public ResponseEntity<List<MechanicalMod>> getAllMechanicalMods(){
        List<MechanicalMod> body = mechanicalModService.getAllMechanicalMods();
        return ResponseEntity.ok().body(body);
    }

    @GetMapping("/mechanicalMod/{mechanicalModId}")
    public ResponseEntity<MechanicalMod> getMechanicalModById(@PathVariable Long mechanicalModId){
        MechanicalMod body = mechanicalModService.getMechanicalModById(mechanicalModId);
        return ResponseEntity.ok().body(body);
    }

    @DeleteMapping("/mechanicalMod/{mechanicalModId}")
    public void deleteMechanicalMod(@PathVariable Long mechanicalModId){
        mechanicalModService.deleteMechanicalModById(mechanicalModId);
    }

    @PutMapping("/mechanicalMod/{mechanicalModId}")
    public void updateMechanicalMod(@RequestBody MechanicalMod mechanicalMod, @PathVariable Long mechanicalModId){
        mechanicalModService.updateMechanicalMod(mechanicalMod, mechanicalModId);
    }
}
