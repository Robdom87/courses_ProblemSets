#include <ctype.h>
#include <cs50.h>
#include <stdio.h>
#include <string.h>


int POINTS[] = {1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10};

//int compute_score(string word);

int main(void)
{
    // Get input words from both players
    string word1 = get_string("Player 1: ");
    //string word2 = get_string("Player 2: ");
    for (int i=0, n = strlen (word1); i < n; i++)
    {
        if (word1[i] >= 'a' && word1[i] <= 'z')
        {
            word1[i] = word1[i] - 32;
        }
        else
        {
            word1[i] = word1[i];
        }

    }
    printf("%s\n",word1);


     //for (int i = 0; i < strlen(word1); i++)
    //{
      //  printf("%c",toupper(word1[i]));
    //}
    //printf ("\n");

    // Score both words
    //int score1 = compute_score(word1);
    //int score2 = compute_score(word2);

    // TODO: Print the winner
}

//int compute_score(string word)
//{
    // TODO: Compute and return score for string
    //for (int i = 0; strlen(word); i++)
    //{
        //printf("%c",toupper(word[i]));
    //}
    //char LETTERS[] = {A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z};

    //for (int i = 0; strlen(word); i++)
    //{
        //for ( int e = 25; word [i] == LETTERS [e]; e--) - will not work because does not account for non letter characters
        //{
            //word[i] = e;
        //}

    //printf ("\n");
//}
