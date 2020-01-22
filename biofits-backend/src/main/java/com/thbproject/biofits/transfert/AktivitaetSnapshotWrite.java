package com.thbproject.biofits.transfert;

import java.util.Date;

import javax.validation.constraints.NotNull;

public class AktivitaetSnapshotWrite {

    private Double lastLatitude;

    private Double lastLongitude;

    @NotNull(message = "the latitude must not be null")
    private Double latitude;

    @NotNull(message = "the longitude must not be null")
    private Double longitude;

    @NotNull(message = "the dattm must not be null")
    private Date datum;

    public Double getLastLatitude() {
        return lastLatitude;
    }

    public void setLastLatitude(Double lastLatitude) {
        this.lastLatitude = lastLatitude;
    }

    public Double getLastLongitude() {
        return lastLongitude;
    }

    public void setLastLongitude(Double lastLongitude) {
        this.lastLongitude = lastLongitude;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public Date getDatum() {
        return datum;
    }

    public void setDatum(Date datum) {
        this.datum = datum;
    }

}
