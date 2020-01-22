package com.thbproject.biofits.service;

import java.util.ArrayList;
import java.util.List;

import org.apache.lucene.util.SloppyMath;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.thbproject.biofits.exception.ResourceNotFoundException;
import com.thbproject.biofits.model.Aktivitaet;
import com.thbproject.biofits.model.AktivitaetSnapshot;
import com.thbproject.biofits.model.Benutzer;
import com.thbproject.biofits.model.SportArt;
import com.thbproject.biofits.repository.AktivitaetRepository;
import com.thbproject.biofits.repository.AktivitaetSnapshotRepository;
import com.thbproject.biofits.repository.BenutzerRepository;
import com.thbproject.biofits.repository.SportArtRepository;
import com.thbproject.biofits.transfert.AktivitaetSnapshotWrite;

@Service
@Transactional(rollbackFor = Exception.class)
public class AktivitaetSnapshotService {
    @Autowired
    private BenutzerRepository benutzerRepository;
    @Autowired
    private AktivitaetSnapshotRepository aktivitaetSnapshotRepository;
    @Autowired
    private SportArtRepository sportArtRepository;
    @Autowired
    private AktivitaetService aktivitaetService;
    @Autowired
    private AktivitaetRepository aktivitaetRepository;

    public List<AktivitaetSnapshot> create(
            Long benutzerId,
            Long sportArtId,
            List<AktivitaetSnapshotWrite> snapshotWrite) {

        List<AktivitaetSnapshot> snapshots = new ArrayList<>();

        snapshotWrite.forEach(e -> snapshots.add(create(benutzerId, sportArtId, e)));

        return snapshots;
    }

    public AktivitaetSnapshot create(
            Long benutzerId,
            Long sportArtId,
            AktivitaetSnapshotWrite snapshotWrite) {

        findBenutzer(benutzerId);

        findSportArt(sportArtId);

        Aktivitaet aktivitaet = aktivitaetService.getByDate(benutzerId, sportArtId, snapshotWrite.getDatum());

        if (aktivitaet == null) {
            aktivitaetService.stop(benutzerId, sportArtId);
            aktivitaet = aktivitaetService.start(benutzerId, sportArtId);
        }

        AktivitaetSnapshot snapshot = new AktivitaetSnapshot();

        snapshot.setDatum(snapshotWrite.getDatum());
        snapshot.setLatitude(snapshotWrite.getLatitude());
        snapshot.setLongitude(snapshotWrite.getLongitude());
        snapshot.setAktivitaet(aktivitaet);

        Double distanz = SloppyMath.haversinMeters(
                snapshotWrite.getLastLatitude(),
                snapshotWrite.getLastLongitude(),
                snapshotWrite.getLatitude(),
                snapshotWrite.getLongitude());

        snapshot.setDistanz(distanz);

        snapshot = aktivitaetSnapshotRepository.save(snapshot);

        aktivitaet.setDistanz(aktivitaet.getDistanz() + distanz);

        aktivitaetRepository.save(aktivitaet);

        return snapshot;
    }

    private Benutzer findBenutzer(Long id) {
        // find benutzer
        Benutzer benutzer = benutzerRepository.findOne(id);
        if (benutzer == null) {
            throw new ResourceNotFoundException(
                    String.format("The benutzer with the id %s does not exist", id.toString()));
        }

        return benutzer;
    }

    private SportArt findSportArt(Long id) {
        // find sportArt
        SportArt sportArt = sportArtRepository.findOne(id);
        if (sportArt == null) {
            throw new ResourceNotFoundException(
                    String.format("The sport art with the id %s does not exist", id.toString()));
        }

        return sportArt;
    }
}
