package com.yncrea.framework.entities;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "detailcommande")
public class DetailCommande {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "articleid ")
    private String articleid;

    @Column(name = "commandeid")
    private String commandeid ;

    @Column(name = "prixunitaireht")
    private float prixunitaireht ;

    @Column(name = "quantite")
    private Integer quantite ;

    public DetailCommande() {
        id = UUID.randomUUID().toString();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public float getPrixunitaireht() {
        return prixunitaireht;
    }

    public void setPrixunitaireht(float prixunitaireht) {
        this.prixunitaireht = prixunitaireht;
    }

    public Integer getQuantite() {
        return quantite;
    }

    public void setQuantite(Integer quantite) {
        this.quantite = quantite;
    }
}
