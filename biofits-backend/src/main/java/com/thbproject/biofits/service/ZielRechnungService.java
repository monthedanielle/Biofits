package com.thbproject.biofits.service;

import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.thbproject.biofits.configuration.AppSettings;
import com.thbproject.biofits.model.Aktivitaet;
import com.thbproject.biofits.repository.AktivitaetRepository;

@Service
@Transactional(rollbackFor = Exception.class)
public class ZielRechnungService {

    @Autowired
    private AktivitaetRepository aktivitaetRepository;

    @Autowired
    private AppSettings settings;

    public Double rechnen(Long benutzerId, Long sportArtId, Date date) {
        List<Aktivitaet> aktivitaeten = aktivitaetRepository.findByBenutzerIdAndSportArtIdOrderByStartDatumAsc(benutzerId,
                sportArtId);

        if (aktivitaeten.isEmpty()) {
            return settings.getStartZiel();
        } else {
            Aktivitaet aktivitaet = aktivitaeten.get(0);

            if (aktivitaet.getStartDatum().before(date) && aktivitaet.getEndDatum().after(date)) {
                return aktivitaet.getZiel();
            } else {
                Long diff = null;
                if (aktivitaet.getStartDatum().before(date)) {
                    diff = date.getTime() - aktivitaet.getEndDatum().getTime();
                } else {
                    diff = aktivitaet.getStartDatum().getTime() - date.getTime();
                }

                Long n = TimeUnit.DAYS.convert(diff, TimeUnit.MILLISECONDS);

                return settings.getStartZiel() + Math.log(n) * settings.getStartZiel();
            }

        }
    }

    public Double rechnen(Long benutzerId, Long sportArtId) {
        return rechnen(benutzerId, sportArtId, new Date());
    }
}
