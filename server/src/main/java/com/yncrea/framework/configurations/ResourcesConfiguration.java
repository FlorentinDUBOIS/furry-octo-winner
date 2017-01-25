package com.yncrea.framework.configurations;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.resource.GzipResourceResolver;
import org.springframework.web.servlet.resource.PathResourceResolver;

@Configuration
public class ResourcesConfiguration extends WebMvcConfigurerAdapter {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry
            .addResourceHandler("/**")
            .addResourceLocations("file:/home/florentin/Git/FlorentinDUBOIS/furry-octo-winner/client")
            .setCachePeriod(3600)
            .resourceChain(true)
            .addResolver(new PathResourceResolver())
            .addResolver(new GzipResourceResolver());
    }
}
