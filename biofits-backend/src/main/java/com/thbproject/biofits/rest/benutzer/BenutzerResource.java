package com.thbproject.biofits.rest.benutzer;

import javax.validation.Valid;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
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

import com.thbproject.biofits.rest.ApiConstants;
import com.thbproject.biofits.service.BenutzerService;
import com.thbproject.biofits.transfert.benutzer.BenutzerReadTO;
import com.thbproject.biofits.transfert.benutzer.BenutzerUpdateTO;

@RestController
@RequestMapping(ApiConstants.BENUTZER_ITEM)
@CrossOrigin(origins = "${biofits.app.settings.cross-origin}")
@Validated
public class BenutzerResource {

    private static final Logger log = LoggerFactory.getLogger(BenutzerResource.class);

    @Autowired
    private BenutzerService benutzerService;

    @RequestMapping(method = RequestMethod.GET)
    @Produces(MediaType.APPLICATION_JSON)
    public BenutzerReadTO get(@PathVariable("benutzerId") Long benutzerId) {
        log.info("Get an benutzer [id={}]", benutzerId);

        return benutzerService.get(benutzerId);

    }

    @RequestMapping(method = RequestMethod.PUT)
    @Consumes(MediaType.APPLICATION_JSON)
    public void update(@PathVariable("benutzerId") Long benutzerId,
            @RequestBody @Valid BenutzerUpdateTO benutzerUpdateTO) {
        log.info("Update an benutzer [id={}]", benutzerId);

        benutzerService.update(benutzerId, benutzerUpdateTO);
    }

}
