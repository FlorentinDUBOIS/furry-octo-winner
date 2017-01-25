INSERT INTO client (nom, prenom, email, salt, hash, clientvalide, clientbloque)
  VALUES
      ('collignon', 'rémi', 'contact@rcdinfo.fr', '', '', TRUE, FALSE),
      ('dubois',    'vincent', 'contact@vincentriouallon.fr', '', '', TRUE, FALSE),
      ('riouallon', 'florentin', 'contact@dubois.fr', '', '', TRUE , FALSE),
      ('morvan',    'guy-yann', 'contact@morvan.fr', '', '', TRUE , FALSE);

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


INSERT INTO adresse (ville,cp,adresse,alias,clientid)
  VALUES
    ('Brest','29200','5 rue cuirassé bretagne','Brest', (SELECT id FROM client WHERE nom='collignon')),
    ('Brest','29200','42 rue du yoloswag','Brest', (SELECT id FROM client WHERE nom='morvan')),
    ('Guilers','29820','44 rue degas grall','Guilers', (SELECT id FROM client WHERE nom='riouallon')),
    ('Saint-Grégoire','35666','rue du X','Xswag', (SELECT id FROM client WHERE nom='morvan')),
    ('Brest','29200','2 rue maurice le flem','Brest', (SELECT id FROM client WHERE nom='dubois'));
    