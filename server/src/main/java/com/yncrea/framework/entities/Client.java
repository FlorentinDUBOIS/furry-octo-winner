package com.yncrea.framework.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.crypto.bcrypt.BCrypt;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "client")
public class Client {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "nom")
    private String nom;

    @Column(name = "prenom")
    private String prenom;

    @Column(name = "ville")
    private String ville;

    @Column(name = "cp")
    private String cp;

    @Column(name = "adresse")
    private String adresse;

    @Column(name = "email")
    private String email;

    @JsonIgnore
    @Column(name = "salt")
    private String salt;

    @JsonIgnore
    @Column(name = "hash")
    private String hash;

    @Column(name = "clientvalide")
    private Boolean clientvalide;

    @Column(name = "clientbloque")
    private Boolean clientbloque;

    public Client() {
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

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getVille() {
        return ville;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }

    public String getCp() {
        return cp;
    }

    public void setCp(String cp) {
        this.cp = cp;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

    public Boolean getClientvalide() {
        return clientvalide;
    }

    public void setClientvalide(Boolean clientvalide) {
        this.clientvalide = clientvalide;
    }

    public Boolean getClientbloque() {
        return clientbloque;
    }

    public void setClientbloque(Boolean clientbloque) {
        this.clientbloque = clientbloque;
    }

    public void setPassword(String password) {
        if (salt == null) {
            salt = BCrypt.gensalt();
        }

        hash = BCrypt.hashpw(password, salt);
    }
}
