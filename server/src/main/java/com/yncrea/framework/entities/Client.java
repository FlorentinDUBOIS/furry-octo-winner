package com.yncrea.framework.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "client")
public class Client {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private String Id;

    @Column(name = "nom")
    private String Nom;

    @Column(name = "prenom")
    private String Prenom;

    @Column(name = "ville")
    private String Ville;

    @Column(name = "cp")
    private String CP;

    @Column(name = "adresse")
    private String Adresse;

    @Column(name = "email")
    private String Email;

    @JsonIgnore
    @Column(name = "salt")
    private String salt;

    @JsonIgnore
    @Column(name = "hash")
    private String hash;

    @Column(name = "clientvalide")
    private Boolean ClientValide;

    @Column(name = "clientbloque")
    private Boolean ClientBloque;

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

    public String getPrenom() {
        return Prenom;
    }

    public void setPrenom(String prenom) {
        Prenom = prenom;
    }

    public String getVille() {
        return Ville;
    }

    public void setVille(String ville) {
        Ville = ville;
    }

    public String getCP() {
        return CP;
    }

    public void setCP(String CP) {
        this.CP = CP;
    }

    public String getAdresse() {
        return Adresse;
    }

    public void setAdresse(String adresse) {
        Adresse = adresse;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public Boolean getClientValide() {
        return ClientValide;
    }

    public void setClientValide(Boolean clientValide) {
        ClientValide = clientValide;
    }

    public Boolean getClientBloque() {
        return ClientBloque;
    }

    public void setClientBloque(Boolean clientBloque) {
        ClientBloque = clientBloque;
    }

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt;
    }

    public String getHash() {
        return hash;
    }

    public void setHash(String hash) {
        this.hash = hash;
    }
}
