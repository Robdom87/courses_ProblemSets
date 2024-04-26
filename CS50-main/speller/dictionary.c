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
    char word[LENGTH + 1];
    struct node *next;
} node;

// TODO: Choose number of buckets in hash table
const unsigned int N = (LENGTH+1) * 'z';

// Hash table
node *table[N];
int Dict_Counter = 0;

// Returns true if word is in dictionary, else false
bool check(const char *word)
{
    // TODO - check here there is an
    int comparison = hash(word);
    node *temp = table[comparison];

    while (temp != NULL)
    {
        // comparison -> next = temp;
        // comparison -> word = temp -> word; //error stems from this pointer
        // temp = table[hash(word)] -> next -> next;

        if (strcasecmp(temp->word, word) == 0)
        {
            return true;
        }
        temp = temp->next;
    }
    return false;
    // return true;
}

// Hashes word to a number
unsigned int hash(const char *word)
{
    // TODO: Improve this hash function
    // not updating
    // TODO: Improve this hash function
    // table[N] = {a->NULL, b->NULL, c->NULL, d->NULL, e->NULL, f->NULL, g->NULL, h->NULL, i->NULL, j->NULL, k->NULL, l->NULL, m->NULL, n->NULL, o->NULL, p->NULL, q->NULL, r->NULL, s->NULL, t->NULL, u->NULL, v->NULL, w->NULL, x->NULL, y->NULL, z->NULL};
    // table[N]->next = {NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL};

    int ASCII = 0;
    for (int i = 0; i < strlen(word); i++)
    {
        ASCII = ASCII + tolower(word[i]);
    }
    return (ASCII % N);
}

// Loads dictionary into memory, returning true if successful, else false
bool load(const char *dictionary)
{
    // TODO
    //       int main(void) //here is where the issue lies
    // {
    // opening file
    FILE *Loaded_dict = fopen(dictionary, "r");
    if (Loaded_dict == NULL)
    {
        printf("Could not open file.\n");
        return 1;
    }

    char word[LENGTH + 1];
    // loop to look thru every and add to the array
    while (fscanf(Loaded_dict, "%s", word) != EOF)
    {
        node *DW = malloc(sizeof(node));
        if (DW == NULL)
        {
            return 1;
        }

        strcpy(DW->word, word);
        DW->next = NULL;

        int hashReturn = hash(word);
        if (table[hashReturn] == NULL)
        {
            table[hashReturn] = DW;
        }
        else
        {
            DW->next = table[hashReturn];
            table[hashReturn] = DW;
        }

        Dict_Counter++;
    }
    fclose(Loaded_dict);
    return true;
}
//  return false;
// }

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
    for (int i = 0; i < N ; i++)
    {
        node *temp = table[i];
        node *pointer = temp;
        node *tp = temp;
        // bool Freed = false;

        while (pointer != NULL)
        {
            pointer = pointer -> next;
            free(tp);
            tp = pointer;
        }

    }
    return true;
}
