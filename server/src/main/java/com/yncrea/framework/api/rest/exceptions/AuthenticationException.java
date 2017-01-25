package com.yncrea.framework.api.rest.exceptions;

public class AuthenticationException extends RuntimeException {
    public AuthenticationException() {
        super("Invalid authentication");
    }
}
