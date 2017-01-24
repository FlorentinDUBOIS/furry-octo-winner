package com.yncrea.framework.api.rest;

import com.yncrea.framework.entities.Client;
import com.yncrea.framework.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClientController implements IController<Client, Integer> {

    @Autowired
    private ClientService clientService;

    @GetMapping("/api/client")
    public Iterable<Client> find() {
        return clientService.find();
    }

    @GetMapping("/api/client/{Id}")
    public Client findOne(@PathVariable(name = "Id") Integer Id) {
        return clientService.findOne(Id);
    }
}
