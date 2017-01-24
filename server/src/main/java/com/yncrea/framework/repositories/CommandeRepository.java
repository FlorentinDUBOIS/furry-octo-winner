package com.yncrea.framework.repositories;

import com.yncrea.framework.entities.Commande;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommandeRepository extends CrudRepository<Commande, Integer> { }
