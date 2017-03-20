package com.yncrea.framework.configurations;

import com.yncrea.framework.security.jwt.filters.JWTFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.configuration.EnableGlobalAuthentication;

@Configuration
@ComponentScan("com.yncrea.framework.security.jwt")
@EnableAutoConfiguration
public class JWTConfiguration {

    @Autowired
    private JWTFilter jwtFilter;

    @Bean
    public FilterRegistrationBean JWTInterceptor() {
        final FilterRegistrationBean registrationBean = new FilterRegistrationBean();
        final String[] paths = new String[] {
            "/api/client",
            "/api/commande",
            "/api/detailscommande",
            "/heapdump*",
            "/mappings*",
            "/trace*",
            "/info*",
            "/health*",
            "/autoconfig*",
            "/metrics**",
            "/env**",
            "/dump**",
            "/configprops*",
            "/beans*"
        };

        registrationBean.setFilter(jwtFilter);
        registrationBean.addUrlPatterns(paths);

        return registrationBean;
    }
}
