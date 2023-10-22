package com.api.soccer.service.impl;

import com.api.soccer.dto.ClubDTO;
import com.api.soccer.entities.Club;
import com.api.soccer.exceptions.ResourceNotFoundException;
import com.api.soccer.repository.ClubRepository;
import com.api.soccer.service.ClubService;
import com.api.soccer.utils.ClubResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ClubServiceImpl implements ClubService {

    @Autowired
    private ClubRepository clubRepository;

    @Override
    public ClubResponse findAll(int pageNum, int pageSize, String sortAsc) {

        Sort sort = sortAsc.equalsIgnoreCase(Sort.Direction.ASC.name())
                ? Sort.by("id").ascending()
                : Sort.by("id").descending();

        PageRequest pageable = PageRequest.of(pageNum, pageSize, sort);

        Page<Club> clubs = clubRepository.findAll(pageable);
        List<ClubDTO> content = clubs.stream().map(club -> mapClubDTO(club)).toList();

        ClubResponse clubResponse = ClubResponse.builder()
                .content(content)
                .pageNum(clubs.getNumber())
                .pageSize(clubs.getSize())
                .totalElements(clubs.getTotalElements())
                .totalPages(clubs.getTotalPages())
                .lastPage(clubs.isLast())
                .build();

        return clubResponse;
    }

    @Override
    public ClubDTO findById(Integer id) {
        Club clubFind = clubRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Club", "id", id)
        );

        return mapClubDTO(clubFind);
    }

    @Override
    public ClubDTO save(ClubDTO clubDTO) {
        Club clubSave = clubRepository.save(mapClub(clubDTO));
        return mapClubDTO(clubSave);
    }

    @Override
    public ClubDTO update(ClubDTO clubDTO, Integer id) {
        Club clubFind = clubRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Club", "id", id)
        );

        clubFind.setName(clubDTO.getName());
        clubFind.setStadiumName(clubDTO.getStadiumName());
        clubFind.setAddress(clubDTO.getAddress());
        clubFind.setCity(clubDTO.getCity());
        clubFind.setWebsite(clubDTO.getWebsite());
        clubFind.setCoach(clubDTO.getCoach());

        Club clubSave = clubRepository.save(clubFind);

        return mapClubDTO(clubSave);
    }

    @Override
    public void delete(Integer id) {
        Club clubFind = clubRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Club", "id", id)
        );

        clubRepository.delete(clubFind);
    }

    private ClubDTO mapClubDTO(Club club) {
        ClubDTO clubDTO = ClubDTO.builder()
                .id(club.getId())
                .name(club.getName())
                .stadiumName(club.getStadiumName())
                .city(club.getCity())
                .website(club.getWebsite())
                .address(club.getAddress())
                .coach(club.getCoach())
                .build();

        return clubDTO;
    }

    private Club mapClub(ClubDTO clubDTO) {
        Club club = Club.builder()
                .id(clubDTO.getId())
                .name(clubDTO.getName())
                .stadiumName(clubDTO.getStadiumName())
                .city(clubDTO.getCity())
                .website(clubDTO.getWebsite())
                .address(clubDTO.getAddress())
                .coach(clubDTO.getCoach())
                .build();

        return club;
    }

}
