// Implements a dictionary's functionality

#include <ctype.h>
#include <stdbool.h>
#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <strings.h>
#include <stdlib.h>

#include "dictionary.h"

// Represents a node in a hash table
typedef struct node
{
    char word[LENGTH + 1]; //+1 to account for null
    struct node *next;
}
node;

// TODO: Choose number of buckets in hash table - will likely need to change
const unsigned int N = 26;

// Hash table
node *table[N]; //global pointer array - will represent has table

int Dict_Counter = 0;

// Returns true if word is in dictionary, else false
bool check(const char *word)
{
    // TODO
    //lowercase all letters in word

    //go all the way down the array line, to see if word is present
    node *comparison =table[hash(word)];
    node *temp = table[hash(word)] -> next;
    bool correct = false;//if misspelled it will be false
    bool end = false;
    while (end != true)
    {
        comparison -> next = temp;
        comparison -> word = temp -> word;
        temp = table[hash(word)] -> next -> next;

        if (strcasecmp( comparison -> word, word)== 0)
        {
            correct = true;
            end = true;
        }
        else if (comparison -> next == NULL)
        {
            correct = false;
            end = true;
        }
    }
    return correct;
}

// Hashes word to a number
unsigned int hash(const char *word)
{
    // TODO: Improve this hash function
    table[N]={a -> NULL,b -> NULL,c -> NULL,d -> NULL,e -> NULL,f -> NULL,g -> NULL,h -> NULL,i -> NULL,j -> NULL,k -> NULL,l -> NULL,m -> NULL,n -> NULL,o -> NULL,p -> NULL,q -> NULL,r -> NULL,s -> NULL,t -> NULL,u -> NULL, v -> NULL,w -> NULL,x -> NULL,y -> NULL,z -> NULL};
    //table[N] -> next={NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL};


    int i = 0;
    while ( strcasecmp(word[0], table[i] -> word) != 0 || i < N )
    {
        i++;
    }
    return i;
}

// Loads dictionary into memory, returning true if successful, else false
bool load(const char *dictionary);

    // TODO
    int main(void)
{
    //opening file
    FILE *Loaded_dict = fopen(*dictionary, "r");
    if (Loaded_dict == NULL)
    {
        printf("Could not open file.\n");
        return 1;
    }

    char* word[LENGTH + 1];
    //loop to look thru every and add to the array
    while (fscanf(Loaded_dict,"%s",word))
    {
        node *DW = malloc(sizeof(word[LENGTH + 1]));
        if ( DW == NULL)
        {
            return 1;
        }


        node *tmp=NULL;
        tmp -> next = table[hash(word)];
        table[hash(word)] -> next = DW;
        DW -> next = tmp;
        Dict_Counter++;
    }



    return true;
}


// Returns number of words in dictionary if loaded, else 0 if not yet loaded
unsigned int size(void)
{
    // TODO
    return Dict_Counter;
}

// Unloads dictionary from memory, returning true if successful, else false
bool unload(void)
{
    // TODO
    for (int i = 0; i < N -1; i++)
    {
    node *temp = table[i] -> next;
    bool end = false;
    // bool Freed = false;

        while ( end != true)
        {
            free (table [i]);
            temp = table[i] -> next -> next;

        if (temp -> next == NULL)
        {
            end = true;
        }
        }
    if (i == N-1)
    {
        // Freed = true;
    }
    }

    return false;
}
