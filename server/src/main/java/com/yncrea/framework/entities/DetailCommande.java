package com.yncrea.framework.entities;

import javax.persistence.*;

@Entity
@Table(name = "detailcommande")
public class DetailCommande {


    @Id
    @GeneratedValue
    @Column(name = "id")
    private Integer Id;

    @Column(name = "article_id ")
    private Integer article_id;

    @Column(name = "commande_id")
    private Integer commande_id ;

    @Column(name = "prixunitaireht")
    private float PrixUnitaireHT ;

    @Column(name = "quantite")
    private Integer quantite ;
}
