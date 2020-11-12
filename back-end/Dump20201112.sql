CREATE DATABASE  IF NOT EXISTS `budget` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `budget`;
-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: budget
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_incomes`
--

DROP TABLE IF EXISTS `user_incomes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_incomes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `amount` varchar(45) DEFAULT NULL,
  `date` date NOT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_incomes`
--

LOCK TABLES `user_incomes` WRITE;
/*!40000 ALTER TABLE `user_incomes` DISABLE KEYS */;
INSERT INTO `user_incomes` VALUES (1,'300','2020-11-12',1);
/*!40000 ALTER TABLE `user_incomes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roles` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roleId` int NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`roleId`,`userId`),
  KEY `userId` (`userId`),
  CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_saving`
--

DROP TABLE IF EXISTS `user_saving`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_saving` (
  `saving_id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `balance` int DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_saving`
--

LOCK TABLES `user_saving` WRITE;
/*!40000 ALTER TABLE `user_saving` DISABLE KEYS */;
INSERT INTO `user_saving` VALUES (1,1,'bank',500,1),(2,1,'cash',500,2),(1,2,'bank',1000,3),(2,2,'cash',500,4);
/*!40000 ALTER TABLE `user_saving` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_spends`
--

DROP TABLE IF EXISTS `user_spends`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_spends` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `suma` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_spends`
--

LOCK TABLES `user_spends` WRITE;
/*!40000 ALTER TABLE `user_spends` DISABLE KEYS */;
INSERT INTO `user_spends` VALUES (1,'food',1,50,NULL),(2,'pharmacy',1,20,NULL);
/*!40000 ALTER TABLE `user_spends` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `balance` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'ivan','ivanov','ii@gmail.com','$2a$08$R2hZZPpiYw0/pjZMdXcG7ONkxFeYM/g1I8Cl0I/N0wRTfrFNYdoMG','1000','2020-11-11 15:29:22','2020-11-11 15:29:22'),(2,'petro','petriv','pp@gmail.com','$2a$08$ezUUmhvrHzL3R3ZbMRthaOinA7RuEMwDPZXCRbZj5TwYGGHaVyQgS','20000','2020-11-11 15:29:55','2020-11-11 15:29:55'),(3,'iryna','petriv','ip@gmail.com','$2a$08$WaU3uWwWvZQrOtuO2ogKh.G84GiDm27bC7jfmN0zC445DKvxsFapq','5000','2020-11-11 15:30:13','2020-11-11 15:30:13'),(4,'fhfd','fdgdfgd','dsfsfs@sg.dh','$2a$08$2sXMhWChCdV5kMAcLqL.hOA7vDBoI4eDzyu.6FQyjKiARS8v2NL/W','1212','2020-11-11 15:50:10','2020-11-11 15:50:10'),(5,'ghfhgfh','ggfhgf','hgjhg@fg.hgf','$2a$08$qfAIl73zkyRoLNDK.ISkP.jYka5K5DQ6FrFqv8SjBykjSL55ikeL.','5454','2020-11-11 16:01:23','2020-11-11 16:01:23'),(6,'dsdfs','sdfsdfsd','sdfs@sdg.sdf','$2a$08$fIZkxDRqyRy1J7clSLVvEOsIYa9MrCxZBqtiwwKpCSNbNOgPuHtuG','11111','2020-11-11 16:03:02','2020-11-11 16:03:02'),(7,'hgjhg','hgjhg','hgjh@jhg.hhg','$2a$08$tbqpxNU1GC8bEpulp2/LnOxqkQ8KoZPsVQeb62R9aJBoTg8G8jKSi','32424','2020-11-11 16:09:01','2020-11-11 16:09:01'),(8,'gfhgf','ngg','jhgkjg@hg.hg','$2a$08$nfptERWbi/1CdUcHOa0NuecBKJYRp0a1ZQUQ2QV4FNXasxhsrcHgG','4445','2020-11-11 16:10:05','2020-11-11 16:10:05'),(9,'gfg','bv','vnvg@hgf.jf','$2a$08$r6E2ADxjB0MXba/ufyTJGem/dw2BIR0tBw7CvEGc8rN1U8dWxFkIG','4355','2020-11-11 16:13:19','2020-11-11 16:13:19'),(10,'sdfsdf','sdfsd','dfsdf@srg.fdg','$2a$08$vRtbC2irhpqJ38U9QhI25Or0yZz23e2L1/zIjVMQeBNQ.5sPaTi9i','252','2020-11-11 16:14:49','2020-11-11 16:14:49'),(11,'fgssgs','sdgsdg','sdgsdg@fdg.df','$2a$08$zrRQmuRxrIOWvCP/RTkBfO5AK3Qo9YEzTS/tnNRkh8QB9YiXFvele','3454','2020-11-11 16:17:53','2020-11-11 16:17:53');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-12 17:42:54
