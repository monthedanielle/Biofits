package com.thbproject.biofits.transfert.benutzer;

import com.thbproject.biofits.model.Benutzer;

public class BenutzerUpdateTO2Benutzer {

    public static Benutzer apply(BenutzerUpdateTO in) {
        Benutzer out = new Benutzer();
        out.setNachname(in.getNachname());
        out.setVorname(in.getVorname());
        out.setGeschlecht(in.getGeschlecht());
        return out;
    }
}
