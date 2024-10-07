package com.example.DI;

import com.example.DI.bean.Config;
import com.example.DI.bean.Member;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

@SpringBootApplication
public class DiApplication {

	public static void main(String[] args) {
//		SpringApplication.run(DiApplication.class, args);
		ApplicationContext context = new AnnotationConfigApplicationContext(Config.class);

		Member member = (Member) context.getBean("member1");
		member.print();
	}

}
