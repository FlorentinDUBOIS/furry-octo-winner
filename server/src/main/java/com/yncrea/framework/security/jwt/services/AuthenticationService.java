package com.yncrea.framework.security.jwt.services;

import com.yncrea.framework.entities.Client;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.Properties;

@Service
public class AuthenticationService {

    @Value("${application.security.jwt.expiration.time}")
    private Integer expirationTime;

    @Value("${application.security.jwt.secret}")
    private String secret;

    public String genToken(Client client) {
        return Jwts
            .builder()
            .setExpiration(new Date(System.currentTimeMillis() + expirationTime))
            .setSubject(client.getId())
            .signWith(SignatureAlgorithm.HS512, secret)
            .compact();
    }

    public Boolean isValid(HttpServletRequest req) {
        return isValid(req.getHeader("Authorization").substring(4));
    }

    public Boolean isValid(String token) {
        try {
            Claims claims = Jwts
                .parser()
                .setSigningKey(secret)
                .parseClaimsJws(token)
                .getBody();

            return true;
        } catch (SignatureException e) {
            return false;
        }
    }
}
