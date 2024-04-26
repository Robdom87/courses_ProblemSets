# Simulate a sports tournament

import csv
import sys
import random
import cs50
import math

# Number of simluations to run
N = 1000


def main():

    # Ensure correct usage
    if len(sys.argv) != 2:
        sys.exit("Usage: python tournament.py FILENAME")

    teams = []
    # TODO: Read teams into memory from file - need to store name and team w file open - use csv.DictReader
                                                      # make sure to convert rating to an interger, list of dictionaries, i dictionary per team
    with open(sys.argv[1]) as file:                   #why is it argv 1 shouldnt it be 2?
        reader = csv.DictReader (file)                #why is r not included, with with is indicating what the file is being yused for not necesary?
        for row in reader:                            #loop to proceed for every team in reader
            row["rating"]=int(row["rating"])          #adjust data to be considered an integer
            teams.append(row)                         #add  row info to the teams dictionary


    counts = {}
    # TODO: Simulate N tournaments and keep track of win counts, the key is the name of the team
    for i in range(N):
        Winner = simulate_tournament(teams)
        if Winner in counts:
            counts[Winner] += 1
        else:
            counts[Winner] = 1 #adds winner to the list if not already present, this know to add as dictionary because the [] indicte that there is a key


    # Print each team's chances of winning, according to simulation
    for team in sorted(counts, key=lambda team: counts[team], reverse=True):
        print(f"{team}: {counts[team] * 100 / N:.1f}% chance of winning")


def simulate_game(team1, team2):
    """Simulate a game. Return True if team1 wins, False otherwise."""
    rating1 = team1["rating"]
    rating2 = team2["rating"]
    probability = 1 / (1 + 10 ** ((rating2 - rating1) / 600))
    return random.random() < probability


def simulate_round(teams):
    """Simulate a round. Return a list of winning teams."""
    winners = []

    # Simulate games for all pairs of teams
    for i in range(0, len(teams), 2):
        if simulate_game(teams[i], teams[i + 1]):
            winners.append(teams[i])
        else:
            winners.append(teams[i + 1])

    return winners


def simulate_tournament(teams):
    """Simulate a tournament. Return name of winning team."""
    # TODO
    #probably use recursive calcs, and call simulaate round function
    #teams can be messed with now because it will not be used again

    while len (teams) > 1:
        teams = simulate_round(teams)

    return teams[0]["team"] #but need to specify that it will be the first team only, as it should be the only one left






if __name__ == "__main__":
    main()
