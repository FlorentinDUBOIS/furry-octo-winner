package com.yncrea.framework.api.rest;

import com.yncrea.framework.entities.Client;
import com.yncrea.framework.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class ClientController implements IController<Client, String> {

    @Autowired
    private ClientService clientService;

    @Override
    @GetMapping("/api/client")
    public Iterable<Client> find() {
        return clientService.find();
    }

    @Override
    @PostMapping("/api/client")
    public Client create(@RequestBody Client client) {
        return clientService.create(client);
    }

    @Override
    @GetMapping("/api/client/{Id}")
    public Client findOne(@PathVariable(name = "Id") String Id) {
        return clientService.findOne(Id);
    }

    @Override
    @PutMapping("/api/client/{Id}")
    public Client update(@PathVariable(name = "Id") String Id, @RequestBody Client client) {
        return clientService.update(client);
    }

    @Override
    @DeleteMapping("/api/client/{Id}")
    public void delete(@PathVariable(name = "Id") String Id) {
        clientService.delete(Id);
    }
}
