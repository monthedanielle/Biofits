package com.thbproject.biofits.service;

import java.security.Principal;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.thbproject.biofits.exception.ResourceUnauthorizedException;
import com.thbproject.biofits.model.Benutzer;
import com.thbproject.biofits.repository.BenutzerRepository;

@Service
@Transactional(rollbackFor = Exception.class)
public class TokenService {

    @Autowired
    private TokenStore tokenStore;
    @Autowired
    private BenutzerRepository benutzerRepository;

    public void revoke(String authorization) {

        if (authorization != null) {
            String token = authorization.trim().replace("Bearer ", "");
            OAuth2AccessToken accessToken = tokenStore.readAccessToken(token);

            if (accessToken != null) {
                tokenStore.removeAccessToken(accessToken);
            } else {
                throw new ResourceUnauthorizedException("The bearer token does not exist");
            }
        } else {
            throw new ResourceUnauthorizedException("The bearer token must not be null");
        }

    }

    public Benutzer getConnectedBenutzer(HttpServletRequest request) {
        Principal principal = request.getUserPrincipal();
        if (principal == null) {
            return null;
        } else {
            String email = principal.getName();
            return benutzerRepository.findOneByEmail(email);
        }
    }

}
