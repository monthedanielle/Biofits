package com.thbproject.biofits.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.thbproject.biofits.model.SportArt;

public interface SportArtRepository extends JpaRepository<SportArt, Long>, JpaSpecificationExecutor<SportArt> {

    int countByName(String name);

}