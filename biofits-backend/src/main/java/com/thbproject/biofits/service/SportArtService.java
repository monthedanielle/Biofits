package com.thbproject.biofits.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.thbproject.biofits.exception.ResourceBadRequestException;
import com.thbproject.biofits.exception.ResourceNotFoundException;
import com.thbproject.biofits.model.SportArt;
import com.thbproject.biofits.repository.SportArtRepository;

@Service
@Transactional(rollbackFor = Exception.class)
public class SportArtService {
    @Autowired
    private SportArtRepository sportArtRepository;

    /**
     * Create a sport art
     * 
     * @param sportArt
     * 
     * @return
     * @throws ResourceBadRequestException
     *             if a sport art with the name already exist
     */
    public SportArt create(SportArt sportArt) {

        checkConsistency(sportArt);

        sportArt.setId(null);

        return sportArtRepository.save(sportArt);
    }

    /**
     * Get a sport art
     * 
     * @param sportArt
     * 
     * @return
     * 
     * @throws ResourceNotFoundException
     *             if the sport art does not exist
     */
    public SportArt get(Long id) {
        return findSportArt(id);
    }

    /**
     * List all sportArts
     * 
     * @return
     */
    public List<SportArt> list() {

        return sportArtRepository.findAll();
    }

    /**
     * Update a sportArt
     * 
     * @param id
     * 
     * @param update
     * 
     * @return
     * 
     * @throws ResourceNotFoundException
     *             if the sport art is not found
     * @throws ResourceBadRequestException
     *             if a sport art with the name already exist
     */
    public SportArt update(Long id, SportArt update) {

        // find sportArt
        SportArt found = findSportArt(id);

        if (!found.getName().equals(update.getName())) {
            checkConsistency(update);
        }

        update.setId(id);
        return sportArtRepository.save(update);
    }

    /**
     * Delete a sport art
     * 
     * @param sportArt
     * 
     * @return
     * 
     * @throws ResourceNotFoundException
     *             if the sport art is not found
     */
    public void delete(Long id) {
        // find sportArt
        findSportArt(id);
        sportArtRepository.delete(id);
    }

    private SportArt findSportArt(Long id) {
        // find sportArt
        SportArt found = sportArtRepository.findOne(id);
        if (found == null) {
            throw new ResourceNotFoundException("The sport art " + id.toString() + " does not exist");
        }

        return found;
    }

    private void checkConsistency(SportArt sportArt) {

        if (sportArtRepository.countByName(sportArt.getName()) > 0) {
            throw new ResourceBadRequestException(
                    String.format("A sport art with a name '%s' exist already", sportArt.getName()));
        }
    }

}
