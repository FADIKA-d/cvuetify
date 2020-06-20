<?php
header('Access-Control-Allow-Origin: *'); 

require 'connexionbdd.php';
$db = connexionbdd();
// READ

$sql = "SELECT * FROM `contact` ";
        $requete = $db->query($sql);
        $requete->execute();
        $dataContact = $requete->fetchAll(PDO::FETCH_OBJ);

$sql = "SELECT * FROM `education` ";
        $requete = $db->query($sql);
        $requete->execute();
        $dataEducation = $requete->fetchAll(PDO::FETCH_OBJ);

$sql = "SELECT * FROM `experience` ";
        $requete = $db->query($sql);
        $requete->execute();
        $dataExperience = $requete->fetchAll(PDO::FETCH_OBJ);

        $sql = "SELECT * FROM `interest` ";
        $requete = $db->query($sql);
        $requete->execute();
        $dataInterest = $requete->fetchAll(PDO::FETCH_OBJ);

$sql = "SELECT * FROM `language` ";
        $requete = $db->query($sql);
        $requete->execute();
        $dataLanguage = $requete->fetchAll(PDO::FETCH_OBJ);

$sql = "SELECT * FROM `profil` ";
        $requete = $db->query($sql);
        $requete->execute();
        $dataProfil = $requete->fetchAll(PDO::FETCH_OBJ);

$sql = "SELECT * FROM `skill` ";
        $requete = $db->query($sql);
        $requete->execute();
        $dataSkill = $requete->fetchAll(PDO::FETCH_OBJ);

$sql = "SELECT * FROM `icon` ";
        $requete = $db->query($sql);
        $requete->execute();
        $dataSkill = $requete->fetchAll(PDO::FETCH_OBJ);
$result= array(
        "contact" => $dataContact, 
        "education" => $dataEducation, 
        "experience" => $dataExperience, 
        "interest" => $dataInterest, 
        "language" => $dataLanguage, 
        "profil" => $dataProfil, 
        "skill" => $dataSkill
        "icon" => $dataIcon);

echo json_encode($result);