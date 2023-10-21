USE DB_FIFA;

INSERT INTO coach (name, nationality, age) VALUES 
("Jurgen Klopp", "Aleman", 56),
("Pep Guardiola", "Español", 52),
("Mikel Arteta", "Español", 41),
("Ange Postecoglou", "Australiano", 58),
("Edin Terzic", "Croata", 40),
("Thomas Tuchel", "Aleman", 50),
("Marco Rose", "Aleman", 47),
("Carlo Ancelotti", "Italiano", 64),
("Xavi Hernandez", "Español", 43),
("Diego Simeone", "Argentino", 53),
("Stefano Pioli", "Italiano", 58),
("Simone Inzaghi", "Italiano", 47),
("Massimiliano Allegri", "Italiano", 59),
("Luis Enrique", "Español", 53),
("Adi Hutter", "Polaco", 53);


INSERT INTO club (name, stadium_name, city, website, address, coach_id) VALUES
("Liverpool", "Anfield", "Liverpool", "www.liverpool.com", "Anfield Rd", 1),
("Manchester City", "Etihad Stadium", "Manchester", "www.mancity.com", "Rowsley Street",2),
("Arsenal FC", "Emirates Stadium", "Londres", "www.arsenal.com", "Hornsey Road, N5 1BU London, Inglaterra",3),
("Tottenham ", "Tottenham Hotspur Stadium", "Londres", "www.liverpool.com", "782 High Rd, London",4),
("Borussia Dortmund", "Signal Iduna Park", "Dortmund", "www.Dortmund.com", "Strobelallee 50, 44139",5),
("Bayern de Múnich", "Allianz Arena", "Múnich", "www.Bayern.com", "Werner-Heisenberg-Allee 25",6),
("RB Leipzig", "Red Bull Aren", "Leipzig", "www.Leipzig.com", "Am Sportforum 3, 04105",7),
("Real Madrid", "Santiago Bernabéu", "Madrid", "www.realMadrid.com", "Av. de Concha Espina",8),
("FC Barcelona", "Spotify Camp Nou", "Barcelona", "www.Barcelona.com", "Avda. Arístides Maillol",9),
("Atlético de Madrid", "Cívitas Metropolitano", "Madrid", "www.atleticodemadrid.com/", "Av. de Luis Aragonés, 4",10),
("AC Milan", "Giuseppe Meazza", "Milan", "www.Milan.com", "Piazzale Angelo Moratti",11),
("Inter Milan", "Giuseppe Meazza", "Milan", "www.Inter.com", "Piazzale Angelo Moratti",12),
("Juventus", "Juventus Stadium", "Juventus", "www.Juventus.com", "Corso Gaetano Scirea",13),
("PSG", "Parc des Princes", "Paris", "www.PSG.com", "24, rue du Commandant Guilbaud 75016 Paris",14),
("AS Monaco", "Louis II", "Monaco", "www.Monaco.com", "7, avenue des Castelans",15);

INSERT INTO competition (name, start_date, end_date) VALUES 
("Premier League","2023-08-15", "2024-05-10"),
("Bundesliga","2023-08-15", "2024-05-10"),
("Liga 1","2023-08-15", "2024-05-10"),
("Serie A","2023-08-15", "2024-05-10"),
("Primera División","2023-08-15", "2024-05-10"),
("Champions League","2023-08-15", "2024-05-10");


