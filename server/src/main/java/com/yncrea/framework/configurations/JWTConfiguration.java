package com.yncrea.framework.configurations;

import com.yncrea.framework.security.jwt.filters.JWTFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JWTConfiguration {

    @Autowired
    private JWTFilter jwtFilter;

    @Bean
    public FilterRegistrationBean jwtFilter() {
        final FilterRegistrationBean registrationBean = new FilterRegistrationBean();
        final String[] paths = new String[] {
            "/api/article",
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
