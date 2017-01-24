--
-- CREATE TABLE
--
CREATE TABLE client (
  id            UUID PRIMARY KEY DEFAULT uuid_in((md5((random())::text))::cstring),
  nom           VARCHAR(64),
  prenom        VARCHAR(64),
  cp            VARCHAR(10),
  adresse       VARCHAR(128),
  ville         VARCHAR(64),
  email         VARCHAR(64),
  motdepasse  VARCHAR(128),
  clientvalide BOOLEAN,
  clientbloque BOOLEAN
);

CREATE TABLE article (
  id                UUID PRIMARY KEY DEFAULT uuid_in((md5((random())::text))::cstring),
  nom               VARCHAR(64),
  reference         VARCHAR(16),
  prixunitaireht  FLOAT,
  description       TEXT
);

CREATE TABLE commande (
  id               UUID PRIMARY KEY DEFAULT uuid_in((md5((random())::text))::cstring),
  clientid        UUID,
  datecommande    TIMESTAMP,
  tauxtva         FLOAT,
  moyenpaiement   CHAR(2),
  etapecommande   SMALLINT,
  commandepayee   BOOLEAN,
  commandeannulee BOOLEAN
);

CREATE TABLE detailcommande (
  id                UUID PRIMARY KEY DEFAULT uuid_in((md5((random())::text))::cstring),
  articleid        UUID,
  commandeid       UUID,
  prixunitaireht  FLOAT,
  quantite          INTEGER
);

--
-- FOREIGN KEYS LINKS
--
ALTER TABLE commande
ADD CONSTRAINT commande_client_id_fk
FOREIGN KEY (clientid) REFERENCES client (id);

ALTER TABLE detail_commande
ADD CONSTRAINT detail_commande_article_id_fk
FOREIGN KEY (articleid) REFERENCES article (id);

ALTER TABLE detail_commande
ADD CONSTRAINT detail_commande_commande_id_fk
FOREIGN KEY (commandeid) REFERENCES commande (id);

--
-- INDEXES
--
CREATE INDEX CONCURRENTLY idx_commande_dates
  ON commande(datecommande);
CREATE INDEX CONCURRENTLY idx_commande_client
  ON commande(clientid);
CREATE INDEX CONCURRENTLY idx_client_full_name
  ON client(nom, prenom);
CREATE INDEX CONCURRENTLY idx_article_ref
  ON article(reference);
CREATE INDEX CONCURRENTLY idx_article_name
  ON article(nom);
CREATE INDEX CONCURRENTLY idx_detail_commande_commande
  ON detail_commande(commandeid);
