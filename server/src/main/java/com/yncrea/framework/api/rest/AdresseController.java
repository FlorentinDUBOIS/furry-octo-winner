package com.yncrea.framework.api.rest;

import com.yncrea.framework.entities.Adresse;
import com.yncrea.framework.services.AdresseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class AdresseController implements IController<Adresse, String>  {

    @Autowired
    private AdresseService adresseService;

    @Override
    @GetMapping("/api/adresse")
    public Iterable<Adresse> find() {
        return adresseService.find();
    }

    @Override
    @PostMapping("/api/adresse")
    public Adresse create(@RequestBody Adresse adresse) {
        return adresseService.create(adresse);
    }

    @Override
    @GetMapping("/api/adresse/{Id}")
    public Adresse findOne(@PathVariable(name = "Id") String Id) {
        return adresseService.findOne(Id);
    }

    @Override
    @PutMapping("/api/adresse/{Id}")
    public Adresse update(@PathVariable(name = "Id") String Id, @RequestBody Adresse adresse) {
        return adresseService.update(adresse);
    }

    @Override
    @DeleteMapping("/api/adresse/{Id}")
    public void delete(@PathVariable(name = "Id") String Id) {
        adresseService.delete(Id);
    }
}
