package com.thbproject.biofits.search.aktivitaet;

import java.util.Date;

public class AktivitaetCriteria {

    private Long sportArtId;

    private Long benutzerId;

    private Boolean running;

    private Date date;

    private Date from;

    private Date to;

    public Long getSportArtId() {
        return sportArtId;
    }

    public void setSportArtId(Long sportArtId) {
        this.sportArtId = sportArtId;
    }

    public Long getBenutzerId() {
        return benutzerId;
    }

    public void setBenutzerId(Long benutzerId) {
        this.benutzerId = benutzerId;
    }

    public Boolean getRunning() {
        return running;
    }

    public void setRunning(Boolean running) {
        this.running = running;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Date getFrom() {
        return from;
    }

    public void setFrom(Date from) {
        this.from = from;
    }

    public Date getTo() {
        return to;
    }

    public void setTo(Date to) {
        this.to = to;
    }

}
