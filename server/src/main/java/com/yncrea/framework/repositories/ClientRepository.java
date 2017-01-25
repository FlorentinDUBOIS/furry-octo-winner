package com.yncrea.framework.repositories;

import com.yncrea.framework.entities.Client;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends CrudRepository<Client, String> {
    public Client findByEmail(String email);
}