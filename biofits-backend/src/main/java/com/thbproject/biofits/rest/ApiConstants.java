package com.thbproject.biofits.rest;

public class ApiConstants {

    // revoke token
    public static final String REVOKE_TOKEN = "/tokens/revoke";

    // access token suffix
    public static final String ACCESS_TOKEN_SUFFIX = "access_token=";

    // roles
    public static final String ROLE_COLLECTION = "/roles";

    public static final String ROLE_ITEM = ROLE_COLLECTION + "/{roleId}";

    // sport arten
    public static final String SPORT_ART_COLLECTION = "/sport-arten";

    public static final String SPORT_ART_ITEM = SPORT_ART_COLLECTION + "/{sportArtId}";

    // benutzers
    public static final String CURRENT_BENUTZER = "/current-benutzer";

    public static final String BENUTZER_COLLECTION = "/benutzer";

    public static final String BENUTZER_ITEM = BENUTZER_COLLECTION + "/{benutzerId}";

    public static final String AKTIVITAET_COLLECTION = BENUTZER_ITEM + "/aktivitaeten";
}
