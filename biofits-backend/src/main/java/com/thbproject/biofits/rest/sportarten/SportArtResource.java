package com.thbproject.biofits.rest.sportarten;

import javax.validation.Valid;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.thbproject.biofits.model.SportArt;
import com.thbproject.biofits.rest.ApiConstants;
import com.thbproject.biofits.service.SportArtService;

@RestController
@RequestMapping(ApiConstants.SPORT_ART_ITEM)
@CrossOrigin(origins = "${biofits.app.settings.cross-origin}")
public class SportArtResource {

    private static final Logger log = LoggerFactory.getLogger(SportArtResource.class);

    @Autowired
    private SportArtService sportArtService;

    @RequestMapping(method = RequestMethod.GET)
    @Produces(MediaType.APPLICATION_JSON)
    public SportArt get(@PathVariable("sportArtId") Long sportArtId) {
        log.info("Get a sport art [id={}]", sportArtId);

        return sportArtService.get(sportArtId);

    }

    @RequestMapping(method = RequestMethod.DELETE)
    public void delete(@PathVariable("sportArtId") Long sportArtId) {
        log.info("Delete a sport art [id={}]", sportArtId);

        sportArtService.delete(sportArtId);

    }

    @RequestMapping(method = RequestMethod.PUT)
    @Consumes(MediaType.APPLICATION_JSON)
    public void update(@PathVariable("sportArtId") Long sportArtId, @RequestBody @Valid SportArt update) {
        log.info("Update a sport art [id={}]", sportArtId);

        sportArtService.update(sportArtId, update);
    }

}
