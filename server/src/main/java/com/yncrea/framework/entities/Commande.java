package com.yncrea.framework.entities;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "commande")
public class Commande {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Integer Id;

    @Column(name = "client_id")
    private Integer ClientId;

    @Column(name = "datecommande")
    private Date DateCommande;

    @Column(name = "tauxtva")
    private float TauxTVA;

    @Column(name = "moyenpaiement")
    private String MoyenPaiement;

    @Column(name = "etapecommande")
    private Integer EtapeCommande;

    @Column(name = "commandepayee")
    private Boolean CommandePayee;

    @Column(name = "commandeannulee")
    private Boolean commandeannulee;

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public Integer getClientId() {
        return ClientId;
    }

    public void setClientId(Integer clientId) {
        ClientId = clientId;
    }

    public Date getDateCommande() {
        return DateCommande;
    }

    public void setDateCommande(Date dateCommande) {
        DateCommande = dateCommande;
    }

    public float getTauxTVA() {
        return TauxTVA;
    }

    public void setTauxTVA(float tauxTVA) {
        TauxTVA = tauxTVA;
    }

    public String getMoyenPaiement() {
        return MoyenPaiement;
    }

    public void setMoyenPaiement(String moyenPaiement) {
        MoyenPaiement = moyenPaiement;
    }

    public Integer getEtapeCommande() {
        return EtapeCommande;
    }

    public void setEtapeCommande(Integer etapeCommande) {
        EtapeCommande = etapeCommande;
    }

    public Boolean getCommandePayee() {
        return CommandePayee;
    }

    public void setCommandePayee(Boolean commandePayee) {
        CommandePayee = commandePayee;
    }

    public Boolean getCommandeannulee() {
        return commandeannulee;
    }

    public void setCommandeannulee(Boolean commandeannulee) {
        this.commandeannulee = commandeannulee;
    }
}
