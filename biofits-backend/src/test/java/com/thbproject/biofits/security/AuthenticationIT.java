package com.thbproject.biofits.security;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.notNullValue;
import static org.hamcrest.Matchers.greaterThanOrEqualTo;
import static org.hamcrest.Matchers.is;

import java.util.UUID;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.thbproject.biofits.ItBase;
import com.thbproject.biofits.model.Benutzer;
import com.thbproject.biofits.model.Role;
import com.thbproject.biofits.repository.BenutzerRepository;
import com.thbproject.biofits.repository.RoleRepository;
import com.thbproject.biofits.rest.ApiConstants;

public class AuthenticationIT extends ItBase {

    private Benutzer benutzer;
    private Role role;

    @Autowired
    private BenutzerRepository repository;
    @Autowired
    private RoleRepository roleRepository;

    @Before
    public void setup() throws Exception {

        role = roleRepository.save(buildRole());

        // create and save benutzer
        benutzer = repository.save(
                new Benutzer()
                        .nachname(UUID.randomUUID().toString())
                        .withRoles(role)
                        .geschlecht("f")
                        .email(UUID.randomUUID().toString())
                        .password(UUID.randomUUID().toString()));

        super.setup();

    }

    @Override
    @After
    public void cleanup() throws Exception {
        repository.findAll().forEach(e -> {
            e.getRoles().clear();
            repository.save(e);
        });
        repository.deleteAll();
        roleRepository.deleteAll();
        super.cleanup();
    }

    @Test
    public void authenticate() {
        // SUT
        given()
                .auth()
                .basic(appSettings.getAuthorizationUsername(), appSettings.getAuthorizationSecret())
                .when()
                .post(String.format(AUTH_COLLECTION_PATH, benutzer.getEmail(), benutzer.getPassword()))
                .then()
                .log().body()
                .body("access_token", is(notNullValue()))
                .body("token_type", is("bearer"))
                .body("expires_in", greaterThanOrEqualTo(appSettings.getAccessTokenValidity() - 2))
                .body("scope", is("read write trust"))
                .statusCode(200);
    }

    @Test
    public void authenticateBenutzerNotExist() {
        // SUT
        given()
                .auth()
                .basic(appSettings.getAuthorizationUsername(), appSettings.getAuthorizationSecret())
                .when()
                .post(String.format(AUTH_COLLECTION_PATH, UUID.randomUUID().toString(), benutzer.getPassword()))
                .then()
                .log().body()
                .statusCode(401);
    }

    @Test
    public void authenticatePasswordInvalid() {
        // SUT
        given()
                .auth()
                .basic(appSettings.getAuthorizationUsername(), appSettings.getAuthorizationSecret())
                .when()
                .post(String.format(AUTH_COLLECTION_PATH, benutzer.getEmail(), UUID.randomUUID().toString()))
                .then()
                .log().body()
                .statusCode(400);
    }

    @Test
    public void revoke() {
        // create token
        String access_token = given()
                .auth()
                .basic(appSettings.getAuthorizationUsername(), appSettings.getAuthorizationSecret())
                .when()
                .post(String.format(AUTH_COLLECTION_PATH, benutzer.getEmail(), benutzer.getPassword()))
                .then()
                .log().body()
                .statusCode(200)
                .extract().body().path("access_token");

        // SUT
        given()
                .header("Authorization", String.format("Bearer %s", access_token))
                .delete(ApiConstants.REVOKE_TOKEN)
                .then()
                .statusCode(200);

        // check if the the token has been well deleted
        given()
                .header("Authorization", String.format("Bearer %s", access_token))
                .get(ApiConstants.BENUTZER_COLLECTION)
                .then()
                .statusCode(401);
    }

    @Test
    public void revokeTokenNotExist() {
        // SUT
        given()
                .header("Authorization", String.format("Bearer %s", UUID.randomUUID().toString()))
                .delete(ApiConstants.REVOKE_TOKEN)
                .then()
                .statusCode(401);
    }

    @Test
    public void revokeTokenNull() {

        String access_token = null;
        // SUT
        given()
                .header("Authorization", String.format("Bearer %s", access_token))
                .delete(ApiConstants.REVOKE_TOKEN)
                .then()
                .statusCode(401);
    }
}
