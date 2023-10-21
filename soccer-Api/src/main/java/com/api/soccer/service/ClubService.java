package com.api.soccer.service;

import com.api.soccer.entities.Club;

import java.util.List;

public interface ClubService {

    List<Club> findAll();
    Club findById(Integer id);
    Club save(Club club);
    Club update(Club club, Integer id);
    void delete(Integer id);
}
