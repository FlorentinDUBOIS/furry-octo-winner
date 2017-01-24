-- MySQL dump 10.16  Distrib 10.1.21-MariaDB, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: 127.0.0.1
-- ------------------------------------------------------
-- Server version	10.1.21-MariaDB-1~jessie

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Article`
--

DROP TABLE IF EXISTS `Article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Article` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(64) DEFAULT NULL,
  `Reference` varchar(16) DEFAULT NULL,
  `PrixUnitaireHT` float DEFAULT NULL,
  `Description` varchar(2048) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Article`
--

/*!40000 ALTER TABLE `Article` DISABLE KEYS */;
/*!40000 ALTER TABLE `Article` ENABLE KEYS */;

--
-- Table structure for table `Commande`
--

DROP TABLE IF EXISTS `Commande`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Commande` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Client_Id` int(11) DEFAULT NULL,
  `DateCommande` date DEFAULT NULL,
  `TauxTVA` float DEFAULT NULL,
  `MoyenPaiement` char(2) DEFAULT NULL,
  `EtapeCommande` tinyint(4) DEFAULT NULL,
  `CommandePayee` tinyint(1) DEFAULT NULL,
  `CommandeAnnulee` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `Commande_client_Id_fk` (`Client_Id`),
  CONSTRAINT `Commande_client_Id_fk` FOREIGN KEY (`Client_Id`) REFERENCES `client` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Commande`
--

/*!40000 ALTER TABLE `Commande` DISABLE KEYS */;
/*!40000 ALTER TABLE `Commande` ENABLE KEYS */;

--
-- Table structure for table `Detail_Commande`
--

DROP TABLE IF EXISTS `Detail_Commande`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Detail_Commande` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Article_Id` int(11) DEFAULT NULL,
  `Commande_Id` int(11) DEFAULT NULL,
  `PrixUnitaireHT` float DEFAULT NULL,
  `Quantite` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `Detail_Commande_Article_Id_fk` (`Article_Id`),
  KEY `Detail_Commande_Commande_Id_fk` (`Commande_Id`),
  CONSTRAINT `Detail_Commande_Article_Id_fk` FOREIGN KEY (`Article_Id`) REFERENCES `Article` (`Id`),
  CONSTRAINT `Detail_Commande_Commande_Id_fk` FOREIGN KEY (`Commande_Id`) REFERENCES `Commande` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Detail_Commande`
--

/*!40000 ALTER TABLE `Detail_Commande` DISABLE KEYS */;
/*!40000 ALTER TABLE `Detail_Commande` ENABLE KEYS */;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `client` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(64) DEFAULT NULL,
  `Prenom` varchar(64) DEFAULT NULL,
  `Ville` varchar(64) DEFAULT NULL,
  `CP` varchar(10) DEFAULT NULL,
  `Adresse` varchar(128) DEFAULT NULL,
  `Email` varchar(64) DEFAULT NULL,
  `MotdePasse` varchar(32) DEFAULT NULL,
  `ClientValide` tinyint(1) DEFAULT NULL,
  `ClientBloque` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES (1,'Dubois','Florentin','Brest','29200','3 rue bosquet','duboiflorentin@gmail.com','Aqwzsxedc,123',1,0);
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-01-24  9:57:30
