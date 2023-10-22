package com.api.soccer.service;

import com.api.soccer.dto.ClubDTO;
import com.api.soccer.entities.Club;
import com.api.soccer.utils.ClubResponse;

import java.util.List;

public interface ClubService {

    ClubResponse findAll(int pageNum, int pageSize, String sortAsc);
    ClubDTO findById(Integer id);
    ClubDTO save(ClubDTO clubDTO);
    ClubDTO update(ClubDTO clubDTO, Integer id);
    void delete(Integer id);
}
