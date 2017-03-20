package com.yncrea.framework.api.rest;


import com.yncrea.framework.entities.DetailCommande;
import com.yncrea.framework.services.DetailCommandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class DetailCommandeController implements IController<DetailCommande, String>  {

    @Autowired
    private DetailCommandeService detailCommandeService;

    @Override
    @GetMapping("/api/detailcommande")
    public Iterable<DetailCommande> find() {
        return detailCommandeService.find();
    }

    @Override
    @PostMapping("/api/detailcommande")
    public DetailCommande create(@RequestBody DetailCommande detailCommande) {
        return detailCommandeService.create(detailCommande);
    }

    @Override
    @GetMapping("/api/detailcommande/{Id}")
    public DetailCommande findOne(@PathVariable(name = "Id") String Id) {
        return detailCommandeService.findOne(Id);
    }

    @Override
    @PutMapping("/api/detailcommande/{Id}")
    public DetailCommande update(@PathVariable(name = "Id") String Id, @RequestBody DetailCommande detailCommande) {
        return detailCommandeService.update(detailCommande);
    }

    @Override
    @DeleteMapping("/api/detailcommande/{Id}")
    public void delete(@PathVariable(name = "Id") String Id) {
        detailCommandeService.delete(Id);
    }
}
