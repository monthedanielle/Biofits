package com.thbproject.biofits.transfert.benutzer;

import java.util.Date;

import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotEmpty;

public class BenutzerCreateTO {

    @NotEmpty(message = "The nachname must not be empty")
    private String nachname;

    private String vorname;

    @NotEmpty(message = "The geschlecht must not be empty")
    private String geschlecht;

    @NotNull(message = "The groesse must not be null")
    private Double groesse;

    @NotNull(message = "The gewicht must not be null")
    private Double gewicht;

    @NotNull(message = "The geburtsDatum must not be null")
    private Date geburtsDatum;

    @NotEmpty(message = "The email must not be empty")
    private String email;

    @NotEmpty(message = "The password must not be empty")
    private String password;

    public String getNachname() {
        return nachname;
    }

    public void setNachname(String nachname) {
        this.nachname = nachname;
    }

    public String getVorname() {
        return vorname;
    }

    public void setVorname(String vorname) {
        this.vorname = vorname;
    }

    public String getGeschlecht() {
        return geschlecht;
    }

    public void setGeschlecht(String geschlecht) {
        this.geschlecht = geschlecht;
    }

    public Double getGroesse() {
        return groesse;
    }

    public void setGroesse(Double groesse) {
        this.groesse = groesse;
    }

    public Double getGewicht() {
        return gewicht;
    }

    public void setGewicht(Double gewicht) {
        this.gewicht = gewicht;
    }

    public Date getGeburtsDatum() {
        return geburtsDatum;
    }

    public void setGeburtsDatum(Date geburtsDatum) {
        this.geburtsDatum = geburtsDatum;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
