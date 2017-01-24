package com.yncrea.framework.services;

import com.yncrea.framework.entities.DetailCommande;
import com.yncrea.framework.repositories.DetailCommandeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class DetailCommandeService  implements IService<DetailCommande, Integer> {

    @Autowired
    private DetailCommandeRepository detailCommandeRepository;

    @Override
    @Transactional
    public Iterable<DetailCommande> find() {
        return detailCommandeRepository.findAll();
    }

    @Override
    @Transactional
    public DetailCommande create(DetailCommande entity) {
        return detailCommandeRepository.save(entity);
    }

    @Override
    @Transactional
    public DetailCommande findOne(Integer Id) {
        return detailCommandeRepository.findOne(Id);
    }

    @Override
    @Transactional
    public DetailCommande update(DetailCommande entity) {
        return detailCommandeRepository.save(entity);
    }

    @Override
    @Transactional
    public void delete(Integer Id) {
        detailCommandeRepository.delete(Id);
    }
}
