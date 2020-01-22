package com.thbproject.biofits;

import static io.restassured.RestAssured.given;

import java.util.Date;
import java.util.Random;
import java.util.UUID;

import javax.ws.rs.core.HttpHeaders;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.embedded.LocalServerPort;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

import com.thbproject.biofits.configuration.AppSettings;
import com.thbproject.biofits.model.Benutzer;
import com.thbproject.biofits.model.Role;
import com.thbproject.biofits.model.SportArt;
import com.thbproject.biofits.repository.BenutzerRepository;
import com.thbproject.biofits.rest.ApiConstants;
import com.thbproject.biofits.transfert.benutzer.Benutzer2BenutzerCreatedTO;
import com.thbproject.biofits.transfert.benutzer.Benutzer2BenutzerUpdateTO;
import com.thbproject.biofits.transfert.benutzer.BenutzerCreateTO;
import com.thbproject.biofits.transfert.benutzer.BenutzerUpdateTO;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.specification.RequestSpecification;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@TestPropertySource(locations = "classpath:application-test.properties")
public class ItBase {

    protected String AUTH_COLLECTION_PATH = "/oauth/token?grant_type=password&username=%s&password=%s";
    protected Random random = new Random();
    protected String token;
    protected Benutzer defaultBenutzer;

    protected RequestSpecification preLoadedGiven;

    @LocalServerPort
    protected int port;

    @Autowired
    protected BenutzerRepository benutzerRepository;
    @Autowired
    protected AppSettings appSettings;

    public void setup() throws Exception {
        RestAssured.port = port;

        // authenticate a default benutzer
        authenticate();

        // a given() function pre-loaded with token
        preLoadedGiven = given().header("Authorization", String.format("Bearer %s", token));

    }

    private void authenticate() {

        // create and save benutzer
        defaultBenutzer = benutzerRepository.save(
                new Benutzer()
                        .nachname("defaultBenutzer")
                        .geschlecht("f")
                        .email("benutzer-" + UUID.randomUUID().toString())
                        .password("password-" + UUID.randomUUID().toString()));

        token = given()
                .auth()
                .basic(appSettings.getAuthorizationUsername(), appSettings.getAuthorizationSecret())
                .when()
                .post(String.format(AUTH_COLLECTION_PATH, defaultBenutzer.getEmail(),
                        defaultBenutzer.getPassword()))
                .then()
                .log().body()
                .statusCode(200)
                .extract().body().path("access_token");

    }

    public void cleanup() throws Exception {

        // revoke the generated token
        revoke();

        benutzerRepository.deleteAll();
    }

    private void revoke() {

        given().header("Authorization", String.format("Bearer %s", token)).delete(ApiConstants.REVOKE_TOKEN).then()
                .statusCode(200);
    }

    @SuppressWarnings("unchecked")
    public <T> T createResource(T entity, String path, Object... arg1) {
        String location = given().contentType(ContentType.JSON).body(entity).log().body().post(path, arg1).then().log()
                .body().statusCode(201).extract().header(HttpHeaders.LOCATION);
        return (T) given().get(location).then().log().body().statusCode(200).extract().as(entity.getClass());
    }

    protected Role buildRole() {

        Role role = new Role()
                .name("name-" + random.nextLong())
                .description("description-" + random.nextLong());
        return role;
    }

    protected SportArt buildSportArt() {

        SportArt sportArt = new SportArt()
                .name("name-" + random.nextLong());
        return sportArt;
    }

    protected Benutzer buildBenutzer() {
        Benutzer item = new Benutzer();
        item.setNachname("nachname-" + UUID.randomUUID());
        item.setVorname("vorname-" + UUID.randomUUID());
        item.setGeschlecht("geschlecht-" + UUID.randomUUID());
        item.setPassword("password-" + UUID.randomUUID());
        item.setEmail("email-" + UUID.randomUUID());
        item.setGroesse(random.nextDouble());
        item.setGewicht(random.nextDouble());
        item.setGeburtsDatum(new Date());
        return item;
    }

    protected BenutzerCreateTO buildBenutzerCreateTO() {
        return Benutzer2BenutzerCreatedTO.apply(buildBenutzer());
    }

    protected BenutzerUpdateTO buildBenutzerUpdateTO() {
        return Benutzer2BenutzerUpdateTO.apply(buildBenutzer());
    }
}
