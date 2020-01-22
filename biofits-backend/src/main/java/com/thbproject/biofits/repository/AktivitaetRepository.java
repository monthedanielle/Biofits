package com.thbproject.biofits.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.thbproject.biofits.model.Aktivitaet;

public interface AktivitaetRepository extends JpaRepository<Aktivitaet, Long>, JpaSpecificationExecutor<Aktivitaet> {

    int countByBenutzerIdAndSportArtId(Long benutzerId, Long sportArtId);

    List<Aktivitaet> findByBenutzerIdAndSportArtIdOrderByStartDatumAsc(Long benutzerId, Long sportArtId);
}