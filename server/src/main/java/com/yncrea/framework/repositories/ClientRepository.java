package com.yncrea.framework.repositories;

import com.yncrea.framework.entities.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClientRepository extends CrudRepository<Client, String> {
    Client findByEmail(String email);
}