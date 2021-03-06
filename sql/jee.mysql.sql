
CREATE DATABASE IF NOT EXISTS jee;
USE jee;

DROP TRIGGER IF EXISTS BEFORE_INSERT_ON_DETAIL_COMMANDE;
DROP TRIGGER IF EXISTS BEFORE_INSERT_ON_ARTICLE;
DROP TRIGGER IF EXISTS BEFORE_INSERT_ON_CLIENT;
DROP TRIGGER IF EXISTS BEFORE_INSERT_ON_COMMANDE;
DROP TRIGGER IF EXISTS BEFORE_INSERT_ON_ADRESSE;

DROP TABLE IF EXISTS `detailcommande`;
DROP TABLE IF EXISTS `commande`;
DROP TABLE IF EXISTS `article`;
DROP TABLE IF EXISTS `adresse`;
DROP TABLE IF EXISTS `client`;

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
  `email` varchar(64) NOT NULL,
  `salt` varchar(64) NOT NULL,
  `hash` varchar(512) NOT NULL,
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
  FOREIGN KEY (`clientid`) REFERENCES `client` (`id`)
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

CREATE TABLE `adresse` (
  `id` varchar(64) NOT NULL,
  `ville` varchar(64) DEFAULT NULL,
  `cp` varchar(10) DEFAULT NULL,
  `adresse` varchar(128) DEFAULT NULL,
  `alias` varchar(128) DEFAULT NULL,
  `clientid` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`clientid`) REFERENCES `client` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE TRIGGER BEFORE_INSERT_ON_ARTICLE
  BEFORE INSERT ON `article`
  FOR EACH ROW
  IF `new`.`id` IS NULL THEN
    SET `new`.`id` = uuid();
  END IF;

CREATE TRIGGER BEFORE_INSERT_ON_CLIENT
  BEFORE INSERT ON `client`
  FOR EACH ROW
  IF `new`.`id` IS NULL THEN
    SET `new`.`id` = uuid();
  END IF;

CREATE TRIGGER BEFORE_INSERT_ON_COMMANDE
  BEFORE INSERT ON `commande`
  FOR EACH ROW
  IF `new`.`id` IS NULL THEN
    SET `new`.`id` = uuid();
  END IF;

CREATE TRIGGER BEFORE_INSERT_ON_DETAIL_COMMANDE
  BEFORE INSERT ON `detailcommande`
  FOR EACH ROW
  IF `new`.`id` IS NULL THEN
    SET `new`.`id` = uuid();
  END IF;

CREATE TRIGGER BEFORE_INSERT_ON_DETAIL_ADRESSE
  BEFORE INSERT ON `adresse`
  FOR EACH ROW
  IF `new`.`id` IS NULL THEN
    SET `new`.`id` = uuid();
  END IF;