SELECT name
FROM people JOIN stars ON people.id = stars.person_id
JOIN movies ON stars.movie_id=movies.id
WHERE name != (SELECT name FROM people WHERE name = "Kevin Bacon" AND birth = 1958)
AND movie_id IN (
        SELECT movie_id
        FROM stars JOIN people ON stars.person_id= people.id
        WHERE name = "Kevin Bacon" AND birth = 1958);
