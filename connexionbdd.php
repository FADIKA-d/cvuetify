<?php
function connexionbdd()
{
    $host="localhost"; 
    $login= "root";  // loggin d'accès au serveur de BDD 
    $password="";    // pour s'identifier auprès du serveur
    $base = "cv";

    try 
    {      
    $db = new PDO('mysql:host='.$host.';charset=utf8;dbname='.$base, $login, $password, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));   
    return $db;
    } 
    catch (Exception $e) 
    {
        echo 'Erreur : ' . $e->getMessage() . '<br>';
        echo 'N° : ' . $e->getCode() . '<br>';
        die('Connexion au serveur impossible.');
    }
}