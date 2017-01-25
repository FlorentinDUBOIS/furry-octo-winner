package com.yncrea.framework.services;

import com.yncrea.framework.entities.Client;
import com.yncrea.framework.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Iterator;
import java.util.List;
import java.util.Vector;

@Service
public class ClientService implements IService<Client, String> {

    @Autowired
    private ClientRepository clientRepository;

    @Override
    @Transactional
    public Iterable<Client> find() {
        return clientRepository.findAll();
    }

    @Override
    @Transactional
    public Client create(Client entity) {
        return clientRepository.save(entity);
    }

    @Override
    @Transactional
    public Client findOne(String Id) {
        return clientRepository.findOne(Id);
    }

    @Override
    @Transactional
    public Client update(Client entity) {
        return clientRepository.save(entity);
    }

    @Override
    @Transactional
    public void delete(String Id) {
        clientRepository.delete(Id);
    }

    @Transactional
    public Client findByEmail(String email) {
        return clientRepository.findByEmail(email);
    }
}
