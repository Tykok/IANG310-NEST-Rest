DROP TABLE IF EXISTS club;

CREATE TABLE IF NOT EXISTS club (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(255) NOT NULL,
  ville VARCHAR(255) NOT NULL,
  pays VARCHAR(255) NOT NULL,
  stade VARCHAR(255) NOT NULL,
  logo VARCHAR(255) NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT 1
);

INSERT INTO club 
(id, nom, ville, pays, stade, logo, is_active)
VALUES
(1, 'Toulouse FC', 'Toulouse', 'France', 'Stadium Municipal', 'https://upload.wikimedia.org/wikipedia/fr/8/8b/Logo_Toulouse_FC_2018.svg', true),
(2, 'Monaco', 'Monaco', 'France', 'Stade Louis II', 'https://upload.wikimedia.org/wikipedia/fr/5/58/Logo_AS_Monaco_FC_-_2021.svg', true),
(3, 'Olympique Marseille', 'Marseille', 'France', 'Stade Vélodrome', 'https://upload.wikimedia.org/wikipedia/fr/4/43/Logo_Olympique_de_Marseille.svg', true);

