package com.thbproject.biofits.transfert.benutzer;

import com.thbproject.biofits.model.Benutzer;

public class BenutzerCreateTO2Benutzer {

    public static Benutzer apply(BenutzerCreateTO in) {
        Benutzer out = new Benutzer();
        out.setNachname(in.getNachname());
        out.setVorname(in.getVorname());
        out.setGeschlecht(in.getGeschlecht());
        out.setEmail(in.getEmail());
        out.setGewicht(in.getGewicht());
        out.setGroesse(in.getGroesse());
        out.setPassword(in.getPassword());
        return out;
    }
}
