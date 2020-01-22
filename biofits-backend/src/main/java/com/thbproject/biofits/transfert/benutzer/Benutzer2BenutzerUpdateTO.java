package com.thbproject.biofits.transfert.benutzer;

import com.thbproject.biofits.model.Benutzer;

public class Benutzer2BenutzerUpdateTO {

    public static BenutzerUpdateTO apply(Benutzer in) {
        BenutzerUpdateTO out = new BenutzerUpdateTO();
        out.setNachname(in.getNachname());
        out.setVorname(in.getVorname());
        out.setGeschlecht(in.getGeschlecht());
        out.setGroesse(in.getGroesse());
        out.setGewicht(in.getGewicht());
        out.setGeburtsDatum(in.getGeburtsDatum());
        return out;
    }
}
