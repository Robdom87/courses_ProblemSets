#include <ctype.h>
#include <cs50.h>
#include <stdio.h>
#include <string.h>

// Points assigned to each letter of the alphabet
int POINTS[] = {1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10};
//points [0] and points[ 25] will represent A-Z
//Big questions
// how to distinguish between each character in a string, mayeb roon loop that checks if ech letter is available

int compute_score(string word);

int main(void)
{
    // Get input words from both players
    string word1 = get_string("Player 1: ");
    string word2 = get_string("Player 2: ");

    // Score both words
    int score1 = compute_score(word1);
    int score2 = compute_score(word2);

    // TODO: Print the winner
    if (score1 > score2)
    {
        printf("Player 1 Wins!\n");
    }
    else if (score1 < score2)
    {
        printf("Player 2 Wins!\n");
    }
    else if (score1 == score2)
    {
        printf("Tie!\n");
    }
}

int compute_score(string word)
{
    // TODO: Compute and return score for string
 //word is capitalized
    for (int i=0, n = strlen(word); i < n; i++)
    {
        if (word[i] >= 'a' && word[i] <= 'z')
        {
            word[i] = word[i] - 32;

        }
        else
        {
            word[i] = word[i];
        }

    }
// score is attributed to each character in the strang based on the points array then summed up in the score variablecd
    int score = 0;
    for (int i=0, n = strlen (word); i < n; i++)
    {
        if (word[i] >= 'A' && word[i] <= 'Z')
        {
            score = score + POINTS[word[i] - 65];
        }


    }
    return score;
}




