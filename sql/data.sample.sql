-- password bob
INSERT INTO client (id, nom, prenom, ville, cp, adresse, email, salt, hash, clientvalide, clientbloque)
  VALUES
    ('8f1a7d0f-63ae-416f-98ee-474eb86cdd3f', 'Doe', 'John', 'Londres', 'SW1A', '1AA', 'yolo@swag.penis', '$2a$10$AFM5LgZuHr7UE.EVL2DMlu', '$2a$10$AFM5LgZuHr7UE.EVL2DMluNu4Qc7xAN.jjS6I43a8mECVXjfroCVq', 1, 0);

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
