package com.thbproject.biofits.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.thbproject.biofits.configuration.AppSettings;
import com.thbproject.biofits.exception.ResourceBadRequestException;
import com.thbproject.biofits.exception.ResourceNotFoundException;
import com.thbproject.biofits.model.Benutzer;
import com.thbproject.biofits.repository.BenutzerRepository;
import com.thbproject.biofits.transfert.benutzer.Benutzer2BenutzerReadTO;
import com.thbproject.biofits.transfert.benutzer.BenutzerCreateTO;
import com.thbproject.biofits.transfert.benutzer.BenutzerCreateTO2Benutzer;
import com.thbproject.biofits.transfert.benutzer.BenutzerReadTO;
import com.thbproject.biofits.transfert.benutzer.BenutzerUpdateTO;

@Service
@Transactional(rollbackFor = Exception.class)
public class BenutzerService {
    @Autowired
    private BenutzerRepository benutzerRepository;

    @Autowired
    private AppSettings appSettings;

    /**
     * Create an benutzer
     * 
     * @param benutzerCreateTO
     *            The new benutzer to create
     * 
     * @return The new benutzer read created
     * @throws ResourceBadRequestException
     *             if the given paysId does not exist
     * @throws ResourceBadRequestException
     *             if the given creatorId does not exist
     * @throws ResourceBadRequestException
     *             if an benutzer with the given username already exist
     */
    public BenutzerReadTO create(BenutzerCreateTO benutzerCreateTO) {

        // create the new benutzer
        Benutzer benutzer = BenutzerCreateTO2Benutzer.apply(benutzerCreateTO);

        // check username uniqueness
        checkUsernameUniqueness(benutzer);

        // save benutzer
        return Benutzer2BenutzerReadTO.apply(benutzerRepository.save(benutzer));
    }

    /**
     * Get an benutzer
     * 
     * @param id
     *            The id of the Benutzer you want to get
     * 
     * @return The benutzer read found
     * 
     * @throws ResourceNotFoundException
     *             if the benutzer does not exist
     */
    public BenutzerReadTO get(Long id) {
        return Benutzer2BenutzerReadTO.apply(findBenutzer(id));
    }

    /**
     * List all benutzers
     * 
     * @return The list of benutzer stored
     */
    public List<BenutzerReadTO> list() {

        return benutzerRepository.findAll().stream().map(benutzer -> Benutzer2BenutzerReadTO.apply(benutzer))
                .collect(Collectors.toList());
    }

    /**
     * Find by username
     * 
     * @return The benutzer found
     */
    public BenutzerReadTO findByEmail(String email) {

        Benutzer benutzer = benutzerRepository.findOneByEmail(email);

        if (benutzer == null) {
            throw new ResourceNotFoundException(
                    String.format("The benutzer with the email %s does not exist", email));
        }

        return Benutzer2BenutzerReadTO.apply(benutzer);

    }

    /**
     * Update an benutzer
     * 
     * @param id
     *            The id of the benutzer to update
     * 
     * @param benutzerUpdateTO
     *            The new benutzer modifications
     * 
     * @return The benutzer updated
     * 
     * @throws ResourceNotFoundException
     *             if the benutzer is not found
     * @throws ResourceBadRequestException
     *             if the given paysId does not exist
     */
    public Benutzer update(Long id, BenutzerUpdateTO benutzerUpdateTO) {

        // find existing benutzer
        Benutzer benutzer = findBenutzer(id);

        // set properties
        benutzer.setNachname(benutzerUpdateTO.getNachname());
        benutzer.setVorname(benutzerUpdateTO.getVorname());
        benutzer.setGeschlecht(benutzerUpdateTO.getGeschlecht());
        benutzer.setGeburtsDatum(benutzerUpdateTO.getGeburtsDatum());
        benutzer.setGroesse(benutzerUpdateTO.getGroesse());

        // save update
        return benutzerRepository.save(benutzer);
    }

    private Benutzer findBenutzer(Long id) {
        // find benutzer
        Benutzer benutzer = benutzerRepository.findOne(id);
        if (benutzer == null) {
            throw new ResourceNotFoundException(
                    String.format("The benutzer with the id %s does not exist", id.toString()));
        }

        return benutzer;
    }

    public AppSettings getAppSettings() {
        return appSettings;
    }

    public void setAppSettings(AppSettings appSettings) {
        this.appSettings = appSettings;
    }

    private void checkUsernameUniqueness(Benutzer benutzer) {
        if (benutzerRepository.countByEmail(benutzer.getEmail()) > 0) {
            throw new ResourceBadRequestException(
                    String.format("A benutzer with the email %s already exist", benutzer.getEmail()));
        }
    }

}
