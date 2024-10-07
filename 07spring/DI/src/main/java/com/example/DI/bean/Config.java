package com.example.DI.bean;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Config {

    @Bean
    public Member member1() {
        Member member1 = new Member("haneol", "EOL", new PrinterA());
        return member1;
    }
}
