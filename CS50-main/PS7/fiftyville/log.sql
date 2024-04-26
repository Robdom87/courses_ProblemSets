-- Keep a log of any SQL queries you execute as you solve the mystery.
SELECT * FROM crime_scene_reports WHERE year = 2021 AND day = 28 AND month = 7 AND street = "Humphrey Street";

SELECT * FROM bakery_security_logs WHERE year = 2021 AND day = 28 AND month = 7 AND hour = 10;

SELECT * FROM interviews WHERE year = 2021 AND day = 28 AND month = 7;

SELECT * FROM people WHERE license_plate IN (SELECT license_plate FROM bakery_security_logs WHERE year = 2021 AND day = 28 AND month = 7 AND hour = 10 AND minute > 15 AND minute < 25); - pull license plates

SELECT * FROM atm_transactions WHERE year = 2021 AND day = 28 AND month = 7 AND atm_location = "Leggett Street" AND transaction_type = "withdraw";

SELECT person_id FROM bank_accounts WHERE account_number IN (SELECT account_number FROM atm_transactions WHERE year = 2021 AND day = 28 AND month = 7 AND atm_location = "Leggett Street" AND transaction_type = "withdraw"); -- pull in person id

SELECT * FROM people WHERE id IN (SELECT person_id FROM bank_accounts WHERE account_number IN (SELECT account_number FROM atm_transactions WHERE year = 2021 AND day = 28 AND month = 7 AND atm_location = "Leggett Street" AND transaction_type = "withdraw")) AND license_plate IN (SELECT license_plate FROM bakery_security_logs WHERE year = 2021 AND day = 28 AND month = 7 AND hour = 10 AND minute > 15 AND minute < 25);

SELECT * FROM phone_calls WHERE year = 2021 AND day = 28 AND month = 7 AND duration < 60 AND caller IN (SELECT phone_number FROM people WHERE id IN (SELECT person_id FROM bank_accounts WHERE account_number IN (SELECT account_number FROM atm_transactions WHERE year = 2021 AND day = 28 AND month = 7 AND atm_location = "Leggett Street" AND transaction_type = "withdraw")) AND license_plate IN (SELECT license_plate FROM bakery_security_logs WHERE year = 2021 AND day = 28 AND month = 7 AND hour = 10 AND minute > 15 AND minute < 25));

SELECT * FROM flights WHERE year = 2021 AND day = 29 AND month = 7 AND hour < 12;

SELECT * FROM passengers WHERE flight_id IN (SELECT id FROM flights WHERE year = 2021 AND day = 29 AND month = 7 AND hour < 12) AND passport_number = 3592750733 OR 5773159633;

SELECT * FROM airports WHERE id = (SELECT destination_airport_id FROM flights WHERE id = 36);

SELECT * FROM people WHERE phone_number = (SELECT receiver FROM phone_calls WHERE id = 233);