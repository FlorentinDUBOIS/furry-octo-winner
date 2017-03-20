package com.yncrea.framework.security.jwt.filters;

import com.yncrea.framework.security.jwt.services.AuthenticationService;
import org.springframework.boot.autoconfigure.jersey.JerseyProperties;
import org.springframework.security.web.authentication.www.DigestAuthenticationFilter;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JWTFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void destroy() {

    }

    @Override
    public void doFilter(final ServletRequest servletRequest, final ServletResponse servletResponse, final FilterChain filterChain) throws IOException, ServletException {
        final HttpServletRequest req = (HttpServletRequest) servletRequest;
        final HttpServletResponse res = (HttpServletResponse) servletResponse;
        final AuthenticationService authenticationService = new AuthenticationService();

        String authorization = req.getHeader("Authorization");
        if (authorization == null || !authorization.startsWith("JWT ")) {
            res.sendError(403);

            return;
        }

        String token = authorization.substring(4); // remove "JWT "
        if (!authenticationService.isValid(token)) {
            res.sendError(403);

            return;
        }

        filterChain.doFilter(servletRequest, servletResponse);
    }
}
