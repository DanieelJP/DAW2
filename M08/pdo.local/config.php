<?php

/**
 * Configuration for database connection
 *
 */

$host       = "localhost";
$username   = "usuario";
$password   = "Dosmiltres_2003";
$dbname     = "bbdd";
$dsn        = "mysql:host=$host;dbname=$dbname";
$options    = array(
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
              );
