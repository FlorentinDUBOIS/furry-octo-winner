package com.yncrea.framework.entities;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "article")
public class Article {

    @Id
    @Column(name = "id")
    private String Id;

    @Column(name = "nom")
    private String Nom;

    @Column(name = "reference")
    private String Reference ;

    @Column(name = "prixunitaireht")
    private float PrixUnitaireHT ;

    @Column(name = "description")
    private String Description ;

    public Article() {
        Id = UUID.randomUUID().toString();
    }

    public String getId() {
        return Id;
    }

    public void setId(String id) {
        Id = id;
    }

    public String getNom() {
        return Nom;
    }

    public void setNom(String nom) {
        Nom = nom;
    }

    public String getReference() {
        return Reference;
    }

    public void setReference(String reference) {
        Reference = reference;
    }

    public float getPrixUnitaireHT() {
        return PrixUnitaireHT;
    }

    public void setPrixUnitaireHT(float prixUnitaireHT) {
        PrixUnitaireHT = prixUnitaireHT;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }
}
