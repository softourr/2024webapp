package com.sample.spring.service;

import com.sample.spring.dto.SimpleBbsDto;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ISimpleBbsService {
    public List<SimpleBbsDto> list();
    public int count();
    public SimpleBbsDto view(String id);
    public int write(String writer, String title, String content);
    public int delete(@Param("_id") String id);
}
