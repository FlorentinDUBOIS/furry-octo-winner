INSERT INTO client (id, nom, prenom, ville, cp, adresse, email, salt, hash, clientvalide, clientbloque)
  VALUES
    ('b40a4154-5224-4e00-9ada-9cf6b9f2fa2e', 'DUBOIS', 'Florentin', 'Brest', '29200', '3 rue bosquet', 'duboiflorentin@live.fr', '$2a$10$EoGEOGkbBrjRVpvbuU7Tqu', '$2a$10$EoGEOGkbBrjRVpvbuU7TquhVbP9o5tLRNszWLuzcnqaW3Ys8vOWH6', 1, 0);

INSERT INTO article (nom, reference, prixunitaireht, description)
  VALUES
    ('iphone 7', 'apple-iphone-7', 700.00, 'the new Apple smartphone'),
    ('iphone 6', 'apple-iphone-6', 500.00, 'the old Apple smartphone'),
    ('one Plus 2', 'one-plus-2', 300.00, 'the old OnePlus smartphone'),
    ('one Plus 3', 'one-plus-3', 400.00, 'the new OnePlus smartphone');

INSERT INTO commande (clientid, datecommande, tauxtva, moyenpaiement, etapecommande, commandepayee, commandeannulee)
  VALUES
    ( (SELECT id FROM client WHERE nom='dubois'), now(), 20.00, 'CB', 1, FALSE, FALSE);


INSERT INTO detailcommande (articleid, commandeid, prixunitaireht, quantite)
  VALUES
    ((SELECT id FROM article WHERE nom='iphone 7'), (SELECT id FROM commande LIMIT 1), 1400, 2 ),
    ((SELECT id FROM article WHERE nom='iphone 6'), (SELECT id FROM commande LIMIT 1), 1000, 2 );
