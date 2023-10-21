package com.api.soccer.controller;


import com.api.soccer.entities.Club;
import com.api.soccer.service.ClubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/clubs")
public class ClubController {

    @Autowired
    private ClubService clubService;

    @GetMapping
    public ResponseEntity<List<Club>> findAll() {
        List<Club> listClub = clubService.findAll();

        return new ResponseEntity<>(listClub, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Club> findById(@PathVariable(name = "id") Integer id) {
        Club clubFind = clubService.findById(id);

        return new ResponseEntity<>(clubFind, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Club> save(@RequestBody Club club) {
        Club clubSave = clubService.save(club);

        return new ResponseEntity<>(clubSave, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Club> update(@PathVariable(name = "id") Integer id, @RequestBody Club club) {
        Club clubUpdate = clubService.update(club, id);
        return new ResponseEntity<>(clubUpdate, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable(name = "id") Integer id) {
        clubService.delete(id);
        return new ResponseEntity<>("Club Eliminado con éxito!", HttpStatus.OK);
    }
}
