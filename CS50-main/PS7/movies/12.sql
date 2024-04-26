SELECT title
FROM people JOIN stars ON people.id = stars.person_id
JOIN movies ON stars.movie_id=movies.id --Joined to the join
WHERE name = "Johnny Depp" --first checks the tripled join table to Johnny depp movies
AND movie_id IN -- then check the movies in which helena is in, and with the AND both must be true to bring up title
    (SELECT movie_id
    FROM stars JOIN people ON stars.person_id= people.id
    WHERE name = "Helena Bonham Carter");
