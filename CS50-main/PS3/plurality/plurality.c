#include <cs50.h>
#include <stdio.h>
#include <string.h>

// Max number of candidates
#define MAX 9

// Candidates have name and vote count
typedef struct
{
    string name;
    int votes;
}
candidate;

// Array of candidates
candidate candidates[MAX];

// Number of candidates
int candidate_count;

// Function prototypes
bool vote(string name);
void print_winner(void);

int main(int argc, string argv[])
{
    // Check for invalid usage
    if (argc < 2)
    {
        printf("Usage: plurality [candidate ...]\n");
        return 1;
    }

    // Populate array of candidates
    candidate_count = argc - 1;
    if (candidate_count > MAX)
    {
        printf("Maximum number of candidates is %i\n", MAX);
        return 2;
    }
    for (int i = 0; i < candidate_count; i++)
    {
        candidates[i].name = argv[i + 1];
        candidates[i].votes = 0; // establishes that all votes equal zero
    }

    int voter_count = get_int("Number of voters: ");

    // Loop over all voters
    for (int i = 0; i < voter_count; i++)
    {
        string name = get_string("Vote: ");

        // Check for invalid vote
        if (!vote(name))
        {
            printf("Invalid vote.\n");
        }
    }

    // Display winner of election
    print_winner();
}

// Update vote totals given a new vote
bool vote(string name)
{
    // TODO

    int counter=0;

    for (int i = 0; i < candidate_count; i++)
    {
        if (strcmp( candidates[i].name, name) == 0)
        {
            candidates[i].votes++;
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


// Print the winner (or winners) of the election
void print_winner(void)
{
    // Start with sorting - currently trying to code a bubble sort
    // big question how to do you swap information in arrays
    // after coding will try to just pull the highest number, or the last number

    int higher = 0;

    for (int i = 0, n = candidate_count; i < n ; i++)
    {
        if ( candidates[i].votes > higher) //linear search - can down the line to look for the highest or lowest value
        {
            higher = candidates[i].votes;

        }

    }

     for (int i = 0, n = candidate_count; i < n ; i++)
    {

        if ( candidates[i].votes == higher)
        {
            printf("%s\n",candidates[i].name);
        }


    }

}