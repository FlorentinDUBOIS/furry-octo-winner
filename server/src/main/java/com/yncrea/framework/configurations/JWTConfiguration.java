package com.yncrea.framework.configurations;

import com.yncrea.framework.security.jwt.filters.JWTFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JWTConfiguration {


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

        registrationBean.setFilter(new JWTFilter());
        registrationBean.addUrlPatterns(paths);

        return registrationBean;
    }
}
