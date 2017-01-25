package com.yncrea.framework.api.rest;

import com.yncrea.framework.api.rest.IController;
import com.yncrea.framework.entities.Commande;
import com.yncrea.framework.services.CommandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class CommandeController implements IController<Commande, String> {

    @Autowired
    private CommandeService commandeService;

    @Override
    @GetMapping("/api/commande")
    public Iterable<Commande> find() {
        return commandeService.find();
    }

    @Override
    @PostMapping("/api/commande")
    public Commande create(@RequestBody Commande entity) {
        return commandeService.create(entity);
    }

    @Override
    @GetMapping("/api/commande/{Id}")
    public Commande findOne(@PathVariable(name = "Id") String Id) {
        return commandeService.findOne(Id);
    }

    @Override
    @PutMapping("/api/commande/{Id}")
    public Commande update(@PathVariable(name = "Id") String Id, @RequestBody Commande entity) {
        return commandeService.update(entity);
    }

    @Override
    @DeleteMapping("/api/commande/{Id}")
    public void delete(@PathVariable(name = "Id") String Id) {
        commandeService.delete(Id);
    }
}
