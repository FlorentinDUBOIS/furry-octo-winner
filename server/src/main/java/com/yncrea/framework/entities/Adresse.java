package com.yncrea.framework.entities;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "adresse")
public class Article {

    @Id
    @Column(name = "id")
    private String Id;

    @Column(name = "ville")
    private String Ville;

    @Column(name = "cp")
    private String CP ;

    @Column(name = "adresse")
    private String Adresse ;

    @Column(name = "alias")
    private String Alias ;

    public Article() {
        Id = UUID.randomUUID().toString();
    }

    public String getId() {
        return Id;
    }

    public void setId(String id) {
        Id = id;
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

    public String getAlias() {
        return Alias;
    }

    public void setAlias(String alias) {
        Alias = alias;
    }


}
