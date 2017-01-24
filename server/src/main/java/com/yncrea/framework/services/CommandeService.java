package com.yncrea.framework.services;

import com.yncrea.framework.entities.Commande;
import com.yncrea.framework.repositories.CommandeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CommandeService implements IService<Commande, Integer> {

    @Autowired
    private CommandeRepository commandeRepository;

    @Override
    @Transactional
    public Iterable<Commande> find() {
        return commandeRepository.findAll();
    }

    @Override
    @Transactional
    public Commande create(Commande entity) {
        return commandeRepository.save(entity);
    }

    @Override
    @Transactional
    public Commande findOne(Integer Id) {
        return commandeRepository.findOne(Id);
    }

    @Override
    @Transactional
    public Commande update(Commande entity) {
        return commandeRepository.save(entity);
    }

    @Override
    @Transactional
    public void delete(Integer Id) {
        commandeRepository.delete(Id);
    }
}
