package com.yncrea.framework.api.rest;

import com.yncrea.framework.api.rest.exceptions.AuthenticationException;
import com.yncrea.framework.api.rest.exceptions.ClientNotFoundException;
import com.yncrea.framework.api.rest.pojos.ClientCredentials;
import com.yncrea.framework.entities.Client;
import com.yncrea.framework.security.jwt.services.AuthenticationService;
import com.yncrea.framework.services.ClientService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthController {

    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private ClientService clientService;

    @PostMapping("/api/auth/{Id}")
    public HashMap<String, String> create(@PathVariable(name = "Id") String Id, @RequestBody ClientCredentials clientCredentials) throws ClientNotFoundException, AuthenticationException {
        if (!clientService.exists(Id)) {
            throw new ClientNotFoundException("Unknown client");
        }

        HashMap<String, String> object = new HashMap<String, String>();
        Client client = clientService.findOne(Id);

        if (!BCrypt.checkpw(clientCredentials.getPassword(), client.getHash())) {
            throw new AuthenticationException("Password is invalid.");
        }

        object.put("token", authenticationService.genToken(client));

        return object;
    }

}
