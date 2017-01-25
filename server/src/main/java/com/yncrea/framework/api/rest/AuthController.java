package com.yncrea.framework.api.rest;

import com.yncrea.framework.api.rest.exceptions.AuthenticationException;
import com.yncrea.framework.api.rest.exceptions.ClientNotFoundException;
import com.yncrea.framework.api.rest.pojos.ClientCredentials;
import com.yncrea.framework.entities.Client;
import com.yncrea.framework.security.jwt.services.AuthenticationService;
import com.yncrea.framework.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@CrossOrigin
@RestController
public class AuthController {

    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private ClientService clientService;

    @PostMapping("/api/auth")
    public HashMap<String, String> create(@RequestBody ClientCredentials clientCredentials) {
        Client client = clientService.findByEmail(clientCredentials.getEmail());

        if (client == null) {
            throw new ClientNotFoundException();
        }

        HashMap<String, String> object = new HashMap<String, String>();
        if (!BCrypt.checkpw(clientCredentials.getMotdepasse(), client.getHash())) {
            throw new AuthenticationException();
        }

        object.put("token", authenticationService.genToken(client));

        return object;
    }

}
