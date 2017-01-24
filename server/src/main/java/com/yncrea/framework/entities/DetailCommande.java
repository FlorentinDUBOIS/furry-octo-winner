package com.yncrea.framework.entities;

import javax.persistence.*;

@Entity
@Table(name = "detailcommande")
public class DetailCommande {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private String Id;

    @Column(name = "articleid ")
    private String articleid;

    @Column(name = "commandeid")
    private String commandeid ;

    @Column(name = "prixunitaireht")
    private float PrixUnitaireHT ;

    @Column(name = "quantite")
    private Integer quantite ;

    public String getId() {
        return Id;
    }

    public void setId(String id) {
        Id = id;
    }

    public String getArticleid() {
        return articleid;
    }

    public void setArticleid(String articleid) {
        this.articleid = articleid;
    }

    public String getCommandeid() {
        return commandeid;
    }

    public void setCommandeid(String commandeid) {
        this.commandeid = commandeid;
    }

    public float getPrixUnitaireHT() {
        return PrixUnitaireHT;
    }

    public void setPrixUnitaireHT(float prixUnitaireHT) {
        PrixUnitaireHT = prixUnitaireHT;
    }

    public Integer getQuantite() {
        return quantite;
    }

    public void setQuantite(Integer quantite) {
        this.quantite = quantite;
    }
}
