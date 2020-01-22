package com.thbproject.biofits.configuration;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "biofits.app.settings")
public class AppSettings {

    private String projectName;

    private int searchDefaultPageSize;

    private int searchDefaultPageNumber;

    private String crossOrigin;

    private String authorizationUsername;

    private String authorizationResourceId;

    private String authorizationSecret;

    private int accessTokenValidity;

    private int activityDuration;

    private Double startZiel;

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public int getSearchDefaultPageSize() {
        return searchDefaultPageSize;
    }

    public void setSearchDefaultPageSize(int searchDefaultPageSize) {
        this.searchDefaultPageSize = searchDefaultPageSize;
    }

    public int getSearchDefaultPageNumber() {
        return searchDefaultPageNumber;
    }

    public void setSearchDefaultPageNumber(int searchDefaultPageNumber) {
        this.searchDefaultPageNumber = searchDefaultPageNumber;
    }

    public String getCrossOrigin() {
        return crossOrigin;
    }

    public void setCrossOrigin(String crossOrigin) {
        this.crossOrigin = crossOrigin;
    }

    public String getAuthorizationUsername() {
        return authorizationUsername;
    }

    public void setAuthorizationUsername(String authorizationUsername) {
        this.authorizationUsername = authorizationUsername;
    }

    public String getAuthorizationResourceId() {
        return authorizationResourceId;
    }

    public void setAuthorizationResourceId(String authorizationResourceId) {
        this.authorizationResourceId = authorizationResourceId;
    }

    public String getAuthorizationSecret() {
        return authorizationSecret;
    }

    public void setAuthorizationSecret(String authorizationSecret) {
        this.authorizationSecret = authorizationSecret;
    }

    public int getAccessTokenValidity() {
        return accessTokenValidity;
    }

    public void setAccessTokenValidity(int accessTokenValidity) {
        this.accessTokenValidity = accessTokenValidity;
    }

    public int getActivityDuration() {
        return activityDuration;
    }

    public void setActivityDuration(int activityDuration) {
        this.activityDuration = activityDuration;
    }

    public Double getStartZiel() {
        return startZiel;
    }

    public void setStartZiel(Double startZiel) {
        this.startZiel = startZiel;
    }

}