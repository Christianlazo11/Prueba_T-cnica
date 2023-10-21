package com.api.soccer.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ClubAppException extends RuntimeException{

    private static final Long serialVersionUID = 1L;
    private HttpStatus state;
    private String message;
}
