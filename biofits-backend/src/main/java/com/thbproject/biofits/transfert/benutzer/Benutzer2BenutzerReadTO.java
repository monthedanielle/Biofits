package com.thbproject.biofits.transfert.benutzer;

import com.thbproject.biofits.model.Benutzer;

public class Benutzer2BenutzerReadTO {

    public static BenutzerReadTO apply(Benutzer in) {
        BenutzerReadTO out = new BenutzerReadTO();
        out.setId(in.getId());
        out.setNachname(in.getNachname());
        out.setVorname(in.getVorname());
        out.setGeschlecht(in.getGeschlecht());
        out.setGroesse(in.getGroesse());
        out.setRoles(in.getRoles());
        out.setErstellungsDatum(in.getErstellungsDatum());
        out.setGeburtsDatum(in.getGeburtsDatum());
        out.setEmail(in.getEmail());
        out.setGewicht(in.getGewicht());
        return out;
    }
}
