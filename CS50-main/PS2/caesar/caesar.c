#include <cs50.h>
#include <stdio.h>
#include <ctype.h>
#include <string.h>
#include <stdlib.h>
#include <strings.h>


bool only_digits (string input);
string rotate ( string plain, int change);



int main(int argc, string argv[])

{
    // case is maintained, when inputting at command line make sure it is a number
    // if string or mix is inputted let them know hpow to use the key
    if (argc != 2)
    {
        printf( "Usage ./caesar key\n");
        return 1;
    }
    else if( only_digits (argv[1]) == 0 && strlen(argv[1]) > 0)
    {
        string plain = get_string("Plain Text: ");

        printf("ciphertext: %s\n",rotate (plain, atoi(argv[1])));
    }
    else
    {
        printf( "Usage ./caesar key\n");
        return 1;
    }




}

bool only_digits (string input)
{
    int number = 0;

    for ( int i = 0, n = strlen (input); i < n; i++)
    {
        if( isdigit (input [i]))
        {
            number++;
        }
    }
    if ( strlen (input) == number)
    {
        return 0;
    }
    else
    {
        return 1;
    }
}

string rotate ( string plain, int change)
{

    for ( int e = 0, n = strlen (plain); e < n; e++)
    {
        if ((plain[e] >= 'A' && plain[e] <= 'Z'))
            {
            plain[e] = (plain[e] - 65 + change)%26 + 'A';
            }
        else if (plain[e] >= 'a' && plain[e] <= 'z')
        {
            plain[e] = (plain[e] - 97 + change)%26 + 'a';
            }

        }

    return plain;
}