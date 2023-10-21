package com.api.soccer.service;

import com.api.soccer.dto.ClubDTO;
import com.api.soccer.entities.Club;

import java.util.List;

public interface ClubService {

    List<ClubDTO> findAll();
    ClubDTO findById(Integer id);
    ClubDTO save(ClubDTO clubDTO);
    ClubDTO update(ClubDTO clubDTO, Integer id);
    void delete(Integer id);
}
