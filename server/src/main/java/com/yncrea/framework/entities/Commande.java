package com.yncrea.framework.entities;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "commande")
public class Commande {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "clientid")
    private String clientid;

    @Column(name = "datecommande")
    private Date datecommande;

    @Column(name = "tauxtva")
    private float tauxtva;

    @Column(name = "moyenpaiement")
    private String moyenpaiement;

    @Column(name = "etapecommande")
    private Integer etapecommande;

    @Column(name = "commandepayee")
    private Boolean commandepayee;

    @Column(name = "commandeannulee")
    private Boolean commandeannulee;

    public Commande() {
        id = UUID.randomUUID().toString();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getClientid() {
        return clientid;
    }

    public void setClientid(String clientid) {
        this.clientid = clientid;
    }

    public Date getDatecommande() {
        return datecommande;
    }

    public void setDatecommande(Date datecommande) {
        this.datecommande = datecommande;
    }

    public float getTauxtva() {
        return tauxtva;
    }

    public void setTauxtva(float tauxtva) {
        this.tauxtva = tauxtva;
    }

    public String getMoyenpaiement() {
        return moyenpaiement;
    }

    public void setMoyenpaiement(String moyenpaiement) {
        this.moyenpaiement = moyenpaiement;
    }

    public Integer getEtapecommande() {
        return etapecommande;
    }

    public void setEtapecommande(Integer etapecommande) {
        this.etapecommande = etapecommande;
    }

    public Boolean getCommandepayee() {
        return commandepayee;
    }

    public void setCommandepayee(Boolean commandepayee) {
        this.commandepayee = commandepayee;
    }

    public Boolean getCommandeannulee() {
        return commandeannulee;
    }

    public void setCommandeannulee(Boolean commandeannulee) {
        this.commandeannulee = commandeannulee;
    }
}
