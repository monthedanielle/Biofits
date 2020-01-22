package com.thbproject.biofits.rest.sportarten;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.thbproject.biofits.model.SportArt;
import com.thbproject.biofits.rest.ApiConstants;
import com.thbproject.biofits.service.SportArtService;

@RestController
@RequestMapping(ApiConstants.SPORT_ART_COLLECTION)
@CrossOrigin(origins = "${biofits.app.settings.cross-origin}")
@Validated
public class SportArtenResource {

    private static final Logger log = LoggerFactory.getLogger(SportArtenResource.class);

    @Autowired
    private SportArtService sportArtService;

    @RequestMapping(method = RequestMethod.POST)
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public SportArt create(HttpServletRequest request, @RequestBody @Valid SportArt sportArt) {
        log.info("Create a sport art");
        // create
        SportArt created = sportArtService.create(sportArt);
        return created;
    }

    @RequestMapping(method = RequestMethod.GET)
    @Produces(MediaType.APPLICATION_JSON)
    public List<SportArt> list() {
        log.info("List all sport arten");

        return sportArtService.list();

    }
}
