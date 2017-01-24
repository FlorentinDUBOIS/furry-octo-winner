DROP TABLE `detail_commande`;
DROP TABLE `commande`;
DROP TABLE `client`;
DROP TABLE `article`;

CREATE TABLE `article` (
  `id` varchar(64) NOT NULL,
  `nom` varchar(64) NOT NULL,
  `reference` varchar(16) NOT NULL,
  `prixunitaireht` float NOT NULL,
  `description` varchar(2048) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `client` (
  `id` varchar(64) NOT NULL,
  `nom` varchar(64) NOT NULL,
  `prenom` varchar(64) NOT NULL,
  `ville` varchar(64) NOT NULL,
  `cp` varchar(10) NOT NULL,
  `adresse` varchar(128) NOT NULL,
  `email` varchar(64) NOT NULL,
  `motdepasse` varchar(32) NOT NULL,
  `clientvalide` tinyint(1) NOT NULL,
  `clientbloque` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `commande` (
  `id` varchar(64) NOT NULL,
  `clientid` varchar(64) NOT NULL,
  `datecommande` date NOT NULL,
  `tauxtva` float NOT NULL,
  `moyenpaiement` char(2) NOT NULL,
  `etapecommande` tinyint(4) NOT NULL,
  `commandepayee` tinyint(1) NOT NULL,
  `commandeannulee` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`clientId`) REFERENCES `client` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `detailcommande` (
  `id` varchar(64) NOT NULL,
  `articleid` varchar(64) NOT NULL,
  `commandeid` varchar(64) NOT NULL,
  `prixunitaireht` float NOT NULL,
  `quantite` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`articleid`) REFERENCES `article` (`id`),
  FOREIGN KEY (`commandeid`) REFERENCES `commande` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TRIGGER BEFORE_INSERT_ON_ARTICLE BEFORE INSERT ON `article` FOR EACH ROW SET `new`.`id` = uuid();
CREATE TRIGGER BEFORE_INSERT_ON_CLIENT BEFORE INSERT ON `client` FOR EACH ROW SET `new`.`id` = uuid();
CREATE TRIGGER BEFORE_INSERT_ON_COMMANDE BEFORE INSERT ON `commande` FOR EACH ROW SET `new`.`id` = uuid();
CREATE TRIGGER BEFORE_INSERT_ON_DETAIL_COMMANDE BEFORE INSERT ON `detailcommande` FOR EACH ROW SET `new`.`id` = uuid();
