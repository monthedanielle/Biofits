package com.thbproject.biofits.rest.benutzer;

import java.security.Principal;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.thbproject.biofits.rest.ApiConstants;

@RestController
@RequestMapping(ApiConstants.CURRENT_BENUTZER)
@CrossOrigin(origins = "${biofits.app.settings.cross-origin}")
@Validated
public class CurrentBenutzerResource {

    @RequestMapping(method = RequestMethod.GET)
    public Principal getUser(Principal user) {
        return user;
    }
}
