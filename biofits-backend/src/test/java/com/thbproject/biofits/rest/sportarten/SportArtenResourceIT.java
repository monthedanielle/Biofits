package com.thbproject.biofits.rest.sportarten;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;
import static org.hamcrest.Matchers.nullValue;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.thbproject.biofits.ItBase;
import com.thbproject.biofits.model.SportArt;
import com.thbproject.biofits.repository.SportArtRepository;
import com.thbproject.biofits.rest.ApiConstants;

import io.restassured.http.ContentType;

public class SportArtenResourceIT extends ItBase {

    @Autowired
    private SportArtRepository repository;

    private SportArt sportArt1;

    private SportArt sportArt2;

    @Before
    public void setup() throws Exception {
        super.setup();

        // create sportArt1
        sportArt1 = buildSportArt();
        sportArt1 = repository.save(sportArt1);
        // create sportArt 2
        sportArt2 = repository.save(buildSportArt());
    }

    @Override
    @After
    public void cleanup() throws Exception {
        repository.deleteAll();
        super.cleanup();
    }

    @Test
    public void create() {
        SportArt create = buildSportArt();
        int id = preLoadedGiven
                .contentType(ContentType.JSON)
                .body(create)
                .log().body()
                .post(ApiConstants.SPORT_ART_COLLECTION)
                .then()
                .log().body()
                .statusCode(200).extract().body().path("id");

        // check that the sportArt has been saved
        SportArt actual = repository.findOne(Integer.toUnsignedLong(id));
        assertThat(actual, is(notNullValue()));
        assertThat(actual.getName(), is(equalTo(create.getName())));
    }

    @Test
    public void createNameNull() {
        SportArt create = buildSportArt();
        create.setName(null);
        preLoadedGiven.contentType(ContentType.JSON).body(create).log().body().post(ApiConstants.SPORT_ART_COLLECTION).then()
                .log().body().statusCode(400);
    }

    @Test
    public void createNameEmpty() {
        SportArt create = buildSportArt();
        create.setName("");

        preLoadedGiven
                .contentType(ContentType.JSON)
                .body(create)
                .log().body()
                .post(ApiConstants.SPORT_ART_COLLECTION)
                .then()
                .log().body()
                .statusCode(400);
    }

    @Test
    public void createSameName() {
        SportArt create = buildSportArt();
        create.setName(sportArt1.getName());
        preLoadedGiven.contentType(ContentType.JSON).body(create).log().body().post(ApiConstants.SPORT_ART_COLLECTION).then()
                .log().body().statusCode(400);
    }

    @Test
    public void list() {
        preLoadedGiven.get(ApiConstants.SPORT_ART_COLLECTION).then().log().body().statusCode(200).body("size()", is(equalTo(2)))
                .body("id", containsInAnyOrder(sportArt1.getId().intValue(), sportArt2.getId().intValue()));
    }

    @Test
    public void get() {
        preLoadedGiven.get(ApiConstants.SPORT_ART_ITEM, sportArt2.getId()).then().log().body().statusCode(200)
                .body("id", is(equalTo(sportArt2.getId().intValue()))).body("name", is(equalTo(sportArt2.getName())));
    }

    @Test
    public void getNotFound() {
        preLoadedGiven.get(ApiConstants.SPORT_ART_ITEM, random.nextLong()).then().statusCode(404);
    }

    @Test
    public void delete() {
        preLoadedGiven.delete(ApiConstants.SPORT_ART_ITEM, sportArt1.getId()).then().statusCode(200);

        // check that the sportArt has been deleted
        SportArt actual = repository.findOne(sportArt1.getId());
        assertThat(actual, is(nullValue()));

    }

    @Test
    public void deleteNotFound() {
        preLoadedGiven.delete(ApiConstants.SPORT_ART_ITEM, random.nextLong()).then().statusCode(404);
    }

    @Test
    public void update() {
        SportArt update = buildSportArt();
        preLoadedGiven.contentType(ContentType.JSON).body(update).put(ApiConstants.SPORT_ART_ITEM, sportArt2.getId()).then().log()
                .body().statusCode(200);

        // check that the sportArt has been saved
        SportArt actual = repository.findOne(sportArt2.getId());
        assertThat(actual.getId(), is(equalTo(sportArt2.getId())));
        assertThat(actual.getName(), is((equalTo(update.getName()))));

    }

    @Test
    public void updateNotFound() {
        SportArt update = buildSportArt();
        preLoadedGiven.contentType(ContentType.JSON).body(update).put(ApiConstants.SPORT_ART_ITEM, random.nextLong()).then()
                .log().body().statusCode(404);
    }

    @Test
    public void updateSameName() {
        SportArt update = buildSportArt();
        update.setName(sportArt1.getName());
        preLoadedGiven.contentType(ContentType.JSON).body(update).log().body().put(ApiConstants.SPORT_ART_ITEM, sportArt1.getId())
                .then().log().body().statusCode(200);

        // check that the sportArt has been saved
        SportArt actual = repository.findOne(sportArt1.getId());
        assertThat(actual.getName(), is((equalTo(update.getName()))));
    }

    @Test
    public void updateNameExists() {
        SportArt update = buildSportArt();
        update.setName(sportArt2.getName());
        preLoadedGiven.contentType(ContentType.JSON).body(update).log().body().put(ApiConstants.SPORT_ART_ITEM, sportArt1.getId())
                .then().log().body().statusCode(400);
    }

}
