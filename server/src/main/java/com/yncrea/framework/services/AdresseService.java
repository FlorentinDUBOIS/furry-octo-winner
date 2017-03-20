package com.yncrea.framework.services;


import com.yncrea.framework.entities.Adresse;
import com.yncrea.framework.repositories.AdresseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AdresseService implements IService<Adresse, String> {

    @Autowired
    private AdresseRepository adresseRepository;

    @Override
    @Transactional
    public Iterable<Adresse> find() {
        return adresseRepository.findAll();
    }

    @Override
    @Transactional
    public Adresse create(Adresse entity) {
        return adresseRepository.save(entity);
    }

    @Override
    @Transactional
    public Adresse findOne(String Id) {
        return adresseRepository.findOne(Id);
    }

    @Override
    @Transactional
    public Adresse update(Adresse entity) {
        return adresseRepository.save(entity);
    }

    @Override
    @Transactional
    public void delete(String Id) {
        adresseRepository.delete(Id);
    }
}
