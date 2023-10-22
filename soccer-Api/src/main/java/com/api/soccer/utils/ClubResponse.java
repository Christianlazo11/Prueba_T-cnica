package com.api.soccer.utils;

import com.api.soccer.dto.ClubDTO;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ClubResponse {

    private List<ClubDTO> content;
    private int pageNum;
    private int pageSize;
    private Long totalElements;
    private int totalPages;
    private boolean lastPage;

}
