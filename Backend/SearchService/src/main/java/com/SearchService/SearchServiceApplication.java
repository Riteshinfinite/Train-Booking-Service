package com.SearchService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//
//import io.swagger.v3.oas.annotations.OpenAPIDefinition;
//import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@EntityScan("com.SearchService.model")
@ComponentScan(basePackages="com.SearchService.*")
@EnableJpaRepositories("com.SearchService.repository")
//@OpenAPIDefinition(info = @Info(title = "Search APIS"))
public class SearchServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SearchServiceApplication.class, args);
	}

}
