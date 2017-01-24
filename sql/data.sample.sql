INSERT INTO client (nom, prenom, cp, adresse, ville, email, salt, hash, clientvalide, clientbloque)
  VALUES
      ('collignon', 'rémi',       '29200', '2 rue maurice le flem', 'brest', 'contact@rcdinfo.fr', '', '', TRUE, FALSE),
      ('dubois',    'vincent',    '29200', '2 rue maurice le flem', 'brest', 'contact@vincentriouallon.fr', '', '', TRUE, FALSE),
      ('riouallon', 'florentin',  '29200', '2 rue maurice le flem', 'brest', 'contact@dubois.fr', '', '', TRUE , FALSE),
      ('morvan',    'guy-yann',   '29200', '2 rue maurice le flem', 'brest', 'contact@morvan.fr', '', '', TRUE , FALSE);

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
