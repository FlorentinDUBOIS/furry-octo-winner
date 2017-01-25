package com.yncrea.framework.entities;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "article")
public class Article {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "nom")
    private String nom;

    @Column(name = "reference")
    private String reference ;

    @Column(name = "prixunitaireht")
    private float prixunitaireht ;

    @Column(name = "description")
    private String description ;

    public Article() {
        id = UUID.randomUUID().toString();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public float getPrixunitaireht() {
        return prixunitaireht;
    }

    public void setPrixunitaireht(float prixunitaireht) {
        this.prixunitaireht = prixunitaireht;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
