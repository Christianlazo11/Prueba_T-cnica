package com.api.soccer.entities;


import jakarta.persistence.*;
import lombok.*;

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

    @OneToOne(targetEntity = Coach.class, cascade = CascadeType.PERSIST)
    private Coach coach;

}
