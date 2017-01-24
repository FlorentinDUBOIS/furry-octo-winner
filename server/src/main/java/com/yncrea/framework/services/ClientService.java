package com.yncrea.framework.services;

import com.yncrea.framework.entities.Client;
import com.yncrea.framework.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ClientService implements IService<Client, Integer> {

    @Autowired
    private ClientRepository clientRepository;

    @Transactional
    public Iterable<Client> find() {
        return clientRepository.findAll();
    }

    @Transactional
    public Client create(Client entity) {
        return clientRepository.save(entity);
    }

    @Transactional
    public Client findOne(Integer Id) {
        return clientRepository.findOne(Id);
    }

    @Transactional
    public Client update(Client entity) {
        return clientRepository.save(entity);
    }

    @Transactional
    public void delete(Integer Id) {
        clientRepository.delete(Id);
    }
}
