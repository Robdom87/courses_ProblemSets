#include <cs50.h>
#include <stdio.h>
#include <string.h>

// Max voters and candidates
#define MAX_VOTERS 100
#define MAX_CANDIDATES 9

// preferences[i][j] is jth preference for voter i
int preferences[MAX_VOTERS][MAX_CANDIDATES];
// what is inputted in the cell is the location of the candidates name in the candidates array
//i is row number
// j is column number
// allows for an array within an array
// Candidates have name, vote count, eliminated status
typedef struct
{
    string name;
    int votes;
    bool eliminated;
}
candidate;

// Array of candidates
candidate candidates[MAX_CANDIDATES];

// Numbers of voters and candidates
int voter_count;
int candidate_count;

// Function prototypes
bool vote(int voter, int rank, string name);
void tabulate(void);
bool print_winner(void);
int find_min(void);
bool is_tie(int min);
void eliminate(int min);

int main(int argc, string argv[])
{
    // Check for invalid usage
    if (argc < 2)
    {
        printf("Usage: runoff [candidate ...]\n");
        return 1;
    }

// telling user the max amount of candidates
    candidate_count = argc - 1;
    if (candidate_count > MAX_CANDIDATES)
    {
        printf("Maximum number of candidates is %i\n", MAX_CANDIDATES);
        return 2;
    }
 // Populate array of candidates
    for (int i = 0; i < candidate_count; i++)
    {
        candidates[i].name = argv[i + 1];
        candidates[i].votes = 0;
        candidates[i].eliminated = false;
    }
 // telling user that the voters inputted are too manu
    voter_count = get_int("Number of voters: ");
    if (voter_count > MAX_VOTERS)
    {
        printf("Maximum number of voters is %i\n", MAX_VOTERS);
        return 3;
    }

    // Keep querying for votes essentially for each voter run the look which contains another loop to run each rank for the candidates
    for (int i = 0; i < voter_count; i++)
    {

        // Query for each rank
        for (int j = 0; j < candidate_count; j++)
        {
            string name = get_string("Rank %i: ", j + 1);

            // Record vote, unless it's invalid - will use preferences variable to fit in the ranking and who is voted for
            if (!vote(i, j, name))
            {
                printf("Invalid vote.\n");
                return 4;
            }
        }

        printf("\n");
    }

    // Keep holding runoffs until winner exists
    while (true)
    {
        // Calculate votes given remaining candidates
        tabulate();

        // Check if election has been won
        bool won = print_winner();
        if (won)
        {
            break;
        }

        // Eliminate last-place candidates
        int min = find_min();
        bool tie = is_tie(min);

        // If tie, everyone wins
        if (tie)
        {
            for (int i = 0; i < candidate_count; i++)
            {
                if (!candidates[i].eliminated)
                {
                    printf("%s\n", candidates[i].name);
                }
            }
            break;
        }

        // Eliminate anyone with minimum number of votes
        eliminate(min);

        // Reset vote counts back to zero
        for (int i = 0; i < candidate_count; i++)
        {
            candidates[i].votes = 0;
        }
    }
    return 0;
}

// Record preference if vote is valid - runs for each voter and each rank one at a time, and make sure to use the preferences variable
bool vote(int voter, int rank, string name)
{
    // TODO
    int counter = 0;
    for ( int e = 0; e < candidate_count; e++)
    {
        if( strcmp (name, candidates[e].name)==0)
        {
            preferences [voter][rank] = e;
            counter++;
        }
    }

    if (counter > 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

// Tabulate votes for non-eliminated candidates - void void means it is calculating from global variables but not necessarily pulling from anything within its engrained function
// lowkey just a way to make less stuff be in main
void tabulate(void)
{
    // TODO
        for ( int v = 0; v < voter_count ; v++)
        {
        if (candidates[preferences [v][0]].eliminated == false) // checl first rank see if all candidates voted for are still in the race. if so it adds to their voter count
        {
            candidates[preferences [v][0]].votes++;
        }
        else
        {
             for ( int r = 1, counter = 0; counter == 0 ; r++) // if the first one was eliminated, then it checks the next if the candidate is in the race
                                                                                        // r-1 is included because for loop checks criteria before running loop, so if the vote is for an uneliminated candidate, it will just not run, and not add a vote to the cadidate
            {
                if (candidates[preferences [v][r]].eliminated == false)
                {
                    candidates[preferences [v][r]].votes++;
                    counter++;
                }
            }
        }
    }
    return;
}

// Print the winner of the election, if there is one
bool print_winner(void)
{
    // TODO
    float Win = voter_count * .5;
    int counter = 0;
     for (int c = 0; c < candidate_count ; c++)
        {
        if (candidates[c].votes > Win) // checl first rank see if all candidates voted for are still in the race. if so it adds to their voter count
        {
            printf("%s\n",candidates[c].name);
            counter++;
        }
        }

    if (counter > 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

// Return the minimum number of votes any remaining candidate has
// account for eliminated candidates
// remove the minimum candidates one at a time until there is a winner
int find_min(void)
{
    // begin by comparing adjacent candidates, establish counter as first non eliminated candidate
    // if first candidate is eliminated, run
    // if second candidate is elimanted look to the right until you find one that is not eliminated with a loop - have a check for end of candidates
    //when comparing if the left most is smaller, and left sides candidate amount to candidate lowest counter
    // if right side smaller take right side
    // TODO
    int lowest = 0;
//establish the lowest interger as the first voter amount of a candidate still in the running
        if (candidates[0].eliminated == false)
        {
            lowest = candidates[0].votes;
        }

        for (int l = 1; lowest == 0 ; l++)
        {
        if (candidates[l].eliminated == false)
        {
                lowest = candidates[l].votes;
        }
        }

//compare each uneliminated candidate to the current lowest amoun
    for (int m = 0; m < candidate_count ; m++)
        {
            if (candidates[m].eliminated == false && candidates[m].votes <= lowest)
            {
                lowest = candidates[m].votes;
            }
        }

    return lowest;
}

// Return true if the election is tied between all candidates, false otherwise
bool is_tie(int min)
{
    // TODO
    int noneliminated = 0;
    int counter = 0;
    // count all non eliminated candidates
    for (int n = 0; n < candidate_count ; n++)
        {
        if (candidates[n].eliminated == false)
        {
                noneliminated++;
        }
        }
    // compare all candidates to min, if matches with min add to counter
    for (int k = 0; k < candidate_count ; k++)
        {
        if (candidates[k].votes == min)
        {
                counter++;
        }
        }

    // if counter = amount of non eliminated candidates, then it is a tie
    if (counter == noneliminated)
    {
        return true;
    }
    else
    {
        return false;
    }

}

// Eliminate the candidate (or candidates) in last place
// functions usually need input if it a variable coming from a different formula
void eliminate(int min)
{
    // TODO
    for (int x= 0; x < candidate_count ; x++)
        {
        if (candidates[x].votes == min)
        {
                candidates[x].eliminated = true;
        }
        }
    return;
}