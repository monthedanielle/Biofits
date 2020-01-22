package com.thbproject.biofits.transfert.benutzer;

import com.thbproject.biofits.model.Benutzer;

public class Benutzer2BenutzerCreatedTO {

    public static BenutzerCreateTO apply(Benutzer in) {
        BenutzerCreateTO out = new BenutzerCreateTO();
        out.setNachname(in.getNachname());
        out.setVorname(in.getVorname());
        out.setGeschlecht(in.getGeschlecht());
        out.setEmail(in.getEmail());
        out.setPassword(in.getPassword());
        out.setGeburtsDatum(in.getGeburtsDatum());
        out.setGroesse(in.getGroesse());
        out.setGewicht(in.getGewicht());
        return out;
    }
}
