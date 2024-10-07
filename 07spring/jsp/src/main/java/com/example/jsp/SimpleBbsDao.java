package com.example.jsp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class SimpleBbsDao implements ISimpleBbsDao{
    @Autowired
    JdbcTemplate template;

    @Override
    public List<SimpleBbsDto> listDao() {
        String query = "select * from simple_bbs order by id desc";

        List<SimpleBbsDto> dtos = template.query(query,
                new BeanPropertyRowMapper<>(SimpleBbsDto.class));

        return dtos;
    }

    @Override
    public int countDao() {
        String query = "select count(*) from simple_bbs";

        int count = template.queryForObject(query, Integer.class);
        return count;
    }
}
