package com.thbproject.biofits.rest.oauth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.thbproject.biofits.rest.ApiConstants;
import com.thbproject.biofits.service.TokenService;

@RestController
@RequestMapping(ApiConstants.REVOKE_TOKEN)
@CrossOrigin(origins = "${biofits.app.settings.cross-origin}")
@Validated
public class RevokeTokensResource {

    @Autowired
    private TokenService tokenService;

    @RequestMapping(method = RequestMethod.DELETE)
    public void create(@RequestHeader("Authorization") String authorization) {
        tokenService.revoke(authorization);
    }
}
