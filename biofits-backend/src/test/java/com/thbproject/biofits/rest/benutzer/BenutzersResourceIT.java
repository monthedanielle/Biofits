package com.thbproject.biofits.rest.benutzer;

import static io.restassured.RestAssured.given;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;

import java.util.Arrays;

import org.joda.time.DateTime;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;

import com.thbproject.biofits.ItBase;
import com.thbproject.biofits.configuration.AppSettings;
import com.thbproject.biofits.model.Benutzer;
import com.thbproject.biofits.repository.BenutzerRepository;
import com.thbproject.biofits.rest.ApiConstants;
import com.thbproject.biofits.transfert.benutzer.BenutzerCreateTO;
import com.thbproject.biofits.transfert.benutzer.BenutzerUpdateTO;

import io.restassured.http.ContentType;

public class BenutzersResourceIT extends ItBase {

    @Autowired
    private BenutzerRepository repository;

    @Mock
    private AppSettings appSettings;

    private Benutzer creator1;

    private Benutzer creator2;

    private Benutzer benutzer1;

    private Benutzer benutzer2;

    @Override
    @Before
    public void setup() throws Exception {
        super.setup();

        // create creator1
        creator1 = repository.save(buildBenutzer().nachname("creator1"));

        // create creator2
        creator2 = repository.save(buildBenutzer().nachname("creator2"));

        // create benutzer1
        benutzer1 = buildBenutzer().nachname("benutzer1");
        benutzer1 = repository.save(benutzer1);

        // create benutzer 2
        benutzer2 = buildBenutzer().nachname("benutzer2");
        benutzer2 = repository.save(benutzer2);

    }

    @Override
    @After
    public void cleanup() throws Exception {
        repository.save(Arrays.asList(benutzer1, benutzer2));
        repository.deleteAll();
        super.cleanup();
    }

    @Test
    public void create() {

        BenutzerCreateTO create = buildBenutzerCreateTO();

        DateTime before = new DateTime();

        int id = given()
                .contentType(ContentType.JSON)
                .body(create)
                .log().body()
                .post(ApiConstants.BENUTZER_COLLECTION)
                .then()
                .log().body()
                .statusCode(200)
                .extract().body().path("id");

        DateTime after = new DateTime();

        // check that the benutzer has been saved
        Benutzer actual = repository.findOne(Integer.toUnsignedLong(id));
        assertThat(actual, is(notNullValue()));
        assertThat(actual.getNachname(), is(equalTo(create.getNachname())));
        assertThat(actual.getVorname(), is(equalTo(create.getVorname())));
        assertThat(actual.getGeschlecht(), is(equalTo(create.getGeschlecht())));
        assertThat(actual.getEmail(), is(equalTo(create.getEmail())));
        assertThat(actual.getPassword(), is(equalTo(create.getPassword())));
        assertThat(before.isBefore(actual.getErstellungsDatum().getTime()), is(equalTo(true)));
        assertThat(after.isAfter(actual.getErstellungsDatum().getTime()), is(equalTo(true)));
    }

    @Test
    public void createNachnameNull() {

        BenutzerCreateTO create = buildBenutzerCreateTO();
        create.setNachname(null);

        preLoadedGiven.contentType(ContentType.JSON).body(create).log().body().post(ApiConstants.BENUTZER_COLLECTION)
                .then().log().body().statusCode(400);
    }

    @Test
    public void createNachnameEmpty() {

        BenutzerCreateTO create = buildBenutzerCreateTO();
        create.setNachname("");

        preLoadedGiven
                .contentType(ContentType.JSON)
                .body(create)
                .log().body()
                .post(ApiConstants.BENUTZER_COLLECTION)
                .then()
                .log().body()
                .statusCode(400);
    }

    @Test
    public void createGeschlechtNull() {

        BenutzerCreateTO create = buildBenutzerCreateTO();
        create.setGeschlecht(null);

        preLoadedGiven
                .contentType(ContentType.JSON)
                .body(create)
                .log().body()
                .post(ApiConstants.BENUTZER_COLLECTION)
                .then()
                .log().body()
                .statusCode(400);
    }

    @Test
    public void createGeschlechtEmpty() {

        BenutzerCreateTO create = buildBenutzerCreateTO();
        create.setGeschlecht("");

        preLoadedGiven
                .contentType(ContentType.JSON)
                .body(create)
                .log().body()
                .post(ApiConstants.BENUTZER_COLLECTION)
                .then()
                .log().body()
                .statusCode(400);
    }

    @Test
    public void createEmailNull() {

        BenutzerCreateTO create = buildBenutzerCreateTO();
        create.setEmail(null);

        preLoadedGiven
                .contentType(ContentType.JSON)
                .body(create)
                .log().body()
                .post(ApiConstants.BENUTZER_COLLECTION)
                .then()
                .log().body()
                .statusCode(400);
    }

    @Test
    public void createEmailEmpty() {

        BenutzerCreateTO create = buildBenutzerCreateTO();
        create.setEmail("");

        preLoadedGiven
                .contentType(ContentType.JSON)
                .body(create)
                .log().body()
                .post(ApiConstants.BENUTZER_COLLECTION)
                .then()
                .log().body()
                .statusCode(400);
    }

    @Test
    public void createEmailAlreadyExist() {

        BenutzerCreateTO create = buildBenutzerCreateTO();
        create.setEmail(benutzer1.getEmail());

        preLoadedGiven
                .contentType(ContentType.JSON)
                .body(create)
                .log().body()
                .post(ApiConstants.BENUTZER_COLLECTION)
                .then()
                .log().body()
                .statusCode(400);
    }

    @Test
    public void createPasswordNull() {

        BenutzerCreateTO create = buildBenutzerCreateTO();
        create.setPassword(null);

        preLoadedGiven
                .contentType(ContentType.JSON)
                .body(create)
                .log().body()
                .post(ApiConstants.BENUTZER_COLLECTION)
                .then()
                .log().body()
                .statusCode(400);
    }

    @Test
    public void createPasswordVide() {

        BenutzerCreateTO create = buildBenutzerCreateTO();
        create.setPassword("");

        preLoadedGiven
                .contentType(ContentType.JSON)
                .body(create)
                .log().body()
                .post(ApiConstants.BENUTZER_COLLECTION)
                .then()
                .log().body()
                .statusCode(400);
    }

    @Test
    public void list() {
        preLoadedGiven
                .get(ApiConstants.BENUTZER_COLLECTION)
                .then()
                .log().body()
                .statusCode(200)
                .body("size()", is(equalTo(5)))
                .body("id", containsInAnyOrder(benutzer1.getId().intValue(), benutzer2.getId().intValue(),
                        creator1.getId().intValue(), creator2.getId().intValue(), defaultBenutzer.getId().intValue()))
                .body("find{it.id==" + benutzer1.getId().intValue() + "}.nachname", is(equalTo(benutzer1.getNachname())))
                .body("find{it.id==" + benutzer1.getId().intValue() + "}.vorname", is(equalTo(benutzer1.getVorname())))
                .body("find{it.id==" + benutzer1.getId().intValue() + "}.geschlecht", is(equalTo(benutzer1.getGeschlecht())))
                .body("find{it.id==" + benutzer1.getId().intValue() + "}.erstellungsDatum",
                        is(equalTo(benutzer1.getErstellungsDatum().getTime())))
                .body("find{it.id==" + benutzer1.getId().intValue() + "}.roles.size()", is(equalTo(0)));
    }

    @Test
    public void get() {
        preLoadedGiven
                .get(ApiConstants.BENUTZER_ITEM, benutzer2.getId())
                .then()
                .log().body()
                .statusCode(200)
                .body("id", is(equalTo(benutzer2.getId().intValue())))
                .body("nachname", is(equalTo(benutzer2.getNachname())))
                .body("vorname", is(equalTo(benutzer2.getVorname())))
                .body("geschlecht", is(equalTo(benutzer2.getGeschlecht())))
                .body("erstellungsDatum", is(equalTo(benutzer2.getErstellungsDatum().getTime())));
    }

    @Test
    public void getNotFound() {
        preLoadedGiven
                .get(ApiConstants.BENUTZER_ITEM, random.nextLong())
                .then().statusCode(404);
    }

    @Test
    public void update() {

        BenutzerUpdateTO update = buildBenutzerUpdateTO();

        preLoadedGiven
                .contentType(ContentType.JSON)
                .body(update)
                .put(ApiConstants.BENUTZER_ITEM, benutzer2.getId())
                .then()
                .log().body()
                .statusCode(200);

        // check that the benutzer has been saved
        Benutzer actual = repository.findOne(benutzer2.getId());
        assertThat(actual, is(notNullValue()));
        assertThat(actual.getNachname(), is(equalTo(update.getNachname())));
        assertThat(actual.getVorname(), is(equalTo(update.getVorname())));
        assertThat(actual.getGeschlecht(), is(equalTo(update.getGeschlecht())));
        assertThat(actual.getEmail(), is(equalTo(benutzer2.getEmail())));
        assertThat(actual.getPassword(), is(equalTo(benutzer2.getPassword())));
        assertThat(actual.getErstellungsDatum().getTime(), is(equalTo(benutzer2.getErstellungsDatum().getTime())));

    }

    @Test
    public void updateNotFound() {

        BenutzerUpdateTO update = buildBenutzerUpdateTO();

        preLoadedGiven
                .contentType(ContentType.JSON)
                .body(update)
                .put(ApiConstants.BENUTZER_ITEM, random.nextLong())
                .then()
                .log().body()
                .statusCode(404);
    }

    @Test
    public void updateNachnameNull() {

        BenutzerUpdateTO update = buildBenutzerUpdateTO();

        update.setNachname(null);

        preLoadedGiven
                .contentType(ContentType.JSON)
                .body(update)
                .put(ApiConstants.BENUTZER_ITEM, benutzer2.getId())
                .then().log()
                .body()
                .statusCode(400);
    }

    @Test
    public void updateNachnameEmpty() {

        BenutzerUpdateTO update = buildBenutzerUpdateTO();

        update.setNachname("");

        preLoadedGiven
                .contentType(ContentType.JSON)
                .body(update)
                .put(ApiConstants.BENUTZER_ITEM, benutzer2.getId())
                .then()
                .log().body()
                .statusCode(400);
    }

    @Test
    public void updateGeschlechtNull() {

        BenutzerUpdateTO update = buildBenutzerUpdateTO();

        update.setGeschlecht(null);

        preLoadedGiven
                .contentType(ContentType.JSON)
                .body(update)
                .put(ApiConstants.BENUTZER_ITEM, benutzer2.getId())
                .then()
                .log().body()
                .statusCode(400);
    }

    @Test
    public void updateGeschlechtEmpty() {

        BenutzerUpdateTO update = buildBenutzerUpdateTO();

        update.setGeschlecht("");

        preLoadedGiven
                .contentType(ContentType.JSON)
                .body(update)
                .put(ApiConstants.BENUTZER_ITEM, benutzer2.getId())
                .then()
                .log().body()
                .statusCode(400);
    }
}
