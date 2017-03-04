package com.yncrea.framework;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.boot.autoconfigure.web.WebMvcAutoConfiguration;

@SpringBootApplication
@EnableWebSecurity
@EnableWebMvc
public class Application extends WebMvcAutoConfiguration {

    public static void main(String[] arguments) {
        SpringApplication.run(Application.class, arguments);
    }
}