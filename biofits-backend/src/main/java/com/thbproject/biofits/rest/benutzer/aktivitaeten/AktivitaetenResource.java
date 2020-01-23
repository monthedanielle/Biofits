package com.thbproject.biofits.rest.benutzer.aktivitaeten;

import java.util.List;

import javax.validation.Valid;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.thbproject.biofits.model.Aktivitaet;
import com.thbproject.biofits.model.AktivitaetSnapshot;
import com.thbproject.biofits.rest.ApiConstants;
import com.thbproject.biofits.search.aktivitaet.AktivitaetCriteria;
import com.thbproject.biofits.service.AktivitaetService;
import com.thbproject.biofits.service.AktivitaetSnapshotService;
import com.thbproject.biofits.transfert.AktivitaetSnapshotWrite;

@RestController
@RequestMapping(ApiConstants.AKTIVITAET_COLLECTION)
@CrossOrigin(origins = "${biofits.app.settings.cross-origin}")
@Validated
public class AktivitaetenResource {

    private static final Logger log = LoggerFactory.getLogger(AktivitaetenResource.class);

    @Autowired
    private AktivitaetSnapshotService aktivitaetSnapshotService;
    @Autowired
    private AktivitaetService aktivitaetService;

    @RequestMapping(method = RequestMethod.POST, path = "/sport-art/{sportArtId}/snapshots")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public List<AktivitaetSnapshot> createSnapshot(
            @PathVariable("benutzerId") Long benutzerId,
            @PathVariable("sportArtId") Long sportArtId,
            @RequestBody @Valid List<AktivitaetSnapshotWrite> snapshots) {
        log.info("create aktivitaet snapshots");
        // create
        return aktivitaetSnapshotService.create(
                benutzerId,
                sportArtId,
                snapshots);
    }

    @RequestMapping(method = RequestMethod.POST, path = "/sport-art/{sportArtId}/current")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Aktivitaet getCurrent(
            @PathVariable("benutzerId") Long benutzerId,
            @PathVariable("sportArtId") Long sportArtId) {
        log.info("get current aktivitaet");

        return aktivitaetService.current(
                benutzerId,
                sportArtId);
    }

    @RequestMapping(path = "/sport-art/{sportArtId}/stop", method = RequestMethod.PUT)
    @Consumes(MediaType.APPLICATION_JSON)
    public void stop(
            @PathVariable("benutzerId") Long benutzerId,
            @PathVariable("sportArtId") Long sportArtId) {
        log.info("stop aktivitaet");

        aktivitaetService.stop(benutzerId, sportArtId);
    }

    @RequestMapping(path = "/sport-art/{sportArtId}/list", method = RequestMethod.POST)
    @Produces(MediaType.APPLICATION_JSON)
    public JsonNode list(
            @RequestBody @Valid AktivitaetCriteria criteria,
            @PathVariable("benutzerId") Long benutzerId,
            @PathVariable("sportArtId") Long sportArtId,
            @QueryParam("period") String period) {
        log.info("list all aktivitaeten");

        if (criteria == null) {
            criteria = new AktivitaetCriteria();
        }

        criteria.setBenutzerId(benutzerId);

        return aktivitaetService.list(criteria, sportArtId, period);

    }
}
