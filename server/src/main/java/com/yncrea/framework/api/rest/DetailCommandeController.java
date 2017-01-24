package com.yncrea.framework.api.rest;


import com.yncrea.framework.entities.DetailCommande;
import com.yncrea.framework.services.DetailCommandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

public class DetailCommandeController   implements IController<DetailCommande, Integer>  {


    @Autowired
    private DetailCommandeService detailCommandeService;

    @Override
    @GetMapping("/api/detailCommande")
    public Iterable<DetailCommande> find() {
        return detailCommandeService.find();
    }

    @Override
    @PostMapping("/api/detailCommande")
    public DetailCommande create(@RequestBody DetailCommande detailCommande) {
        return detailCommandeService.create(detailCommande);
    }

    @Override
    @GetMapping("/api/detailCommande/{Id}")
    public DetailCommande findOne(@PathVariable(name = "Id") Integer Id) {
        return detailCommandeService.findOne(Id);
    }

    @Override
    @PutMapping("/api/detailCommande/{Id}")
    public DetailCommande update(@PathVariable(name = "Id") Integer Id, @RequestBody DetailCommande detailCommande) {
        return detailCommandeService.update(detailCommande);
    }

    @Override
    @DeleteMapping("/api/detailCommande/{Id}")
    public void delete(@PathVariable(name = "Id") Integer Id) {
        detailCommandeService.delete(Id);
    }
}
