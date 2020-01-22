package com.thbproject.biofits.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class AktivitaetSnapshot implements Serializable {

    private static final long serialVersionUID = -8019398584857375323L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "aktivitaet_id")
    private Aktivitaet aktivitaet;

    private Double distanz;

    private Double latitude;

    private Double longitude;

    private Date datum;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Aktivitaet getAktivitaet() {
        return aktivitaet;
    }

    public void setAktivitaet(Aktivitaet aktivitaet) {
        this.aktivitaet = aktivitaet;
    }

    public Double getDistanz() {
        return distanz;
    }

    public void setDistanz(Double distanz) {
        this.distanz = distanz;
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
