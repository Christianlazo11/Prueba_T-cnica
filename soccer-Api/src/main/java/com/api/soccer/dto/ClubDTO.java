package com.api.soccer.dto;

import com.api.soccer.entities.Coach;
import jakarta.validation.constraints.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ClubDTO {

    @NonNull
    @Positive
    private Integer id;

    @NotEmpty
    @Size(min = 8, message = "El nombre del club debe tener por lo menos 8 caracteres")
    private String name;

    @NotEmpty
    @Size(min = 4, message = "El nombre del equipo debe tener por lo menos 8 caracteres")
    private String stadiumName;

    @NotEmpty
    @Size(min = 4, message = "El nombre de la ciudad debe tener por lo menos 8 caracteres")
    private String city;

    @NotEmpty
    @Size(min = 4, message = "El website debe tener por lo menos 8 caracteres")
    private String website;

    @NotEmpty
    @Size(min = 4, message = "El la dirección debe tener por lo menos 5 caracteres")
    private String address;

    @NonNull
    private Coach coach;

}
