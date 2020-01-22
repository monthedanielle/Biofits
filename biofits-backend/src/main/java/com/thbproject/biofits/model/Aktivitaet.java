package com.thbproject.biofits.model;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Aktivitaet implements Serializable {

    private static final long serialVersionUID = -8019398584857375323L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "sport_art_id")
    private SportArt sportArt;

    @ManyToOne
    @JoinColumn(name = "benutzer_id")
    @JsonIgnore
    private Benutzer benutzer;

    @OneToMany(mappedBy = "aktivitaet")
    @JsonIgnore
    private Set<AktivitaetSnapshot> snapshots = new HashSet<>();

    private Double ziel;

    private Double distanz;

    private Date startDatum;

    private Date endDatum;

    private Date aktuelStartDatum;

    private Date aktuelEndDatum;

    private boolean beendet;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public SportArt getSportArt() {
        return sportArt;
    }

    public void setSportArt(SportArt sportArt) {
        this.sportArt = sportArt;
    }

    public Benutzer getBenutzer() {
        return benutzer;
    }

    public void setBenutzer(Benutzer benutzer) {
        this.benutzer = benutzer;
    }

    public Double getZiel() {
        return ziel;
    }

    public void setZiel(Double ziel) {
        this.ziel = ziel;
    }

    public Double getDistanz() {
        return distanz;
    }

    public void setDistanz(Double distanz) {
        this.distanz = distanz;
    }

    public Date getStartDatum() {
        return startDatum;
    }

    public void setStartDatum(Date startDatum) {
        this.startDatum = startDatum;
    }

    public Date getEndDatum() {
        return endDatum;
    }

    public void setEndDatum(Date endDatum) {
        this.endDatum = endDatum;
    }

    public Date getAktuelStartDatum() {
        return aktuelStartDatum;
    }

    public void setAktuelStartDatum(Date aktuelStartDatum) {
        this.aktuelStartDatum = aktuelStartDatum;
    }

    public Date getAktuelEndDatum() {
        return aktuelEndDatum;
    }

    public void setAktuelEndDatum(Date aktuelEndDatum) {
        this.aktuelEndDatum = aktuelEndDatum;
    }

    public boolean isBeendet() {
        return beendet;
    }

    public void setBeendet(boolean beendet) {
        this.beendet = beendet;
    }

    public Set<AktivitaetSnapshot> getSnapshots() {
        return snapshots;
    }

    public void setSnapshots(Set<AktivitaetSnapshot> snapshots) {
        this.snapshots = snapshots;
    }

}
