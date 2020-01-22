package com.thbproject.biofits.model;

import java.util.Date;
import java.util.Observable;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class AuditingCommonEntity extends Observable {

    @CreatedDate
    @Column(updatable = false)
    protected Date erstellungsDatum;

    public Date getErstellungsDatum() {
        return erstellungsDatum;
    }

    public void setErstellungsDatum(Date erstellungsDatum) {
        this.erstellungsDatum = erstellungsDatum;
    }

    public void setChanged() {
        super.setChanged();
    }

}
