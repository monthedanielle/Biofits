package com.thbproject.biofits.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.thbproject.biofits.model.Benutzer;

public interface BenutzerRepository extends JpaRepository<Benutzer, Long>, JpaSpecificationExecutor<Benutzer> {

    Benutzer findOneByEmail(String email);

    int countByEmail(String email);
}