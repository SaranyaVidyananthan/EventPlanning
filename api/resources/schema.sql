CREATE DATABASE IF NOT EXISTS eventPlanner;
USE eventPlanner;

DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS vendors;

CREATE TABLE IF NOT EXISTS User(
userId INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
firstName VARCHAR(125),
surName VARCHAR(125),
email VARCHAR(25),
type ENUM('vendor', 'customer'),
CREATE TYPE INTARRAY AS INTEGER ARRAY[10];
);

CREATE TABLE IF NOT EXISTS Vendor(
vendorId INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
vendorName VARCHAR(150)
email VARCHAR(25),
phoneNumber CHAR(10),
userId INT NOT NULL REFERENCES User(userId),
type ENUM('decorator', 'eventPlanner', 'photographer', 'videographer', 'makeupArtist', 'hairStylist', 'venue', 'mc', 'caterer', 'florist', 'band', 'dj', 'dressDesigner')
);