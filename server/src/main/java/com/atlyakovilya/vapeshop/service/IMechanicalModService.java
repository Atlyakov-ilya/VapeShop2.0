package com.atlyakovilya.vapeshop.service;

import com.atlyakovilya.vapeshop.entity.item.MechanicalMod;

import java.util.List;

public interface IMechanicalModService {

    void saveMechanicalMod(MechanicalMod mechanicalMod);

    List<MechanicalMod> getAllMechanicalMods();

    void deleteMechanicalModById(Long mechanicalModId);

    MechanicalMod getMechanicalModById(Long mechanicalModId);

    void updateMechanicalMod(MechanicalMod mechanicalMod, Long mechanicalModId);
}
