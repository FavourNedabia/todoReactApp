package com.example.backend.interfaces;

import com.example.backend.model.Pack;

import java.util.List;
import java.util.Optional;

public interface PackInterface {
    Pack addPack(Pack pack);

    List<Pack> getAllPacks();

    Optional<Pack> getPackById(Long id);

    Pack updatePack(Long id, Pack packDetails);

    void deletePack(Long id);
}
