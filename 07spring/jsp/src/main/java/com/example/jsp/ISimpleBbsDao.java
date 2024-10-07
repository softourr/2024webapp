package com.example.jsp;

import org.springframework.jdbc.core.BeanPropertyRowMapper;

import java.util.List;

public interface ISimpleBbsDao {
    public List<SimpleBbsDto> listDao();
    public int countDao();
}
