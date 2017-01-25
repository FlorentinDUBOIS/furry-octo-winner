package com.yncrea.framework.security.jwt.filters;

import com.yncrea.framework.security.jwt.services.AuthenticationService;
import com.yncrea.framework.services.ClientService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JWTFilter extends GenericFilterBean {

    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private ClientService clientService;

    @Override
    public void doFilter(final ServletRequest servletRequest, final ServletResponse servletResponse, final FilterChain filterChain) throws IOException, ServletException {
        final HttpServletRequest req = (HttpServletRequest) servletRequest;
        final HttpServletResponse res = (HttpServletResponse) servletResponse;

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

        Claims claims = Jwts
            .parser()
            .parseClaimsJws(token)
            .getBody();

        if (!clientService.exists(claims.getSubject())) {
            res.sendError(403);

            return;
        }

        filterChain.doFilter(servletRequest, servletResponse);
    }
}
