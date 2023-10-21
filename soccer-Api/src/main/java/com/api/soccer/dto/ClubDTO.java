package com.api.soccer.dto;

import com.api.soccer.entities.Coach;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ClubDTO {

    private Integer id;
    private String name;
    private String stadiumName;
    private String city;
    private String website;
    private String address;
    private Coach coach;

}
