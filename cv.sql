DROP DATABASE IF EXISTS `cv`;
CREATE DATABASE IF NOT EXISTS `cv`;
USE `cv`;

DROP TABLE IF EXISTS `icon`;
CREATE TABLE IF NOT EXISTS `icon` (
    `icon_id` INT(10) AUTO_INCREMENT  NOT NULL,
    `icon_name` VARCHAR(30) NOT NULL,
    `icon_value` VARCHAR(50) DEFAULT NULL,
    PRIMARY KEY (`icon_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='Table icon';
DROP TABLE IF EXISTS `profil`;
CREATE TABLE IF NOT EXISTS  `profil` (
    `profil_id` INT(10) AUTO_INCREMENT  NOT NULL,
    `profil_description` VARCHAR(1000) NOT NULL,
    `profil_availability` DATETIME DEFAULT NOW() COMMENT 'Date de disponibilité',
    PRIMARY KEY (`profil_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='Table profil';
DROP TABLE IF EXISTS `contact`;
CREATE TABLE IF NOT EXISTS `contact` (
    `contact_id` INT(10) AUTO_INCREMENT  NOT NULL,
    `contact_phone` INT(10) NOT NULL,
    `contact_email` VARCHAR(100) NOT NULL,
    `contact_adresse` VARCHAR(200) NOT NULL COMMENT 'adresse',
    `contact_linkedin` VARCHAR(50) DEFAULT NULL,
    `contact_github` VARCHAR(50) DEFAULT NULL,
    PRIMARY KEY (`contact_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='Table contact';
DROP TABLE IF EXISTS `skill`;
CREATE TABLE IF NOT EXISTS `skill` (
    `skill_id` INT(10) AUTO_INCREMENT  NOT NULL,
    `skill_name` VARCHAR(30) NOT NULL,
    `skill_icon` INT(10) DEFAULT NULL,
    `skill_category` VARCHAR(30) NOT NULL,
    `skill_level` INT(3) DEFAULT NULL,
    PRIMARY KEY (`skill_id`),
    KEY `skill_icon` (`skill_icon`),
    CONSTRAINT `skill_icon_fk_1` FOREIGN KEY (`skill_icon`) REFERENCES `icon` (`icon_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COMMENT='Table skill';
DROP TABLE IF EXISTS `interest`;
CREATE TABLE IF NOT EXISTS `interest` (
    `interest_id` INT(10) AUTO_INCREMENT  NOT NULL,
    `interest_name` VARCHAR(30) DEFAULT NULL,
    `interest_icon` INT(10) DEFAULT NULL,
    PRIMARY KEY (`interest_id`),
    KEY `interest_icon_fk_1` (`interest_icon`),
    CONSTRAINT `interest_icon` FOREIGN KEY (`interest_icon`) REFERENCES `icon` (`icon_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COMMENT='Table interest';
DROP TABLE IF EXISTS `experience`;
CREATE TABLE IF NOT EXISTS `experience` (
    `experience_id` INT(10) AUTO_INCREMENT  NOT NULL,
    `experience_company` VARCHAR(50) NOT NULL,
    `experience_function` VARCHAR(50) NOT NULL,
    `experience_start_date` DATE NOT NULL,
    `experience_end_date` DATE NOT NULL,
    `experience_place` VARCHAR(100) NOT NULL,
    `experience_mission` VARCHAR(200) NOT NULL,
    PRIMARY KEY (`experience_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='Table experience';
DROP TABLE IF EXISTS `education`;
CREATE TABLE IF NOT EXISTS `education` (
    `education_id` INT(10) AUTO_INCREMENT  NOT NULL,
    `education_degree` VARCHAR(50) NOT NULL,
    `education_year` INT(4) NOT NULL,
    `education_field` VARCHAR(100) NOT NULL,
    `education_institution` VARCHAR(50) NOT NULL,
    `education_location` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`education_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='Table education';
DROP TABLE IF EXISTS `language`;
CREATE TABLE IF NOT EXISTS `language` (
    `language_id` INT(10) AUTO_INCREMENT  NOT NULL,
    `language_name` VARCHAR(30) NOT NULL,
    `language_level` INT(3) DEFAULT NULL,
    PRIMARY KEY (`language_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='Table language';
INSERT INTO `icon` (`icon_id`, `icon_name`, `icon_value`) VALUES 
(1, 'HTML5','mdi-language-html5'),
(2, 'CSS3', 'mdi-language-css3'),
(3, 'Javascript', 'mdi-language-javascript'),
(4, 'Vue.js', 'mdi-vuejs'),
(5, 'Bootstrap', 'mdi-bootstrap'),
(6, 'JQuery', 'mdi-jquery'),
(7, 'PHP', 'mdi-language-php'),
(8, 'MySQL', ''),
(9, 'Wordpress','mdi-wordpress'),
(10, 'CodeIgniter', ''),
(11, 'Digimind', ''),
(12, 'KBcrawl', ''),
(13, 'Photoshop', ''),
(14, 'Python', 'mdi-language-python'),
(15, 'Java', 'mdi-language-java'),
(16, 'Angular', 'mdi-angular'),
(17, 'React', 'mdi-react' ),
(18, 'Node', ''),
(19, 'Symphony', 'mdi-symfony');
INSERT INTO `profil` (`profil_id`, `profil_description`, `profil_availability`) VALUES 
(1, 'Développeuse en développement, je  cherche une opportunité pour mettre à profit mes nouvelles compétences en front–end et back-end au sein d’une équipe dynamique.', NOW() );
INSERT INTO `contact` (`contact_id`, `contact_phone`, `contact_email`, `contact_adresse`, `contact_linkedin`, `contact_github`) VALUES 
(1, "0658414872", 'd.fadika@gmail.com', '14 Avenue Buffon', 'Fadika' ,'FADIKA-d');
INSERT INTO `skill` (`skill_id`, `skill_name`, `skill_icon`, `skill_category`, `skill_level`) VALUES 
(1, 'HTML5', 1 , 'Front-end', 4),
(2, 'CSS3', 2 , 'Front-end', 4),
(3, 'Javascript', 3 , 'Front-end', 3),
(4, 'Vue.js', 4 , 'Front-end', 3),
(5, 'Bootstrap', 5 , 'Front-end', 4),
(6, 'JQuery', 6 , 'Front-end', 4),
(7, 'PHP', 7 , 'Back-end', 4),
(8, 'MySQL', 8 , 'Back-end', 4),
(9, 'Wordpress', 9 , 'Back-end', 3),
(10, 'CodeIgniter',10 , 'Back-end', 3),
(11, 'Digimind', 11 , 'Veille', 2),
(12, 'KBcrawl', 12 , 'Veille', 2),
(13, 'Photoshop', 13 , 'Design', 2);
INSERT INTO `interest` ( `interest_id`, `interest_name`, `interest_icon`) VALUES 
(1, 'Python', 14),
(2, 'Angular', 16),
(3, 'React', 17),
(4, 'Node', 18),
(5, 'Symphony', 19),
(6, 'Java', 15);
INSERT INTO `experience` (`experience_id`, `experience_company`, `experience_function`, `experience_start_date`, `experience_end_date`, `experience_place`, `experience_mission`) VALUES 
(1, 'GMF VIE', 'Chargé de veille documentaire', 2013, 2014, 'Paris', 'Réalisation d’études documentaires et pilotage du dispositif de veille. Rédaction de préconisations pour optimiser l’offre (produit et service). Aide au déploiement du logiciel médiathèque du service en vue d’accroitre l’attractivité du service.'),
(2, 'BURSON MARSTELLER', 'Chargé d\'études et de veille stratégique', 2013, 2014, 'Paris', 'Réalisation de veilles presse quotidiennes en anglais et en français. Réalisation de benchmarks pour les 25 consultants. Mise en place d’alertes et de requêtes pour les collaborateurs.'),
(3, 'TESTE POUR VOUS', 'Chargé de veille concurrentielle', 2010, 2010, 'Paris', 'Réalisation de veilles concurrentielles sur les produits financiers. Gestion des sources d’information du service de veille. Surveillance des signaux faibles.');
INSERT INTO `education` (`education_id`, `education_degree`, `education_year`, `education_field`, `education_institution`, `education_location` ) VALUES 
(1, 'Tire professionnel (BAC + 2)', 2020, 'Développeur Web et Web mobile', 'Afpa', 'Amiens'),
(2, 'Master 2 (BAC +5)', 2020, 'Stratégie d’entreprise et économie industrielle', 'Panthéon-Assas ', 'Paris'),
(3, 'Master 2 (BAC +5)', 2020, 'Economie industrielle et veille stratégique', 'Montesquieu-Bordeaux 4 ', 'Bordeaux');
INSERT INTO `language` (`language_id`, `language_name`, `language_level`) VALUES 
(1, 'Français', 6),
(2, 'Anglais', 4),
(3, 'Espagnol', 2);    




-- ALTER TABLE `skill`
--   ADD CONSTRAINT `skill_icon_fk_1` FOREIGN KEY (`skill_icon`) REFERENCES `icon` (`icon_id`);

-- ALTER TABLE `interest`
--   ADD CONSTRAINT `interest_icon_fk_1` FOREIGN KEY (`interest_icon`) REFERENCES `icon` (`icon_id`);