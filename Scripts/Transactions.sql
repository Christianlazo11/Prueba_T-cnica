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

INSERT INTO player (nip, name, nationality, age, position, club_id) VALUES 
(65151556, "M. Neuer", "Aleman", 37, "POR", 6),
(65145556, "Kimmich", "Aleman", 28, "MED", 6),
(67896556, "Reus", "Aleman", 34, "MED", 5),
(65154682, "Moukoko", "Aleman", 18, "DEL", 5),
(66945632, "Thiago Alcántar", "Español", 32, "MED", 1),
(61369455, "Luis Díaz", "Colombiano", 26, "DEL", 1),
(65133365, "Jude Bellingham", "Aleman", 20, "MED", 8),
(14766445, "Luka Modrić", "Croata", 38, "MED", 8),
(75693345, "Vinícius Júnior", "Brasileño", 23, "DEL", 8),
(21458870, "Lewandowski", "Polaco", 35, "DEL", 9),
(35248206, "João Félix", "Portugues", 23, "DEL", 9),
(50036797, "Mbappé", "Frances", 24, "DEL", 14),
(30054806, "Dembélé", "Frances", 26, "DEL", 14),
(70520506, "Lautaro Martínez", "Argentino", 26, "DEL", 12),
(90960654, "Juan Cuadrado", "Colombiano", 35, "MED", 12);



INSERT INTO club_competition_association (club_id, competition_id) VALUES
(2,1),
(3,3),
(4,3),
(5,3),
(1,4),
(1,3),
(10,5),
(12,4),
(13,3),
(9,2);

SELECT name, age FROM player
UNION
SELECT name, age FROM coach;

SELECT name, age,
	CASE 
	WHEN age < 17 THEN "Cadete/Sub-17"
        WHEN age >= 17 AND age <= 19 THEN "Juvenil/Sub-19"
        WHEN age > 19 AND age <= 20 THEN "Sub-20"
        WHEN age > 20 AND age <= 23 THEN "Sub-23"
        WHEN age > 23 THEN "Adulto/Mayores"
        ELSE "No definido!"
    END AS Categoría
FROM player ORDER by age ASC;    

SELECT club.id, club.city, club.address 
FROM club
INNER JOIN club_competition_association 
ON club.id = club_competition_association.club_id;

SELECT club.id, club.city, club.address 
FROM club
LEFT JOIN club_competition_association 
ON club.id = club_competition_association.club_id;