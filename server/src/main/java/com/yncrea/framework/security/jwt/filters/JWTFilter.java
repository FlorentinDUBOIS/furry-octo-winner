package com.yncrea.framework.security.jwt.filters;

import com.yncrea.framework.security.jwt.services.AuthenticationService;
import org.springframework.security.web.authentication.www.DigestAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JWTFilter extends DigestAuthenticationFilter {

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
