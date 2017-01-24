package com.yncrea.framework.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

import javax.persistence.*;

@Entity
@Table(name = "client")
public class Client {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Integer Id;

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

    @Column(name = "motdepasse")
    private String MotdePasse;

    @Column(name = "clientvalide")
    private Boolean ClientValide;

    @Column(name = "clientbloque")
    private Boolean ClientBloque;

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
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

    public String getMotdePasse() {
        return MotdePasse;
    }

    public void setMotdePasse(String motdePasse) {
        MotdePasse = motdePasse;
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
}
