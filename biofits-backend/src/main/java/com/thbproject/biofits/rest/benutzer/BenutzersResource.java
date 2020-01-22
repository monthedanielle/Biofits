package com.thbproject.biofits.rest.benutzer;

import java.util.List;

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
import com.thbproject.biofits.transfert.benutzer.BenutzerCreateTO;
import com.thbproject.biofits.transfert.benutzer.BenutzerReadTO;

@RestController
@RequestMapping(ApiConstants.BENUTZER_COLLECTION)
@CrossOrigin(origins = "${biofits.app.settings.cross-origin}")
@Validated
public class BenutzersResource {

    private static final Logger log = LoggerFactory.getLogger(BenutzersResource.class);

    @Autowired
    private BenutzerService benutzerService;

    @RequestMapping(method = RequestMethod.POST)
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public BenutzerReadTO create(@RequestBody @Valid BenutzerCreateTO benutzerCreateTO) {
        log.info("create an benutzer");
        // create
        BenutzerReadTO benutzerReadTO = benutzerService.create(benutzerCreateTO);
        return benutzerReadTO;
    }

    @RequestMapping(method = RequestMethod.GET)
    @Produces(MediaType.APPLICATION_JSON)
    public List<BenutzerReadTO> list() {
        log.info("list all benutzers");

        return benutzerService.list();
    }

    @RequestMapping(path = "/by-email/{email}", method = RequestMethod.GET)
    @Produces(MediaType.APPLICATION_JSON)
    public BenutzerReadTO benutzerByEmail(@PathVariable("email") String email) {
        log.info("get benutzer by email [email={}]", email);

        return benutzerService.findByEmail(email);
    }
}
