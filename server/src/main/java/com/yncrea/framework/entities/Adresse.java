package com.yncrea.framework.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.UUID;

@Entity
@Table(name = "adresse")
public class Adresse {

        @Id
        @Column(name = "id")
        private String id;

        @Column(name = "ville")
        private String ville;

        @Column(name = "cp")
        private String cp ;

        @Column(name = "adresse")
        private String adresse ;

        @Column(name = "alias")
        private String alias ;

        public Article() {
            id = UUID.randomUUID().toString();
        }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }
}
