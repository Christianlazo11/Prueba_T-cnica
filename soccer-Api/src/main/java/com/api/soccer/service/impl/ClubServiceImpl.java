package com.api.soccer.service.impl;

import com.api.soccer.entities.Club;
import com.api.soccer.exceptions.ResourceNotFoundException;
import com.api.soccer.repository.ClubRepository;
import com.api.soccer.service.ClubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ClubServiceImpl implements ClubService {

    @Autowired
    private ClubRepository clubRepository;

    @Override
    public List<Club> findAll() {
        return clubRepository.findAll();
    }

    @Override
    public Club findById(Integer id) {
        return clubRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Club", "id", id)
        );
    }

    @Override
    public Club save(Club club) {

        return clubRepository.save(club);
    }

    @Override
    public Club update(Club club, Integer id) {
        Club clubFind = clubRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Club", "id", id)
        );

        clubFind.setName(club.getName());
        clubFind.setStadiumName(club.getStadiumName());
        clubFind.setAddress(club.getAddress());
        clubFind.setCity(club.getCity());
        clubFind.setWebsite(club.getWebsite());
        clubFind.setCoach(club.getCoach());

        Club clubSave = clubRepository.save(clubFind);
        return clubSave;
    }

    @Override
    public void delete(Integer id) {
        Club clubFind = clubRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Club", "id", id)
        );

        clubRepository.delete(clubFind);
    }
}
