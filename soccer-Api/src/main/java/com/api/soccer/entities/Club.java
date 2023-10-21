package com.api.soccer.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "club")
public class Club {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "stadium_name")
    private String stadiumName;

    @Column(name = "city", nullable = false)
    private String city;

    @Column(name = "website", nullable = false)
    private String website;

    @Column(name = "address", nullable = false)
    private String address;

    @OneToOne(targetEntity = Coach.class, cascade = CascadeType.ALL)
    private Coach coach;

    @ManyToMany(targetEntity = Competition.class, cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinTable(
            name = "club_competition_association",
            joinColumns = @JoinColumn(name = "club_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "competition_id", referencedColumnName = "id")
    )
    @JsonIgnore
    List<Competition> competitions;

}
